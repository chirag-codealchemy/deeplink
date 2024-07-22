"use client";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";

function CreateLinkModal({ getData }: { getData: () => void }) {
  const linkModalRef = useRef<HTMLDialogElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data: any) => {
    fetch("/api/create-link", { method: "POST", body: JSON.stringify(data) })
      .then((res) => res.json())
      .then(() => getData())
      .catch((e) => console.log("🚀 ~ fetch ~ e:", e))
      .finally(() => linkModalRef.current?.close());
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={() => linkModalRef.current?.showModal()}>
        Create New
      </button>
      <dialog ref={linkModalRef} className="modal">
        <div className="modal-box w-11/12 max-w-sm">
          <div>
            <div className="prose">
              <h2>Create New Sort Link</h2>
            </div>
            <label className="label">Name</label>
            <input type="text" placeholder="ex1" className="input input-bordered w-full" {...register("name", { required: true, maxLength: 30 })} />
            {errors.name?.message && <label className="label-text text-red-500">{String(errors.name?.message)}</label>}
            <label className="label mt-1">Link</label>
            <input
              type="text"
              placeholder="https://example.com"
              className="input input-bordered w-full"
              {...register("link", { required: true, pattern: { value: /^https?\:\/\//, message: "Enter a valid link" } })}
            />
            {errors.link?.message && <label className="label-text text-red-500">{String(errors.link?.message)}</label>}
            <div className="collapse collapse-arrow mt-4 bg-gray-100">
              <input type="checkbox" />
              <div className="collapse-title flex items-center gap-1 text-xl font-medium">
                Link preview<label className="label-text">(optional)</label>
              </div>
              <div className="collapse-content">
                <label className="label gap-2">
                  Title
                  <input type="text" placeholder="example" className="input input-bordered w-auto" {...register("title")} />
                </label>
                <label className="label gap-2">
                  Description
                  <input type="text" placeholder="example site" className="input input-bordered w-auto" {...register("desc")} />
                </label>
                <label className="label gap-2">
                  Image Link
                  <input type="text" className="input input-bordered w-auto" placeholder="https://example.com/img.png" {...register("image")} />
                </label>
              </div>
            </div>
            <button onClick={handleSubmit(submit)} className="btn btn-primary mt-4 w-full">
              Create
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button />
        </form>
      </dialog>
    </div>
  );
}

export default CreateLinkModal;
