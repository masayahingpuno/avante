import React from "react";
import TestimonialCard from "./TestimonialCard";

function Testimonial() {
  return (
    <div className="text-main container mx-auto mt-12 flex flex-col items-center justify-center border-t-2 border-gray-200 pt-12 subpixel-antialiased">
      <div className="w-screen px-4 text-center  text-4xl font-bold text-gray-900 ">
        Testimonials
      </div>
      <div className="px-4 pt-5 pb-10 text-gray-500 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      </div>
      <TestimonialCard />
    </div>
  );
}

export default Testimonial;
