import Image from "next/image";
import React, { useState } from "react";
import { QrModal } from "./QrModal";
import Link from "next/link";
import moment from "moment";

function LinkList() {
  const [data, setData] = useState([]);
  return (
    <table className="table mx-auto mt-4 w-11/12 max-w-screen-xl">
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
  );
}

export default LinkList;
