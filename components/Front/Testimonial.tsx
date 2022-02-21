import React from "react";
import TestimonialCard from "./TestimonialCard";
import TestimonialData from "./TestimonialData";
import { useState } from "react";

function Testimonial() {
  // see more button use state
  const [showMore, setShowMore] = useState(false);

  // seeMoreHandler - when clicked, show the rest of the  testimonials
  const seeMoreHandler = () => {
    setShowMore(true);
  };
  return (
    <div className="text-main container mx-auto mt-12 flex flex-col items-center justify-center border-t-2 border-gray-200 pt-12 subpixel-antialiased">
      <div className="w-screen px-4 text-center  text-4xl font-bold text-gray-900 ">
        Testimonials
      </div>
      <div className="px-4 pt-5 pb-10 text-gray-500 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      </div>
      <div className="">
        <div className="container flex w-full snap-y snap-mandatory flex-col items-stretch justify-between  overflow-x-auto md:flex-row	 md:flex-wrap">
          <div className="snap-center">
            <TestimonialCard />
          </div>
          <div className="snap-center">
            <TestimonialCard />
          </div>
          <div className="snap-center">
            <TestimonialCard />
          </div>
        </div>
        <div
          className={`${
            showMore ? "visible" : "hidden"
          }    container flex w-full snap-y snap-mandatory flex-col items-stretch justify-between  overflow-x-auto md:flex-row	 md:flex-wrap`}
        >
          <TestimonialData />
        </div>
      </div>
      <button
        onClick={seeMoreHandler}
        className={`${
          showMore ? "hidden" : "visible"
        }   rounded-lg bg-black py-4 px-6 font-bold text-white hover:bg-gray-700`}
      >
        See More...
      </button>
    </div>
  );
}

export default Testimonial;
