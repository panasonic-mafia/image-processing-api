import supertest from "supertest";
import app from "../index";

const request = supertest(app);

describe("API endpoints", () => {
  describe("api/images endpoint", () => {
    it("Gets successfull response when hitting endpoint with parameters", async () => {
      const response = await request.get(
        "/api/images?filename=palmtunnel&width=200&height=200"
      );
      expect(response.status).toBe(200);
    });

    it("Should send 400 status code when image does not exists", async () => {
      const response = await request.get(
        "/api/images?filename=nonexistingimage&width=200&height=200"
      );
      expect(response.status).toBe(400);
    });
  });

  describe("main /api endpoint", () => {
    it("Gets successfull response when hitting the endpoint", async () => {
      const response = await request.get("/api");
      expect(response.status).toBe(200);
    });
  });
});
