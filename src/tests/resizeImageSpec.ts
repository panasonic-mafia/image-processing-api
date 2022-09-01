import resizeImage from "../utils/resizeImage";
import path from "path";

describe("Utils", () => {
  describe("resizeImage", () => {
    it("Should throw an error when image path does not exists", async () => {
      await expectAsync(resizeImage("", 100, 200)).toBeRejectedWithError(
        "Image does not exists"
      );
    });

    it("Should not throw an error when image exists", async () => {
      const imgPath = path.resolve(__dirname, "../../assets/encenadaport.jpg");
      await expectAsync(resizeImage(imgPath, 100, 200)).toBeResolved();
    });
  });
});
