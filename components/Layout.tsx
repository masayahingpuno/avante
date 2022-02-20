import React from "react";
import Header from "./Header";
//import Footer from './Footer'
import Totop from "./Totop";

export default function Layout({ children }) {
  return (
    <div className="bg-slate-100">
      <Header />
      {children}
      <Totop />
    </div>
  );
}
