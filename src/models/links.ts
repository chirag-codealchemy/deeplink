import { Schema } from "mongoose";
import { createModals } from "@/utils/db";

const linkSchema = new Schema(
  {
    _id: String,
    link: String,
    desc: String,
    title: String,
    user_id: { type: String, ref: "users", require: true },
  },
  { timestamps: true },
);

export const links = createModals("links", linkSchema);
