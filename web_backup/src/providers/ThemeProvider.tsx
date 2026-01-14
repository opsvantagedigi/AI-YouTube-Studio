"use client";
import React from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <div data-theme="light">{children}</div>;
}

export default ThemeProvider;
