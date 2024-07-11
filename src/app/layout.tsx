import "./globals.css";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "sweetalert2/src/sweetalert2.scss";

import type { Metadata } from "next";
import { FC, ReactNode } from "react";
import { Nunito } from "next/font/google";
import Provider from "./provider";

const nunito = Nunito({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Sort Link",
  description: "Generated sort links with fev clicks",
};

const RootLayout: FC<{ children: ReactNode; params: any }> = ({ children, params: { session, ...params } }) => (
  <html lang="en">
    <body className={nunito.className}>
      <Provider params={params}>{children}</Provider>
    </body>
  </html>
);

export default RootLayout;
