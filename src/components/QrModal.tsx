"use client";
import Toast from "./Toast";
import Image from "next/image";
import QRCode from "react-qr-code";
import { BiCopy } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { getStaticLink } from "@/utils";
import html2canvas from "html2canvas-pro";
import React, { useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { MdOutlineSaveAs } from "react-icons/md";

export const QrModal = ({ _id }: { [key: string]: string }) => {
  const QrRef = useRef<HTMLDivElement>(null);
  const [logoSize, setLogoSize] = useState(80);
  const [showEdit, setShowEdit] = useState(false);
  const [QrImage, setQrImage] = useState<any>(null);
  const QrModalRef = useRef<HTMLDialogElement>(null);
  const [color, setColor] = useState({ bg: "#FFF", fg: "#000" });
  const [showToast, setShowToast] = useState<string | null>(null);

  const downloadQrCode = () => {
    html2canvas(QrRef.current!)
      .then((canvas) => {
        const link = document.createElement("a");
        const imgData = canvas.toDataURL("image/png");
        link.href = imgData;
        link.download = "capture.png";
        link.click();
      })
      .catch((e) => console.log("🚀 ~ html2canvas ~ e:", e));
  };

  return (
    <div>
      <div className="group relative flex items-center justify-center">
        <QRCode size={48} value={getStaticLink(_id)} viewBox={`0 0 48 48`} onClick={() => QrModalRef.current?.showModal()} />
        {!showEdit && <FiEdit size={12} className="absolute hidden h-full w-full items-center justify-center bg-white bg-opacity-80 p-3 group-hover:flex" />}
      </div>
      <dialog ref={QrModalRef} id={_id} className="modal">
        <div className="modal-box w-fit max-w-3xl">
          <div className="flex flex-col items-center justify-center">
            <h3 className="mb-4 text-xl font-bold">Customized QR Code</h3>
            <div className="flex flex-col items-center gap-6">
              <div className={"flex items-center gap-8 rounded-xl border p-4 " + (showEdit ? "flex-row" : "flex-col")}>
                <div ref={QrRef} style={{ backgroundColor: color.bg }} className="group relative flex aspect-square items-center justify-center rounded-xl p-6">
                  {QrImage && <Image src={QrImage} width={logoSize} height={logoSize} alt="test" className="absolute" />}
                  <QRCode size={200} level="H" value={getStaticLink(_id)} viewBox={`0 0 200 200`} bgColor={color.bg} fgColor={color.fg} />
                  {!showEdit && (
                    <div onClick={() => setShowEdit(true)} className="absolute hidden h-full w-full items-center justify-center bg-white bg-opacity-70 group-hover:flex">
                      <FiEdit size={32} />
                    </div>
                  )}
                </div>

                {showEdit && (
                  <div role="tablist" className="tabs tabs-bordered">
                    <input type="radio" name="color_picker" role="tab" className="tab mb-4" aria-label="Logo" />
                    <div role="tabpanel" className="tab-content h-52 w-64">
                      <p className="mb-2">Select Logo</p>
                      <input
                        type="file"
                        id="QrImage"
                        accept="image/*"
                        className="file-input file-input-bordered mx-1 w-64"
                        onChange={(e) => e.target?.files?.[0] && setQrImage(URL.createObjectURL(e.target.files[0]))}
                      />
                      {QrImage && (
                        <>
                          <p className="mb-2 mt-4">Select Size</p>
                          <input type="range" min={40} max={140} className="range w-64" onChange={(e) => setLogoSize(Number(e.target.value))} />
                        </>
                      )}
                    </div>

                    <input type="radio" name="color_picker" role="tab" className="tab mb-4" aria-label="Background" defaultChecked />
                    <div role="tabpanel" className="tab-content h-52">
                      <HexColorPicker color={color.bg} onChange={(v) => setColor((e) => ({ ...e, bg: v }))} className="mx-1" />
                    </div>

                    <input type="radio" name="color_picker" role="tab" className="tab mb-4" aria-label="Foreground" />
                    <div role="tabpanel" className="tab-content h-52">
                      <HexColorPicker color={color.fg} onChange={(v) => setColor((e) => ({ ...e, fg: v }))} className="mx-1" />
                    </div>
                  </div>
                )}
              </div>

              <button className="btn btn-primary flex w-48 items-center justify-center" onClick={showEdit ? () => setShowEdit(false) : downloadQrCode}>
                {showEdit ? (
                  <>
                    <MdOutlineSaveAs size={32} />
                    save
                  </>
                ) : (
                  "Download"
                )}
              </button>
            </div>
            <label className="input input-bordered mt-6 flex w-72 items-center gap-2">
              <input type="text" className="grow" placeholder="No link found" value={getStaticLink(_id)} />
              <BiCopy
                onClick={() => {
                  navigator.clipboard.writeText(getStaticLink(_id));
                  setShowToast("Copy successfully");
                }}
              />
            </label>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
        {showToast && <Toast message="Link copied" type="success" onClose={() => setShowToast(null)} />}
      </dialog>
    </div>
  );
};
