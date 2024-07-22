import dbConnect from "@/utils/db";
import { botMeta } from "@/constants";
import { links } from "@/models/links";
import { NextRequest, NextResponse, userAgent } from "next/server";

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const { isBot } = userAgent(req);
    await dbConnect();
    const data = await links.findById(params.id);
    if (!data) throw new Error("Link not found");
    return isBot ? new NextResponse(botMeta(data)) : NextResponse.redirect(data.link);
  } catch (error) {
    console.log("🚀 ~ GET ~ error:", error);
    return NextResponse.redirect(new URL("/expire", req.url));
  }
};
