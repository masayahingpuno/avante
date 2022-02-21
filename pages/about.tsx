import React from "react";
import Image from "next/image";

function about() {
  return (
    <div className="container mx-auto px-4 pt-16 font-main subpixel-antialiased">
      <div className="prose md:w-3/4">
        <h1 className="pt-2 text-3xl font-bold text-gray-800 md:text-4xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </h1>
        <p className="pt-4 text-gray-500 md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="pt-8 md:hidden">
        <Image
          src="https://random.imagecdn.app/500/150"
          height={150}
          width={350}
          alt="random image"
          quality={100}
          layout="responsive"
        />
      </div>

      {/* Hide on mobile but display on larger screen */}
      <div className=" hidden pt-20 md:block ">
        <Image
          src="https://random.imagecdn.app/500/150"
          height={400}
          width={1500}
          alt="random image"
          quality={100}
        />
      </div>

      <div className="md:flex">
        <div className="prose pt-20 md:flex md:w-1/2 md:flex-col">
          <h1 className="text-3xl font-bold text-gray-800">Our Story</h1>
          <p className="pt-4 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. <br /> <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="hidden w-1/2 items-stretch justify-center px-2 pt-44 md:block">
          <Image
            src="https://random.imagecdn.app/500/150"
            height={200}
            width={800}
            alt="Our Story"
            quality={100}
          />
        </div>

        <div className="w-full  pt-10 md:hidden">
          <Image
            src="https://random.imagecdn.app/500/150"
            height={300}
            width={700}
            alt="Our Story"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}

export default about;
