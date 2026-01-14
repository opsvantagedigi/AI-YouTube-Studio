"use client";
import React from "react";
import QueryProvider from "@/src/providers/QueryProvider";
import ThemeProvider from "@/src/providers/ThemeProvider";
import ToastProvider from "@/src/providers/ToastProvider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <ThemeProvider>
        <ToastProvider>{children}</ToastProvider>
      </ThemeProvider>
    </QueryProvider>
  );
}

export default AppProviders;
