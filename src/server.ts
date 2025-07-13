import mongoose from "mongoose";
import config from "./config";
import app from "./app";

async function server() {
	try {
		await mongoose.connect(config.DB_URL!);
		console.log("🔥Mango Running🥭");

		app.listen(config.PORT, () => {
			console.log(`🚀Server Running on port ${config.PORT} 🚀`);
		});
	} catch (error) {
		console.error(`Server error ${server}`);
	}
}

server();
