import { links } from "@/models/links";
import dbConnect from "@/utils/db";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  await dbConnect();
  const userData = await getToken({ req });
  const data = await links.find({ user_id: userData?.id });
  return NextResponse.json(data);
};
