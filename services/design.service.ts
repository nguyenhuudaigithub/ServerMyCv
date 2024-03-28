import { Response } from "express";
import DesignModel from "../models/design.model";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";

// create Design
export const createNewDesign = CatchAsyncError(
  async (data: any, res: Response) => {
    const design = await DesignModel.create(data);
    res.status(201).json({
      success: true,
      design,
    });
  }
);

