import React from "react";
import Image from "next/image";

const LinkExpiryPage = () => (
  <div className="flex min-h-screen items-center justify-center bg-[#E1EFFF]">
    <div className="flex flex-col items-center rounded-lg bg-white p-10 shadow-lg md:flex-row">
      <div className="mb-8 md:mb-0 md:w-1/2">
        <h1 className="mb-4 text-3xl font-bold text-gray-800">Oops, this link is not valid</h1>
        <p className="mb-6 text-gray-600">Maybe the link has expired, revoked, or maybe it was not copied correctly.</p>
        <button className="rounded-full bg-[#2C82DF] px-4 py-2 font-semibold text-white transition duration-300 hover:opacity-90">Take me Home</button>
      </div>
      <div className="md:w-1/2">
        <Image src="/images/linkExpire.png" alt="Expired Link " className="h-auto w-full" width={675} height={450} />
      </div>
    </div>
  </div>
);

export default LinkExpiryPage;
