import { nanoid } from "nanoid";
import dbConnect from "@/utils/db";
import { links } from "@/models/links";
import { NextRequest, NextResponse, userAgent } from "next/server";

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const { ua } = userAgent(req);
    console.log("🚀 ~ GET ~ ua:", ua);
    await dbConnect();
    const data = await links.findById(params.id);
    if (!data) throw new Error("Link not found");
    // iphone - android
    return NextResponse.redirect(data.link);
  } catch (error) {
    console.log("🚀 ~ GET ~ error:", error);
    return NextResponse.redirect(new URL("/expire", req.url));
  }
};

export const POST = async (req: NextRequest) => {
  await dbConnect();
  const data = await req.json();
  const [{ _id }] = await links.insertMany([{ _id: nanoid(12), link: data?.link, title: data?.title, desc: data?.desc }], { lean: true });
  return NextResponse.json({ message: "Link created successfully", _id });
};
