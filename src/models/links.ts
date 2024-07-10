import { Schema } from "mongoose";
import { createModals } from "@/utils/db";

const linkSchema = new Schema(
  {
    _id: String,
    link: String,
    desc: String,
    title: String,
  },
  { timestamps: true },
);

export const links = createModals("links", linkSchema);
