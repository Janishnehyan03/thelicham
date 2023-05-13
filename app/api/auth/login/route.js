import User from "@/models/UserModel";
import connectDB from "@/utils/connectDb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request) {
  await connectDB();
  try {
    const { email, password } = await request.body.json();
    if (!email || !password) {
      return NextResponse.error(400, "email and password are required");
    }
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    return NextResponse.success(201, "Logged in  successfully", {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    return NextResponse.json(error);
  }
}
