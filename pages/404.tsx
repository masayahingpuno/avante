import React from "react";
import Link from "next/link";

function Error() {
  return (
    <div className="container mx-auto flex  flex-col font-main subpixel-antialiased  md:flex-row md:pt-12">
      <div className="w-full items-center justify-center  pt-16 text-center ">
        <div className="text-2xl font-bold tracking-widest md:text-4xl	">
          ERROR
        </div>
        <div className="text-8xl font-extrabold tracking-widest md:pt-10 md:text-9xl		">
          404
        </div>
        <div className="text-xl  font-bold tracking-widest md:pt-10 md:text-4xl">
          PAGE NOT FOUND
        </div>
      </div>

      <div className="w-full px-6 ">
        <div className="pt-10 text-xl font-bold md:text-4xl">
          Looks like you've found the doorway to the great nothing
        </div>
        <div className="pt-6 md:pt-10 md:text-xl">
          The content you’re looking for doesn’t exist. Either it was removed,
          or you mistyped the link.
        </div>
        <div className="pt-6 md:pt-10 md:text-xl">
          Sorry about that! Please visit our hompage to get where you need to
          go.
        </div>
        <div className="pt-8 md:pt-28">
          <button className="w-full items-center justify-center rounded-xl bg-black p-4 font-bold text-white md:w-1/2 md:p-6">
            <Link href="/">
              <a>Go back to Homepage</a>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Error;
