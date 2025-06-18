import Image from "next/image"; // Next.js Image-komponenten

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_auto_auto] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <header className="relative w-full row-start-1 min-h-screen overflow-hidden flex items-center justify-center">
        {/*NAVBAR*/}
        <nav className="absolute top-0 w-full z-20 pt-10 flex gap-[24px] flex-wrap items-center justify-center px-4">
          <a>Place</a>
          <a>Holder</a>
          <a>Text</a>
        </nav>
        {/*NAVBAR*/}

        {/*HEADER */}
        <div className="absolute right-0 top-0 bottom-0 w-2/3 z-0 overflow-hidden">
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
                "radial-gradient(circle at center, rgba(10, 10, 10, 1) 100%)",
              pointerEvents: "none",
            }}
          ></div>
        </div>
        <div className="absolute inset-0 z-10 flex flex-col gap-2 items-start justify-center px-8 text-white max-w-[1200px] top-1/2">
          <h1 className="font-[family-name:var(--font-geist-mono)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            Finding <b>solutions</b> for <u>tomorrows</u> problems.
          </h1>
        </div>
        {/*HEADER */}
      </header>

      {/*ABOUT ME SECTION */}
      <section className="row-start-2 w-full max-w-screen-lg mx-auto py-16 px-4">
        <h2 className="font-[family-name:var(--font-geist-mono)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8">
          About Me
        </h2>
        <div className="relative flex justify-evenly items-start w-full max-w-[900px] mx-auto flex-wrap gap-x-8 gap-y-8">
          <div className="flex-1 min-w-[280px] p-4">
            <h3 className="font-[family-name:var(--font-geist-mono)] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center mb-2">
              Who?
            </h3>
            <p className="text-base font-[family-name:var(--font-geist-mono)] text-md sm:text-lg md:text-xl lg:text-2xl text-center">
              Hi! My name's Sten. I'm a 20 year old programmer with a lot of
              passion for the craft. My bread and butter is cyber security (I
              even have a certificate to show for it!) and love problem solving.
            </p>
          </div>
          <div className="flex-1 min-w-[280px] p-4">
            <h3 className="font-mono text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center mb-2">
              What?
            </h3>
            <p className="text-base font-mono text-md sm:text-lg md:text-xl lg:text-2xl text-center">
              So what do I do? I am an Certified Upper Secondary Engineer!
              That's a lot of fancy title, but what does it all mean? Well it
              means that I am good at things like planning and executing plans
              for IT projects, communicating technology and technical solutions,
              and much more.
            </p>
          </div>
          <div className="flex-1 min-w-[280px] p-4">
            <h3 className="font-title text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center mb-2">
              Why?
            </h3>
            <p className="text-base font-mono text-md sm:text-lg md:text-xl lg:text-2xl text-center">
              It has been a passion of mine to program since I was in 6th grade.
              Ever since then I have been facinated about how things work,
              constantly trying to learn new things and continue developing. I
              will continue to be curious about things and learn about how
              everyday technology works, just like I did when I was a kid.
            </p>
          </div>
        </div>
      </section>
      {/*ABOUT ME SECTION END*/}

      {/*PROJECTS SECTION*/}
      <section className=" row-start-3 w-full max-w-screen-lg mx-auto py-16 px-4">
        <h2 className="font-[family-name:var(--font-geist-mono)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8">
          Projects
        </h2>
        <div className="flex justify-between">
          <div className="bg-amber-50 rounded-2xl">
            <Image
              src="/20250414_101519.jpg"
              alt="En bild på mig"
              width={250}
              height={200}
              className="rounded-2xl"
            ></Image>
          </div>
          <div className="bg-amber-50 rounded-2xl">
            <Image
              src="/20250414_101519.jpg"
              alt="En bild på mig"
              width={250}
              height={200}
              className="rounded-2xl"
            ></Image>
          </div>
          <div className="bg-amber-50 rounded-2xl">
            <Image
              src="/20250414_101519.jpg"
              alt="En bild på mig"
              width={250}
              height={10}
              className="rounded-2xl"
            ></Image>
          </div>
        </div>
      </section>
      {/*PROJECTS SECTION END*/}

      {/*FOOTER*/}
      <footer className="row-start-4 flex gap-[24px] flex-wrap items-center justify-center">
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
