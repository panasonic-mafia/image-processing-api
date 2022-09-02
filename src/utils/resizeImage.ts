import sharp from "sharp";
import path, { ParsedPath } from "path";
import { existsSync, mkdirSync } from "fs";

/**
 * Resize image based on input width and height
 * @param imgPath
 * @param width
 * @param height
 * @returns
 */
const resizeImage = async (
  imgPath: string,
  width: number,
  height: number
): Promise<void> => {
  const parsedPath: ParsedPath = path.parse(imgPath);

  if (!existsSync(imgPath)) {
    throw new Error("Image does not exists");
  }
  if (!width || !height) {
    throw new Error("Width or height is not provided");
  }

  try {
    //create thumb folder if missing
    const thumbFolder: string = path.join(process.cwd(), "assets", "thumb");
    if (!existsSync(thumbFolder)) {
      mkdirSync(thumbFolder);
    }

    const newPath: string = path.join(
      process.cwd(),
      "assets",
      "thumb",
      `${parsedPath.name}_thumb_${width}x${height}${parsedPath.ext}`
    );

    await sharp(imgPath)
      .resize({ width: width, height: height, fit: "outside" })
      .toFile(newPath);
    return;
  } catch (error) {
    console.log(error);
    throw new Error("Error when resizing the image");
  }
};

export default resizeImage;
