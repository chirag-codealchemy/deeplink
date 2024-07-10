import { nanoid } from "nanoid";
import dbConnect from "@/utils/db";
import { links } from "@/models/links";
import { headers } from "next/headers";
import { NextRequest, NextResponse, userAgent } from "next/server";

// export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
//   try {
//     const { ua } = userAgent(req);
//     console.log("🚀 ~ GET ~ ua:", ua);
//     await dbConnect();
//     const data = await links.findById(params.id);
//     if (!data) throw new Error("Link not found");
//     const header = headers();
//     header.set("");
//     return NextResponse.redirect(data.link, { headers: {} });
//   } catch (error) {
//     console.log("🚀 ~ GET ~ error:", error);
//     return NextResponse.redirect(new URL("/expire", req.url));
//   }
// };

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const { ua } = userAgent(req);
    console.log("🚀 ~ GET ~ ua:", ua);
    await dbConnect();
    const data = await links.findById(params.id);
    if (!data) throw new Error("Link not found");

    const metaTags = `
      <meta property="og:title" content="${data.title}" />
      <meta property="og:description" content="${data.title}" />
      <meta property="og:image" content="https://images.freeimages.com/image/previews/6e4/river-sunset-nature-png-5690483.png" />
      <meta property="og:url" content="${data.link}" />
    `;

    const htmlResponse = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ${metaTags}
        <title>Redirecting...</title>
      </head>
      <body>
        <script>
          setTimeout(() => {
            window.location.href = "${data.link}";
          }, 1000);
        </script>
      </body>
      </html>
    `;

    return new NextResponse(htmlResponse, {
      headers: { "Content-Type": "text/html" },
    });
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
