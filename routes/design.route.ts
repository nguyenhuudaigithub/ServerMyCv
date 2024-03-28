import express from "express";
import { createDesign } from "../controllers/design.controller";
import { authorizeRoles, isAutheticated } from "../middleware/auth";
const profileAdminRoute = express.Router();

profileAdminRoute.post(
  "/createDesign",
  //   isAutheticated,
  //   authorizeRoles("admin"),
  createDesign
);

export default profileAdminRoute;
