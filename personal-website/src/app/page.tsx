import Image from "next/image";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <nav className="row-start-1 flex gap-[24px] flex-wrap items-center justify-center"></nav>
      <main className="flex gap-[32px] row-start-2 items-center">
        <div className="flex flex-col gap-2 w-full max-w-[500px]">
          <h1 className="font-[family-name:var(--font-geist-mono)] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
            Hey, My names Sten!
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center font-[family-name:var(--font-geist-mono)]">
            This is my up and coming personal website currently in development.
          </p>
        </div>
        <Image
          src="/20250414_101519.jpg"
          alt="A picture of me"
          className="rounded-2xl"
          width={360}
          height={76}
          priority
        />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
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
    </div>
  );
}
