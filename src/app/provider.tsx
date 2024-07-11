"use client";
import React, { FC, ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

type ProviderProps = FC<{ children: ReactNode; params: any }>;

const Provider: ProviderProps = ({ params, children }) => <SessionProvider session={params?.session}>{children}</SessionProvider>;

export default Provider;
