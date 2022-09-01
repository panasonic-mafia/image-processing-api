import sharp from "sharp";
import path, { ParsedPath } from "path";
import { existsSync } from "fs";

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
        const newPath: string = path.join(
            process.cwd(),
            "assets",
            "thumb",
            `${parsedPath.name}_thumb_${width}x${height}${parsedPath.ext}`
        );

        await sharp(imgPath)
            .resize({ width: width, height: height, fit: "outside" })
            .toFile(newPath);
        return
    } catch (error) {
        console.log(error);
        throw new Error("Error when resizing the image");
    }
};

export default resizeImage;
