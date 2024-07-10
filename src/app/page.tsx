"use client";
import { faq, hero, hero1, hero2, review } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Swal from "sweetalert2";

export default function Home() {
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  const createCall = () => {
    if (!loading) {
      setLoading(true);
      fetch("lnk/create", { method: "POST", body: JSON.stringify({ link, title: "test", desc: "test desc" }) })
        .then((r) => r.json())
        .then((res) => {
          Swal.fire({
            icon: "success",
            confirmButtonText: "copy",
            title: "Link created successfully",
            text: "https://srt-lnk.onrender.com/lnk" + res?._id,
          }).then(({ isConfirmed }) => {
            isConfirmed && navigator.clipboard.writeText("https://srt-lnk.onrender.com/lnk" + res?._id);
          });
        })
        .catch((e) => console.log("🚀 ~ .then ~ e:", e))
        .finally(() => setLoading(false));
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex h-20 w-11/12 max-w-screen-xl flex-row items-center justify-between">
        <div className="flex flex-row">
          {["Platform", "Solution", "Pricing", "Resource"].map((e) => (
            <div key={e} className="mx-3 text-base font-normal">
              {e}
            </div>
          ))}
        </div>
        <div className="flex flex-row">
          <div className="mx-3 text-base font-normal">Log in</div>
          <div>Sign up Free</div>
        </div>
      </div>

      <div className="flex w-11/12 max-w-screen-xl flex-col gap-4 md:gap-10">
        <div className="w-full">
          <Swiper spaceBetween={50} autoplay slidesPerView={1} pagination={{ clickable: true }}>
            {hero.map((e) => (
              <SwiperSlide key={e.title}>
                <div className="flex items-center">
                  <div className="w-6/12">
                    <div className="text-5xl font-medium">{e.title}</div>
                    <div className="my-6 text-xl text-[#979797]">{e.desc}</div>
                    <Link href={"/login"} className="flex h-12 w-60 items-center justify-center rounded-md bg-[#2C82DF] text-xl text-white">
                      Get Started for Free
                    </Link>
                  </div>
                  <Image src={e.image} alt="a" width={350} height={350} className="w-6/12" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mx-auto mb-6 text-center text-4xl font-semibold">Reimagine how you reach, share and engage with your audience</div>

        <div className="mx-auto mb-16 flex w-full max-w-screen-lg flex-col items-start rounded-lg bg-[#F9F9F9] p-5">
          <div className="flex items-center gap-2 text-2xl font-medium">
            <Image alt="qr" width={20} height={20} className="h-8 w-8" src={"/images/qr.png"} />
            Create a QR Code
          </div>
          <div className="mt-4 text-xl">Enter your QR Code destination</div>
          <input
            type="text"
            placeholder="Example:http://super-long-link.com"
            onChange={({ target }) => setLink(target.value)}
            className="my-1 w-full rounded-lg border border-[#979797] p-1"
          />
          <div className="mt-5 flex h-10 w-auto min-w-32 items-center justify-center rounded-md bg-[#2C82DF] text-white" onClick={createCall}>
            {loading ? <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-white" /> : "Create Link"}
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <div className="mt-6 text-xl">No credit card required. Your free plan includes:</div>
            <div className="flex">
              {["Short Links", "QR Codes", "Links-in-bio"].map((e) => (
                <div key={e} className="m-2 flex items-center">
                  <Image width={20} height={20} alt="check" className="h-5 w-5" src={"/images/check.png"} />
                  {e}
                </div>
              ))}
            </div>
          </div>
        </div>

        {hero1.map((item, index) => (
          <div key={item.title} className={"flex flex-col items-center gap-10 " + (index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse")}>
            <Image alt="img" width={350} height={350} src={item.image} className="aspect-square w-6/12" />
            <div className="flex w-6/12 flex-col">
              <div className="text-4xl font-semibold">{item.title}</div>
              <div className="text-xl font-normal text-[#979797]">{item.subTitle}</div>

              <ul className="marker:text-green ml-6 list-image-dot">
                {item.data.map((e) => (
                  <li key={e} className="mt-4 text-2xl font-medium text-[#979797]">
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="flex h-32 w-full items-center justify-center bg-[#E1EFFF]">
        <div className="flex w-11/12 max-w-screen-xl items-center justify-between text-3xl font-semibold">
          Get closer to your audience and customers today.
          <Link href={"/login"} className="flex h-12 w-44 items-center justify-center rounded-md bg-[#2C82DF] text-xl text-white">
            Start for Free
          </Link>
        </div>
      </div>

      <div className="flex w-11/12 max-w-screen-xl flex-col items-center">
        <div className="mt-24 text-center text-4xl font-semibold">The Conections Platform</div>
        <div className="mb-8 mt-4 max-w-screen-lg text-center text-xl text-[#979797]">
          All the product you need to build brand connection, manage links and QR Codes and connect with audiences everywhere, in a single unified platform.
        </div>
        <div className="grid w-full gap-5 md:grid-cols-3">
          {hero2.map((e) => (
            <div key={e.title} className="gap-8">
              <div>
                <Image alt="img" width={150} height={150} src={e.image} className="mb-4 w-full" />
                <div className="mb-4 text-2xl font-medium">{e.title}</div>
                {e.points.map((p) => (
                  <div key={p} className="my-2 flex">
                    <Image alt="img" width={20} height={20} src={"/images/check.png"} className="mx-2 my-0.5 h-5 w-5" />
                    {p}
                  </div>
                ))}
              </div>
              <Link href={"/"} className="border-b border-[#2C82DF] pb-1 text-xl font-semibold text-[#2C82DF]">
                Learn More
              </Link>

              <Link href={"/login"} className="mt-6 flex h-12 items-center justify-center rounded-md bg-[#2C82DF] text-xl text-white">
                Get Started for Free
              </Link>
            </div>
          ))}
        </div>

        <div className="my-20 flex w-full flex-row items-center justify-around">
          {[
            { title: "Global Paying Customer", subTitle: "500K" },
            { title: "Links & QR Codes", subTitle: "256M" },
            { title: "Connections", subTitle: "10B" },
            { title: "App Integration", subTitle: "800+" },
          ].map((e) => (
            <div key={e.title}>
              <div className="text-center text-2xl">{e.title}</div>
              <div className="mt-2 text-center text-3xl font-bold text-[#2C82DF]">{e.subTitle}</div>
            </div>
          ))}
        </div>

        <div>
          <div className="text-center text-4xl font-semibold">Why Customers are saying</div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {review.map((e) => (
              <div key={e.name} className="relative mt-12 rounded-lg bg-[#F9F9F9] p-5">
                <div className="text-xl">{e.desc}</div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image alt="img" width={10} height={10} src={"/images/star.png"} className="h-12 w-12" />
                    <div className="text-xl">{e.name}</div>
                  </div>
                  <div className="flex">
                    {Array(e.review)
                      .fill("")
                      .map((e, i) => (
                        <Image key={i} alt="img" width={10} height={10} src={"/images/star.png"} className="h-5 w-5" />
                      ))}
                  </div>
                </div>
                <div className="absolute -top-20 right-10 text-8xl">,,</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 w-full">
          <div className="text-center text-4xl font-semibold">Frequently Asked Questions</div>
          <div className="mt-3 text-center text-[#979797]">These FAQs should help provide a better understanding of URL shorteners and their usage.</div>
          <div className="my-8 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
            {faq.map((e) => {
              return (
                <div key={e.title} className="mx-auto flex w-10/12 justify-between">
                  {e.title}
                  <Image src={"/images/down.png"} alt="down" width={28} height={28} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex h-32 w-full items-center justify-center bg-[#E1EFFF]">
        <div className="flex w-11/12 max-w-screen-xl items-center justify-between text-3xl font-semibold">
          More than a free link shortener
          <Link href={"/login"} className="flex h-12 w-44 items-center justify-center rounded-md bg-[#2C82DF] text-xl text-white">
            Get Started
          </Link>
        </div>
      </div>

      <div className="h-96" />
    </div>
  );
}
