import { NextFunction, Request, Response } from "express";
import AppError from "../error/appError";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../modules/user/user.model";

export const auth = (role: string[]) => async (req: Request, res: Response, next: NextFunction) => {
	const token = req.headers.authorization;

	if (!token) {
		throw new AppError(401, "Invalid Authorization");
	}

	const isVerified = jwt.verify(token, "secret") as JwtPayload;

	const isUserExist = await User.findOne({ email: isVerified.email });
	if (!isUserExist) throw new AppError(401, "User doesn't exist!");

	if (!role.includes(isVerified.role)) throw new AppError(400, "Forbidden access");

	console.log("role", role, isVerified.role);

	next();
};
