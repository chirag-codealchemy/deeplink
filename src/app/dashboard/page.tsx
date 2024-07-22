"use client";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { QrModal } from "@/components/QrModal";
import { IoSearchSharp } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import CreateLinkModal from "@/components/CreateLinkModal";

function Page() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("/api/get-links")
      .then((r) => r.json())
      .then(setData);
  };

  return (
    <div className="bg-base-100">
      <div className="mx-auto w-11/12 max-w-screen-xl">
        <Header />
        <article className="prose">
          <h2>Links & QR Code</h2>
        </article>
        <div className="mt-4 flex w-full justify-between">
          <label className="input input-bordered flex w-fit items-center gap-2">
            <input type="text" className="w-auto" placeholder="Search" />
            <IoSearchSharp />
          </label>
          <CreateLinkModal getData={getData} />
        </div>
      </div>
      {!data.length ? (
        <div className="flex items-center justify-center">
          <Image src={"/images/emptyList.jpg"} width={500} height={500} alt="Empty list" />
        </div>
      ) : (
        <table className="table mx-auto mt-4 w-11/12 max-w-screen-xl">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Link Preview</th>
              <th>QR Code</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.map((e, i) => (
              <tr key={"key" + i}>
                <td className="min-w-64 grow-0 basis-1">
                  <div className="flex items-center gap-3">
                    <div className="avatar mask mask-squircle h-12 w-12">
                      <Image src={e.image || "/images/imgPlaceholder.png"} alt="Link Image" width={128} height={128} className="h-12 w-12 bg-gray-100 object-cover shadow-2xl" />
                    </div>
                    <div>
                      <div className="text-lg font-bold">{e.name}</div>
                      <div className="w-fit overflow-visible text-xs opacity-50">{moment().format("ll")}</div>
                    </div>
                  </div>
                </td>
                <td className="w-full grow basis-1">
                  <p className="text-lg font-bold">{e.title || "N/A"}</p>
                  <p className="line-clamp-2 max-w-screen-sm flex-1">{e.desc || "N/A"}</p>
                </td>
                <td className="grow-0 basis-1">
                  <QrModal _id={e?._id + "test"} {...e} />
                </td>
                <th className="grow-0 basis-1">
                  <Link href={e.link} target="_blank" className="btn btn-primary btn-sm">
                    Link
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Page;
