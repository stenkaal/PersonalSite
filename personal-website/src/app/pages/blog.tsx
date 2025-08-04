'use client';

import Navbar from "../components/navbar"

export default function Blog() {return (          

<header className="relative w-full row-start-1 min-h-screen overflow-hidden flex items-center justify-center">
            {/*NAVBAR*/}
            <Navbar />
            {/*NAVBAR*/}

            {/*HEADER */}
                <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-8 text-white max-w-[1100px] top-1/2">
                  <h1 className="font-sans font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                    Welcome to my <b className="bg-white px-2 text-black">Blog</b>
                  </h1>
                </div>
            {/*HEADER */}
          </header>
    )}