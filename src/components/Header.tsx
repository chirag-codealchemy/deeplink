"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

export function Header() {
  const { data, status } = useSession();

  if (status === "loading") return null;

  return (
    <div className="flex h-20 w-full max-w-screen-xl flex-row items-center justify-between">
      <Link href="/">
        <Image src={"/images/textLogo.png"} width={743} height={296} alt="logo" className="h-20 w-44 object-contain" />
      </Link>

      {data?.user ? (
        <div className="dropdown dropdown-end dropdown-bottom">
          <button tabIndex={0} className="btn btn-square btn-ghost overflow-hidden">
            <Image width={200} height={200} alt="profile" className="h-full w-full" src={data?.user?.image || "/images/imgPlaceholder.png"} />
          </button>
          <ul tabIndex={0} className="menu dropdown-content z-50 w-52 rounded-box bg-base-100 p-2 shadow">
            <li>
              <Link href={"/dashboard"}>Dashboard</Link>
            </li>
            <li onClick={() => signOut()}>
              <p>Logout</p>
            </li>
          </ul>
        </div>
      ) : (
        <button
          className="btn btn-square btn-ghost w-fit px-2"
          onClick={() => {
            signIn("google")
              .then((res) => console.log("🚀 ~ signIn ~ res:", res))
              .catch((e) => console.log("🚀 ~ signIn ~ e:", e));
          }}
        >
          Get Started
        </button>
      )}
    </div>
  );
}
