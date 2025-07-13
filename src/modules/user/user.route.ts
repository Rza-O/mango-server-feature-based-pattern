import { NextFunction, Request, Response, Router } from "express";
import { getUsers, loginUser, registerUser } from "./user.controller";
import { userZodSchema } from "./user.validate";
import { validateRequest } from "../../middlware/validateRequest";
import { auth } from "../../middlware/auth";
import { UserRole } from "./user.constraint";

const userRoute = Router();

userRoute.post(
	"/",

	// same middleware
	// async (req: Request, res: Response, next: NextFunction) => {
	//    await userZodSchema.userCreateZodSchema.parseAsync(req.body);
	//    next();
	// },

	//with dry principle
	validateRequest(userZodSchema.userCreateZodSchema),

	registerUser
);
userRoute.get("/", auth([UserRole.Admin]), getUsers);
userRoute.post("/login", validateRequest(userZodSchema.userLoginZodSchema), loginUser);

export default userRoute;
