import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../utils/ErrorHandler";

export const ErrorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Server error ...";

  // Sai id mongodb
  if (err.name == "CastError") {
    const message = `Cast Error ${err.path} ...`;
    err = new ErrorHandler(message, 400);
  }

  // Lỗi key trùng lặp
  if (err.code === 1100) {
    const message = `Repeat key ${Object.keys(err.keyValue)} ...`;
    err = new ErrorHandler(message, 400);
  }

  // Lỗi JWT sai
  if (err.code == "JsonWebTokenError") {
    const message = `Json Web Token Error ...`;
    err = new ErrorHandler(message, 400);
  }

  // Lỗi JWT hết hạn
  if (err.name === "TokenEpiredError") {
    const message = `Token Epired Error ...`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
