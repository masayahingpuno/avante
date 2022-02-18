import React from 'react'

function big() {
  return (
  <div className='snap-y snap-mandatory h-screen w-screen overflow-scroll'>
    <div className="bg-red-500 w-screen h-screen flex items-center justify-center text-8xl snap-center">1</div>
    <div className="bg-yellow-500 w-screen h-screen flex items-center justify-center text-8xl snap-center">2</div>
    <div className="bg-green-500 w-screen h-screen flex items-center justify-center text-8xl snap-center">3</div>
    <div className="bg-pink-500 w-screen h-screen flex items-center justify-center text-8xl snap-center">4</div>
    <div className="bg-blue-500 w-screen h-screen flex items-center justify-center text-8xl snap-center">5</div>
  </div>
  )
}

export default big