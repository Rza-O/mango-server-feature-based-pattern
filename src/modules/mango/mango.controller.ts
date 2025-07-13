import { Request, Response } from "express";
import Mango from "./mango.model";
import { mongo } from "mongoose";
import { MangoService } from "./mango.service";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import AppError from "../../error/appError";

// const createMango = async (req: Request, res: Response) => {
// 	try {
// 		const data = await MangoService.createMangoIntoDB(req.body);
// 		res.send({
// 			success: true,
// 			message: "Mango Created Successfully",
// 			data,
// 		});
// 	} catch (error) {
// 		res.send({
// 			success: false,
// 			message: "Error Hppend",
// 			error,
// 		});
//   }
// };

const createMango = catchAsync(async (req: Request, res: Response) => {
	const data = await MangoService.createMangoIntoDB(req.body);
	sendResponse(res, {
		statusCode: 201,
		success: true,
		message: "Mango Added Successfully!",
		data,
	});
});

// const getMangos = async (req: Request, res: Response) => {
// 	try {
// 		// service layer
// 		const data = await Mango.find();

// 		res.send({
// 			success: true,
// 			message: "Mango getting Successfully",
// 			data,
// 		});
// 	} catch (error) {
// 		res.send({
// 			success: true,
// 			message: "Error",
// 			error,
// 		});
// 	}
// };

const getMangos = catchAsync(async (req: Request, res: Response) => {
	throw new AppError(404, "mongo go!");
	const data = await Mango.find();
	sendResponse(res, {
		statusCode: 200,
		success: true,
		message: "Mango Retrieved Successfully!",
		data,
	});
});

const getMangoById = async (req: Request, res: Response) => {
	try {
		const mangoId = req.params.mangoId;
		// service layer
		const data = await MangoService.getMangoByIdFromDB(mangoId);

		res.send({
			success: true,
			message: "Mango getting Successfully",
			data,
		});
	} catch (error) {
		res.send({
			success: false,
			message: "Error",
			error,
		});
	}
};

const updateMango = async (req: Request, res: Response) => {
	try {
		const mangoId = req.params.mangoId;

		const data = await Mango.findByIdAndUpdate(mangoId, req.body, {
			new: true,
			runValidators: true,
		});
		res.send({
			success: true,
			message: "Mango updated Successfully",
			data,
		});
	} catch (error) {
		res.send({
			success: false,
			message: "Error",
			error,
		});
	}
};

const deleteMangoById = async (req: Request, res: Response) => {
	const mangoId = req.params.mangoId;

	const data = await Mango.findByIdAndDelete(mangoId);
	res.send({
		success: true,
		message: "Mango deleted Successfully",
		data,
	});
};

export const mangoController = {
	createMango,
	getMangos,
	getMangoById,
	updateMango,
	deleteMangoById,
};
