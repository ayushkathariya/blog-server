import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string);
    console.log("🚀 Database connected at:", conn.connection.host);
  } catch (error) {
    console.log("🚀 ~ connectDb ~ error:", error);
    process.exit(1);
  }
};

export default connectDb;
