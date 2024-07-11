import { nanoid } from "nanoid";
import dbConnect from "@/utils/db";
import { links } from "@/models/links";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export const POST = async (req: NextRequest) => {
  try {
    await dbConnect();
    const data = await req.json();
    const userData = await getToken({ req });
    if (userData) return NextResponse.json({ message: "Unauthorized access" }, { status: 401 });
    const [{ _id }] = await links.insertMany([{ _id: nanoid(12), link: data?.link, title: data?.title, desc: data?.desc }], { lean: true });
    return NextResponse.json({ message: "Link created successfully", _id });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
