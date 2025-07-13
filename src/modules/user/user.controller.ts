import { Request, Response } from "express";
import User from "./user.model";
import z, { email } from "zod";
import { UserService } from "./user.service";

const registerUser = async (req: Request, res: Response) => {
	const payload = req.body;

	const data = await UserService.registerUser(payload);

	res.send({
		success: true,
		message: "User Registered Successfully",
		data,
	});
};

const loginUser = async (req: Request, res: Response) => {
	const payload = req.body;

	const data = await UserService.loginUser(payload);

	res.send({
		success: true,
		message: "User Registered Successfully",
		data,
	});
};

const getUsers = async (req: Request, res: Response) => {
	const data = await User.find();

	res.send({
		success: true,
		message: "User retrieved Successfully",
		data,
	});
};

export { registerUser, getUsers, loginUser };
