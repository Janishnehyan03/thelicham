import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("DB connected");
    }
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
