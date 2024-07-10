import "./globals.css";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "sweetalert2/src/sweetalert2.scss";

import type { Metadata } from "next";
import { FC, ReactNode } from "react";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Sort Link",
  description: "Generated sort links with 1 click",
};

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <html lang="en">
    <body className={nunito.className}>{children}</body>
  </html>
);

export default RootLayout;
