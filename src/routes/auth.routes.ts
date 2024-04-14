import { NextFunction, Request, Response, Router } from "express";
import asyncHandler from "express-async-handler";
import { checkJwt } from "../middleware/auth.middleware.old";
import { UserController } from "../controllers/user.controller";
import { authentication, authorization } from "../middleware/auth.middleware";
import { UserRole } from "../types/roles.type";
import { AuthController } from "../controllers/auth.controller";
import { ApplicationError } from "../shared/errors/application.error";
import { AuthError } from "../shared/errors/types/auth.error.type";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from auth" });
});

router.post("/signup", AuthController.register);
router.post("/login", AuthController.login);

router.post(
  "/test",
  asyncHandler(async (req, res, next) => {
    throw new ApplicationError(AuthError.BAD_REQUEST);
  })
);

export { router as authRouter };