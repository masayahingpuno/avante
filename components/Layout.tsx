import React from "react";
import Header from "./Header";
//import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="bg-slate-100">
      <Header />
      {children}
    </div>
  );
}
