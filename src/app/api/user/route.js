import { connectMongoDB } from "@/lib/mongodb";
import User from "@/model/user";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const {name, email} = await request.json();
    await connectMongoDB();
    await User.create({email, name});
    return NextResponse.json({message: "user created successfully"}, {status: 201})
}