import { Schema } from "mongoose";
import { createModals } from "@/utils/db";

const userSchema = new Schema(
  {
    _id: String,
    name: String,
    email: String,
    image: String,
  },
  { timestamps: true },
);

export const users = createModals("users", userSchema);
