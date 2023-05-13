import User from "@/models/UserModel";
import connectDB from "@/utils/connectDb";
import { NextResponse } from "next/server";

export async function POST(request) {
  await connectDB();
  try {
    const { name, email, password } = await request.body.json();

    if (!name || !email || !password) {
      return NextResponse.error(400, "Name, email, and password are required");
    }

    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.error(409, "User with that email already exists");
    }

    const user = await User.create({
      name,
      email,
      password, // hash the password before saving it to the database
    });

    return NextResponse.success(201, "User created successfully", {
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
