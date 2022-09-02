import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";

/**
 *  A custom error handler middleware
 * @param err - error
 * @param req - express request
 * @param res - express response
 * @param next - express next
 */
const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const status = err.status || 500;
    const msg = err.message || "";

    console.log(err.stack);

    res.status(status).send(`An error occured: ${status}: ${msg}`);
  } catch (error) {
    next(error);
  }
};

export default errorHandler;
