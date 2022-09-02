import { Router, Request, Response } from "express";
import images from "./api/images";

const routes = Router();

routes.get("/", (req: Request, res: Response): void => {
  res.send("Main api route");
});

routes.use("/images", images);

export default routes;
