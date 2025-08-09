"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_auto_auto] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      {/*HEADER/HERO */}
      <header className="relative w-full row-start-1 min-h-screen overflow-hidden flex items-center justify-center">
        <div className="absolute md:w-full right-0 top-0 bottom-0 lg:w-2/3 z-0 overflow-hidden">
          <Image
            src="/20250414_101519.jpg"
            alt="En bild på mig"
            layout="fill"
            objectFit="cover"
            priority
            className="display-none md:block"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at center, transparent 0%, rgba(10, 10, 10, 1) 85%)",
              pointerEvents: "none",
            }}
          />
        </div>
        <div className="absolute inset-0 z-1 flex flex-col items-start justify-center px-8 text-white md:max-w-[1100px] top-0 md:top-1/2">
          <h1 className="font-sans font-black text-5xl/15 sm:text-6xl/20 md:text-7xl/20 lg:text-8xl/25 gap-4">
            Finding <b className="bg-white px-3 text-black">solutions</b> for{" "}
            <u>tomorrows</u> problems.
          </h1>
        </div>
      </header>
      {/*HEADER/HERO END*/}

      {/*ABOUT ME SECTION */}
      <section
        id="aboutMe"
        className="row-start-2 w-full max-w-screen-lg mx-auto py-16 px-4"
      >
        <h2 className=" font-bold font-[family-name:var(--font-geist-mono)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8">
          About Me
        </h2>
        <div className="w-full">
          <div className="border-l-8 min-w-[280px] p-4 my-10 shadow-purple-200 border-purple-500 rounded-2xl">
            <h3 className="font-mono font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2">
              Who?
            </h3>
            <p className="text-base font-mono text-md sm:text-lg md:text-xl lg:text-2xl ">
              Hi! My name&apos;s Sten. I&apos;m 20-years old and have a
              deep-passion for programming and problem solving at large, but
              what interests me the most is cybersecurity!
            </p>
          </div>
          <div className="border-l-8 min-w-[280px] p-4 my-10 box-shadow-lg shadow-purple-200 border-purple-500 rounded-2xl">
            <h3 className="font-mono font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2">
              What?
            </h3>
            <p className="text-base font-mono text-md sm:text-lg md:text-xl lg:text-2xl">
              So what do I do? I am an Certified Upper Secondary Engineer!
              That&apos;s a fancy title, but it simply means that I am good at
              things like planning and executing plans for IT projects,
              communicating technology and technical solutions, and much more.
            </p>
          </div>
          <div className="border-l-8 min-w-[280px] my-10 p-4 shadow-[0_0_-15px] shadow-purple-200 border-purple-500 rounded-2xl">
            <h3 className="font-mono font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2">
              Why?
            </h3>
            <p className="text-base font-mono text-md sm:text-lg md:text-xl lg:text-2xl">
              It has been a passion of mine to program since I was in 6th grade.
              Ever since then I have been fascinated about how things work,
              constantly trying to learn new things and continue developing. I
              will continue to be curious and learn, just like I did when I was
              a kid.
            </p>
          </div>
        </div>
      </section>
      {/*ABOUT ME SECTION END*/}

      {/*CONTACT SECTION*/}
      <section
        id="contact"
        className="p-8 lg:w-3/4 2xl:w-1/3 shadow-[0_0_15px] rounded-2xl ring-5 shadow-amber-50 m-20 mx-auto row-start-3"
      >
        <h2 className="font-bold font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8">
          Get In Touch
        </h2>
        <div className=" gap-10 text-base justify-around grid grid-cols-1 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 font-bold font-sans text-md sm:text-lg md:text-xl lg:text-2xl text-center">
          {" "}
          <a
            href="/files/KaalStenCVEng.pdf"
            download={"Kaal_Sten-CV_Eng.pdf"}
            className=" p-2 rounded-xl shadow-lg shadow-blue-500 bg-blue-600 border-blue-500 border-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            CV
          </a>
          <a
            href="mailto:mail@stenkaal.com"
            className=" p-2 rounded-xl shadow-lg shadow-red-600 bg-red-700 border-red-600 border-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            Mail
          </a>
          <a
            href="https://github.com/stenkaal"
            className=" p-2 rounded-xl shadow-lg shadow-purple-600 bg-purple-700 border-purple-600 border-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            Github
          </a>
          <a
            href="https://discordapp.com/users/409400613441634305"
            className=" p-2 rounded-xl shadow-lg shadow-blue-700 bg-blue-900 border-blue-700 border-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            Discord
          </a>
        </div>
      </section>
      {/*CONTACT SECTION END*/}
      {/*FOOTER*/}
      <footer className="w-full max-w-screen-lg mx-auto py-8 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Sten Kaal. All rights reserved.
        </p>
      </footer>
      {/*FOOTER END*/}
    </div>
  );
}
