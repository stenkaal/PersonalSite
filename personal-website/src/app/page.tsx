import Image from "next/image"; // Next.js Image-komponenten

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_auto_auto] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <header className="relative w-full row-start-1 min-h-screen overflow-hidden flex items-center justify-center">
        {/*NAVBAR*/}
        <nav className="font-bold text-lg absolute top-0 w-full z-20 pt-10 flex gap-[24px] flex-wrap items-center justify-center px-4">
          <a>Blog</a>
          <a>Contact</a>
          <a></a>
        </nav>
        {/*NAVBAR*/}

        {/*HEADER */}
        <div className="absolute w-full md:right-0 md:top-0 md:bottom-0 md:w-2/3 z-0 overflow-hidden">
          <Image
            src="/20250414_101519.jpg"
            alt="En bild på mig"
            layout="fill"
            objectFit="cover"
            priority
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
        <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-8 text-white max-w-[1100px] top-1/2">
          <h1 className="font-sans font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            Finding <b className="bg-white px-2 text-black">solutions</b> for{" "}
            <u>tomorrows</u> problems.
          </h1>
        </div>
        {/*HEADER */}
      </header>

      {/*ABOUT ME SECTION */}
      <section className="row-start-2 w-full max-w-screen-lg mx-auto py-16 px-4">
        <h2 className=" font-bold font-[family-name:var(--font-geist-mono)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          <div className=" min-w-[280px] p-4">
            <h3 className="font-mono font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center mb-2">
              Who?
            </h3>
            <p className="text-base col-start-1 md:col-start-1 md:col-end-2 font-mono text-md sm:text-lg md:text-xl lg:text-2xl text-center">
              Hi! My name's Sten. I'm 20-years old and have a deep-passion for
              programming and problem solving at large, but what interests me
              the most is cybersecurity!
            </p>
          </div>
          <div className="min-w-[280px] p-4">
            <h3 className="font-mono font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center mb-2">
              What?
            </h3>
            <p className="text-base font-mono text-md sm:text-lg md:text-xl lg:text-2xl text-center">
              So what do I do? I am an Certified Upper Secondary Engineer!
              That's a fancy title, but it simply means that I am good at things
              like planning and executing plans for IT projects, communicating
              technology and technical solutions, and much more.
            </p>
          </div>
          <div className="md:col-span-2 min-w-[280px] p-4">
            <h3 className="font-mono font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center mb-2">
              Why?
            </h3>
            <p className="text-base font-mono text-md sm:text-lg md:text-xl lg:text-2xl text-center">
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

      {/*PROJECTS SECTION*/}
      <section className=" row-start-3 w-full max-w-screen-lg mx-auto py-16 px-4">
        <h2 className="font-mono font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[900px] mx-auto">
          <div className="relative rounded-2xl overflow-hidden aspect-video">
            <Image
              src="/20250414_101519.jpg"
              alt="En bild på mig"
              className="rounded-2xl"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-video">
            <Image
              src="/20250414_101519.jpg"
              alt="En bild på mig"
              className="rounded-2xl"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-video">
            <Image
              src="/20250414_101519.jpg"
              alt="En bild på mig"
              className="rounded-2xl"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>
      {/*PROJECTS SECTION END*/}

      {/*CONTACT SECTION*/}
      <section className="p-8 w-1/3 shadow-2xl/60 rounded-2xl ring-5 shadow-amber-50">
        <h2 className="font-bold font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8">
          Get In Touch
        </h2>
        <div className="text-base grid-cols-1 font-bold font-sans text-md sm:text-lg md:text-xl lg:text-2xl text-center">
          {" "}
          <p className="grid-start-1 p-2 w-[100px] rounded-xl shadow-xl/100 shadow-blue-600 bg-blue-600">
            CV
          </p>
          <p className="grid-start-2 p-2 w-[100px] rounded-xl shadow-xl/100 shadow-blue-600 bg-blue-600">
            Mail
          </p>
        </div>
      </section>
      {/*CONTACT SECTION END*/}

      {/*FOOTER*/}
      <footer className="flex gap-[24px] flex-wrap items-center justify-center">
        <a
          href="https://github.com/stenkaal"
          className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          Github
        </a>
        <a
          href="https://discordapp.com/users/409400613441634305"
          className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          Discord
        </a>
        <a
          href="mailto:mail@stenkaal.com"
          className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          Mail
        </a>
      </footer>
      {/*FOOTER END*/}
    </div>
  );
}
