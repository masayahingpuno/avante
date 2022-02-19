import React from "react";

function Hero() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <div className="px-2 pt-24">
        <h1 className="font-main_bold text-center text-5xl font-bold tracking-tighter text-black subpixel-antialiased	">
          Empowering education with Artificial Intelligence
        </h1>
      </div>
      <div className="pt-10 md:w-2/3">
        <p className="px-4 font-main text-xl tracking-wider text-slate-600	text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="mx-6 mt-6 w-3/4 md:w-1/6 hover:bg-slate-800 rounded-lg bg-black p-4 text-center">
        <button className="w-full font-main font-bold text-slate-100">
          Demo Application
        </button>
      </div>
    </div>
  );
}

export default Hero;
