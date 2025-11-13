import mongoose from "mongoose";

async function connectDB(url){
    try {
        await mongoose.connect(url);
        console.log("Database connected...");
    } catch (error) {
        console.error("Database connection failed:", error);
    }
}

export default connectDB;