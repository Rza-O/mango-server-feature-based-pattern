import z from "zod";
import { UserRole } from "./user.constraint";

const userCreateZodSchema = z.object({
	name: z.string().min(3, "Name must contain at least three characters").max(255, "Name cannot exceed 255 character"),
	email: z.email("invalid email"),
	// .string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please enter a valid email"),
	phone: z.string(),
	password: z.string(),
	role: z.enum(UserRole),
});

const userLoginZodSchema = z.object({
	email: z.email("invalid email"),
	// .string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please enter a valid email"),
	password: z.string(),
});

export const userZodSchema = {
	userCreateZodSchema,
	userLoginZodSchema,
};
