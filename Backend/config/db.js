// import mongoose from "mongoose";

// const mongoURI = process.env.MONGODB_URI;

// export const connectDB = async () => {
//     await mongoose.connect('mongodb+srv://sumitdeycnd:APVJMxy7kgBD7SAQ@cluster0.hnpezrm.mongodb.net/food-del').then(() => console.log("DB Connected successfully"))
// }

import mongoose from "mongoose";
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const mongoURI = process.env.MONGODB_URI;

export const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("DB Connected successfully");
    } catch (err) {
        console.error("DB connection failed", err);
        process.exit(1); // Exit the process with failure
    }
};
