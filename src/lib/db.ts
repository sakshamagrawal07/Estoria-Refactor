import mongoose from "mongoose";

export const ConnectDB = async () => {
    const url = process.env.MONGODB_URI as string

    try {
        await mongoose.connect(url)
        console.log("Database Connected")
    } catch (err) {
        console.log("Error connecting to Estoria Database")
    }

}