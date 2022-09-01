import { Router, Request, Response, NextFunction } from "express";
import path from "path";
import fs from "node:fs";
import resizeImage from "../../utils/resizeImage";

const images = Router();

images.get("/", async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const filename: string = req.query.filename as unknown as string;
        const width: number = parseInt(req.query.width as string);
        const height: number = parseInt(req.query.height as string);

        //validating the input
        if (!width || !height) {
            res.status(400).send("Width or height parameters are wrong or missing");
        }

        //check if raw image exists
        const rawImgPath: string = path.join(
            process.cwd(),
            "assets",
            `${filename}.jpg`
        );
        const rawImgExists: boolean = fs.existsSync(rawImgPath);

        if (!rawImgExists) {
            res
                .status(400)
                .send("Image not found, try to provide different filename");
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
        } else {
            await resizeImage(rawImgPath, width, height);
            res.sendFile(resizedImgPath);
        }
    } catch (error) {
        next(error)
    }
});

export default images;
