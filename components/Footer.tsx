import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="container mx-auto h-full w-full px-6 pt-4 font-main subpixel-antialiased">
      <div className="mb-6 flex flex-col items-start justify-start gap-5 pb-2 md:flex-row md:justify-around">
        <div className="">
          <h1 className="text-xl font-bold text-gray-800 md:pb-4 md:text-2xl">
            Getting Started
          </h1>
          <div className="text-gray-500">Home</div>
          <div className="text-gray-500">Blog</div>
        </div>
        <div className="">
          <h1 className="text-xl font-bold text-gray-800 md:pb-4 md:text-2xl">
            Demo
          </h1>
          <div className="text-gray-500">Knowledge Tracing</div>
        </div>
        <div className="">
          <h1 className="text-xl font-bold text-gray-800 md:pb-4 md:text-2xl">
            Community
          </h1>
          <div className="text-gray-500">Facebook</div>
          <div className="text-gray-500">Twitter</div>
          <div className="text-gray-500">Instagram</div>
          <div className="text-gray-500">Tiktok</div>
        </div>
        <div className="">
          <h1 className="text-xl font-bold text-gray-800 md:pb-4 md:text-2xl">
            Legal Notice
          </h1>
          <div className="text-gray-500">Terms</div>
          <div className="text-gray-500">Privacy</div>
        </div>
      </div>
      <div className="flex justify-start border-t-2 border-gray-200 py-4">
        <Link href="/">
          <a className="flex items-center justify-end md:w-1/4 md:justify-start">
            <div className="p-2 pl-6 md:p-2">
              <Image
                src="/logo4.png"
                alt="logo"
                quality={100}
                width={35}
                height={35}
              />
            </div>
            <div className="font-main text-2xl font-bold ">agham ai</div>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
