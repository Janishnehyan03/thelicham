import connectDB from "./../../../utils/connectDb";
import { NextResponse } from "next/server";
import Author from "@/models/AuthorModel";

export async function GET(request) {
  await connectDB();
  return Response("hello world");
}
export async function POST(request) {
  await connectDB();
  try {
    let reqBody = await request.json();
    let data = await Author.create(reqBody);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
