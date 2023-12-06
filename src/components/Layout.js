import React from "react";
import CustomNavbar from "./CustomNavbar";

export default function Layout({ children }) {
  return (
    <>
      <CustomNavbar />
      {children}
    </>
  );
}
