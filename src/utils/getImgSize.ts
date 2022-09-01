import sharp from "sharp";

const getImgSize = async (
  filepath: string
): Promise<{ width: number; height: number }> => {
  const imgMeta = await sharp(filepath).metadata();
  const width = imgMeta.width as unknown as number;
  const height = imgMeta.height as unknown as number;
  return { width, height };
};

export default getImgSize;
