import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [menu, setMenu] = useState(false);

  function menuHandler() {
    setMenu(!menu);
  }

  return (
    <div>
      <div className="container mx-auto flex h-14 w-screen justify-between  pt-8 text-gray-900 subpixel-antialiased">
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

        <ul className="hidden w-full items-center justify-end gap-6 font-main font-bold  md:flex">
          <li className="">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="">
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li className="">
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          <li className="">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>

        <div className="flex items-center pr-4 md:hidden">
          <button onClick={menuHandler}>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={`${menu ? "visible" : "hidden"}  md:hidden`}>
        <div className="mx-2 mt-6 justify-start border-t-2 border-main_yellow p-4">
          <ul className="font-menu flex flex-col gap-4 text-lg font-bold ">
            <li className="">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="">
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li className="">
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
            <li className="">
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
