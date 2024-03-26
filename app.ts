require("dotenv").config();
import express, { NextFunction, Request, Response } from "express";
export const app = express();
import cors from "cors";
import compression from "compression";
import cookieParser from "cookie-parser";
import { ErrorMiddleware } from "./middleware/error";
import { rateLimit } from "express-rate-limit";

import userRouter from "./routes/user.route";

app.use(express.json({ limit: "50mb" }));

app.use(cookieParser());
app.use(compression());

app.use(
  cors({
    origin: process.env.ORIGIN,
    // origin: ["http://localhost:3000"],
    credentials: true, 
  })
);

//api request limit
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: "draft-7",
  legacyHeaders: false,
});

// Router
app.use("/api/v1", userRouter);


app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "API is working",
  });
});

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not find ...`) as any;
  err.statusCode = 404;
  next(err);
});

// middleware calls
app.use(limiter);

app.use(ErrorMiddleware);
