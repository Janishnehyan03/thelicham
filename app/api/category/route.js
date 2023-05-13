import Category from "@/models/CategoryModel";
import { NextResponse } from "next/server";
import connectDB from "@/utils/connectDb";

export async function GET(request) {
  await connectDB();
  try {
    let data = await Category.find();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
export async function POST(request) {
  await connectDB();
  try {
    let reqBody = await request.json();
    let data = await Category.create({ name: reqBody.name });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
