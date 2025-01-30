import { connectMongoDB } from "../../../../lib/mongodb";
import Post from "../../../../models/post";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { name, department } = await req.json();
    console.log(name, department)
    await connectMongoDB();
    await Post.create({ name, department });
    return NextResponse.json({ message: "Post created"}, { status: 201 });
}