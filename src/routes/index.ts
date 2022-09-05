import { Router, Request, Response } from "express";
import { query, validationResult } from "express-validator";
import images from "./api/images";

const routes = Router();

const queryValidators = [
  query('width', 'Width is missing or wrong, please provide correct number').exists({ checkFalsy: true }).isInt({ allow_leading_zeroes: false }),
  query('height', 'Height is missing or wrong, please provide correct number').exists({ checkFalsy: true }).isInt({ allow_leading_zeroes: false }),
  query('filename', 'Filename is empty').exists({ checkFalsy: true })
]

routes.get("/",
  (req: Request, res: Response): void => {
    res.send("Main api route");
  });

routes.use("/images", queryValidators, images);

export default routes;
