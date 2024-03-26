import express from "express";
import {
  activateUser,
  deleteUser,
  getAllUsers,
  getUserInfo,
  loginUser,
  logoutUser,
  registrantionUser,
  socialAuth,
  updateAccessToken,
  updatePassword,
  updateProfilePicture,
  updateUserInfo,
  updateUserRole,
} from "../controllers/user.controller";
import { authorizeRoles, isAutheticated } from "../middleware/auth";
const userRouter = express.Router();

userRouter.post("/registration", registrantionUser);

userRouter.post("/activation-user", activateUser);

userRouter.post("/login", loginUser);

userRouter.get("/logout", isAutheticated, logoutUser);

userRouter.get("/refreshtoken", updateAccessToken);

userRouter.get("/me", isAutheticated, getUserInfo);

userRouter.get("/me2", getUserInfo);

userRouter.post("/social-auth", socialAuth);

userRouter.put(
  "/update-user-info",
  isAutheticated,
  updateUserInfo
);

userRouter.put(
  "/update-user-password",
  isAutheticated,
  updatePassword
);

userRouter.put(
  "/update-user-avatar",
  isAutheticated,
  updateProfilePicture
);

userRouter.get(
  "/get-users",
  isAutheticated,
  authorizeRoles("admin"),
  getAllUsers
);

userRouter.put(
  "/update-user",
  isAutheticated,
  authorizeRoles("admin"),
  updateUserRole
);

userRouter.delete(
  "/delete-user/:id",
  isAutheticated,
  authorizeRoles("admin"),
  deleteUser
);
export default userRouter;
