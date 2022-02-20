import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div>
      <div className="container mx-auto flex h-14 w-screen justify-between bg-slate-100 pt-8">
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
            <div className="font-main text-2xl	font-semibold text-black subpixel-antialiased">
              agham ai
            </div>
          </a>
        </Link>
        <ul className="hidden w-full items-center justify-end gap-6 font-main font-semibold text-black subpixel-antialiased md:flex">
          <li className="">
            <Link href="/">
              <a className="text-black subpixel-antialiased">Home</a>
            </Link>
          </li>
          <li className="">
            <Link href="/blog">
              <a className="text-black subpixel-antialiased">Blog</a>
            </Link>
          </li>
          <li className="">
            <Link href="/contact">
              <a className="text-black subpixel-antialiased">Contact</a>
            </Link>
          </li>
          <li className="">
            <Link href="/about">
              <a className="text-black subpixel-antialiased">About</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
