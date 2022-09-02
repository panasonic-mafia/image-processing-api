import sharp from "sharp";

/**
 * Get width and height of image
 * @param filepath - path to image
 * @returns width and height of image
 */
const getImgSize = async (
  filepath: string
): Promise<{ width: number; height: number }> => {
  const imgMeta = await sharp(filepath).metadata();
  const width = imgMeta.width as unknown as number;
  const height = imgMeta.height as unknown as number;
  return { width, height };
};

export default getImgSize;
