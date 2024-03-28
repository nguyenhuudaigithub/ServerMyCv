require("dotenv").config();
import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../utils/ErrorHandler";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import cloudinary from "cloudinary";
import { createNewDesign } from "../services/design.service";

import userModel from "../models/design.model";

export const createDesign = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;

      
      const thumbnail = data.background.backgroundImage.url;

     
      // if (thumbnail) {
      //   // const myCloud = await cloudinary.v2.uploader.upload(thumbnail, {
      //   //   folder: "background",
      //   // });
      
      //   // data.background.thumbnail = {
      //   //   public_id: myCloud.public_id,
      //   //   url: myCloud.secure_url,
      //   // };
      // }
      res.status(201).json({
        success: true,
        data,
      });

      console.log(thumbnail);
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);

export const editDesign = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    // try {
    //   const data = req.body;
    //   const thumbnail = data.thumbnail;
    //   const blogId = req.params.id;
    //   const blogData = (await BlogModel.findById(blogId)) as any;
    //   if (thumbnail && !thumbnail.startsWith("https")) {
    //     await cloudinary.v2.uploader.destroy(blogData.thumbnail.public_id);
    //     const myCloud = await cloudinary.v2.uploader.upload(thumbnail, {
    //       folder: "blog",
    //     });
    //     data.thumbnail = {
    //       public_id: myCloud.public_id,
    //       url: myCloud.secure_url,
    //     };
    //   }
    //   if (thumbnail.startsWith("https")) {
    //     data.thumbnail = {
    //       public_id: blogData?.thumbnail.public_id,
    //       url: blogData?.thumbnail.url,
    //     };
    //   }
    //   const blog = await BlogModel.findByIdAndUpdate(
    //     blogId,
    //     {
    //       $set: data,
    //     },
    //     { new: true }
    //   );
    //   await redis.set(blogId, JSON.stringify(blog));
    //   res.status(201).json({
    //     success: true,
    //     blog,
    //   });
    // } catch (error: any) {
    //   return next(new ErrorHandler(error.message, 500));
    // }
  }
);
