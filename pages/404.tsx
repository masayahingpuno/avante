import React from 'react'
import Link from 'next/link'

function Error() {
  return (
    <div className='container mx-auto md:pt-12  flex flex-col md:flex-row  font-main subpixel-antialiased'>
      <div className="w-full pt-16 text-center  justify-center items-center ">
        <div className="text-2xl md:text-4xl tracking-widest font-bold	">ERROR</div>
        <div className="text-8xl md:text-9xl md:pt-10 font-extrabold tracking-widest		">404</div>
        <div className="text-xl  md:text-4xl tracking-widest font-bold md:pt-10">PAGE NOT FOUND</div>
      </div>

      <div className="w-full px-6 ">
        <div className="pt-10 md:text-4xl text-xl font-bold">
        Looks like you've found the doorway to the great nothing
        </div>
        <div className="pt-6 md:pt-10 md:text-xl">
        The content you’re looking for doesn’t exist. Either it was removed, or you mistyped the link.

        </div>
        <div className="pt-6 md:pt-10 md:text-xl">
        Sorry about that! Please visit our hompage to get where you need to go.

        </div>
        <div className="pt-8 md:pt-28">
          <button className='bg-black text-white p-4 md:p-6 md:w-1/2 justify-center items-center w-full rounded-xl font-bold'>
            <Link href='/'>
              <a>            
                Go back to Homepage
              </a>
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Error