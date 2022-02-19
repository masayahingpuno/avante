import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div>
      <div className="container mx-auto flex h-14 w-screen justify-between bg-slate-100 pt-8">
        <div className="flex items-center justify-end md:w-1/3 md:justify-start">
          <div className="p-2 pl-6 md:p-2">
            <Image
              src="/logo4.png"
              alt="logo"
              quality={100}
              width={35}
              height={35}
            />
          </div>
          <div className="font-main text-2xl font-semibold	 text-black subpixel-antialiased">
            agham ai
          </div>
        </div>
        <div className="hidden w-full items-center justify-end gap-6 font-main font-semibold text-black subpixel-antialiased md:flex">
          <div className="">Home</div>
          <div className="">Blog</div>
          <div className="">Contact Us</div>
          <div className="">About Us</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
