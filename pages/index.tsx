import React from "react";
import Hero from "../components/Front/Hero";
import Feature from "../components/Front/Feature";
import Testimonial from "../components/Front/Testimonial";
import Head from "next/head";

export default function index() {
  return (
    <div>
      <Head>
        <title>agham ai</title>
        <meta name="description" content="all about ai" />
      </Head>
      <Hero />
      <Feature />
      <Testimonial />
    </div>
  );
}
