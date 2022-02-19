import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div>
      <div className="container m-6 mx-auto flex h-14 w-screen justify-between bg-neutral-100">
        <div className="flex items-center justify-end md:w-1/3 md:justify-start">
          <div className="">
            <Image
              src="/logo.png"
              alt="logo"
              quality={100}
              width={95}
              height={75}
            />
          </div>
          <div className="font-mono text-2xl font-bold text-red-600">
            agham ai
          </div>
        </div>
        <div className="hidden w-full items-center justify-end gap-6 md:flex text-stone-800 font-medium">
          <div className="">Features</div>
          <div className="">Demo</div>
          <div className="">Blog</div>
          <div className="">Contact us</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
