import express, { Application, NextFunction, Request, Response } from "express";
import routes from "./modules/routes";

const app: Application = express();

app.use(express.json());
app.use("/api", routes);

app.get("/", async (req: Request, res: Response) => {
	res.send("server is running!!");
});

// Global Error Handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
	res.status(500).json({
		success: false,
		message: error.message || "Something Went Wrong",
		errorDetails: error,
	});
});

export default app;
