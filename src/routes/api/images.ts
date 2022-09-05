import { Router, Request, Response, NextFunction } from "express";
import path from "path";
import fs from "node:fs";
import resizeImage from "../../utils/resizeImage";
import AppError from "../../errors/AppError";
import { Result, validationResult } from "express-validator";

const images = Router();

/**
 * A route for serving resized images from assets/thumbs folder.
 * If resized image is missing then image is resized first and then served.
 */
images.get(
  "/",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const filename: string = req.query.filename as unknown as string;
      const width: number = parseInt(req.query.width as string);
      const height: number = parseInt(req.query.height as string);

      //validating the input
      const validationErrors: Result = validationResult(req);
      if (!validationErrors.isEmpty()) {
        next(
          new AppError(
            400,
            JSON.stringify(validationErrors.array())
          )
        );
        return;
      }

      //check if raw image exists
      const rawImgPath: string = path.join(
        process.cwd(),
        "assets",
        `${filename}.jpg`
      );
      const rawImgExists: boolean = fs.existsSync(rawImgPath);

      if (!rawImgExists) {
        next(
          new AppError(
            400,
            "Image not found, try to provide different filename"
          )
        );
        return;
      }

      //check if resized image exists
      const resizedImgPath: string = path.join(
        process.cwd(),
        "assets",
        "thumb",
        `${filename}_thumb_${width}x${height}.jpg`
      );
      const resizedImgExists: boolean = fs.existsSync(resizedImgPath);
      if (resizedImgExists) {
        res.sendFile(resizedImgPath);
        return;
      } else {
        await resizeImage(rawImgPath, width, height);
        res.sendFile(resizedImgPath);
        return;
      }
    } catch (error) {
      next(new AppError(500, "Unknown error"));
      return;
    }
  }
);

export default images;
