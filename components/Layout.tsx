import React from "react";
import Header from "./Header";
//import Footer from './Footer'
import Totop from "./Totop";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Totop />
    </div>
  );
}
