import Post from "@/models/PostModel";
import connectDB from "./../../../utils/connectDb";
import { NextResponse } from "next/server";

export async function GET(request) {
  await connectDB();
  try {
    let data = await Post.find();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
export async function POST(request) {
  await connectDB();
  try {
    let reqBody = await request.json();
    let data = await Post.create({ ...reqBody, thumbnail: "" });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
