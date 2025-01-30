import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOBD_URI);
        console.log("Connected to mongodb");
    } catch(error) {
        console.log("Error connecting to mongodb: ", error);
    }
}