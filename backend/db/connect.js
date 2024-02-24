import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("connected to mongodb!");
    } catch (error) {
        console.log("error in connecting to mongodb" + error.message);
    }
}

export default connectToDB;