import React from "react";
import { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

export function PageRoot({ children }: PageProps) {
  return (
    <div className={currentPage <= index + 2 ? "flip" : "flip fliped"} >
      {children}
    </div>
  );
}
