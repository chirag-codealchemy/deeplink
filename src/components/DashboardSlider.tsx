"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { hero } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/react";

const DashboardSlider = () => (
  <div className="w-full">
    <Swiper spaceBetween={50} autoplay slidesPerView={1} pagination={{ clickable: true }}>
      {hero.map((e) => (
        <SwiperSlide key={e.title}>
          <div className="flex items-center">
            <div className="w-6/12">
              <div className="text-5xl font-medium">{e.title}</div>
              <div className="my-6 text-xl text-[#979797]">{e.desc}</div>
              <Link href={"/"} className="flex h-12 w-60 items-center justify-center rounded-md bg-[#2C82DF] text-xl text-white">
                Get Started for Free
              </Link>
            </div>
            <Image src={e.image} alt="a" width={350} height={350} className="w-6/12" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default DashboardSlider;
