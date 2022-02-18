import React from "react";
import Header from "./Header.tsx";
//import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
