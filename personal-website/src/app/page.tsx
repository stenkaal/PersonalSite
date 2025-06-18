import Image from "next/image"; // Next.js Image-komponenten återinförd för ditt Next.js-projekt

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_auto_1fr_auto] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <nav className="row-start-1 pt-10 flex gap-[24px] flex-wrap items-center justify-center">
        <a>Place</a>
        <a>Holder</a>
        <a>Text</a>
      </nav>

      {/* HEADER CONTAINER START */}
      {/* 'relative': For absolute positioning of children (image and vignette) relative to the header. */}
      {/* 'w-full': Makes the header take up the full width. */}
      {/* 'min-h-[400px] md:min-h-[500px] lg:min-h-[600px]': Gives the header a responsive minimum height,
          which is crucial for 'main' to start correctly below the header
          and for the image to have space to fill. */}
      {/* 'overflow-hidden': Clips content (like rounded corners on the image) that extends beyond the header's boundaries. */}
      {/* 'flex items-center justify-center p-4': Centers the text content within the header. */}
      <header className="relative w-full row-start-2 min-h-[400px] md:min-h-[500px] lg:min-h-[600px] overflow-hidden flex items-center justify-center p-4">
        {/* Image container that fills the header. Used to wrap the Next.js Image with absolute positioning. */}
        {/* 'absolute inset-0': Makes this div cover the entire header element. */}
        {/* 'z-0': Places the image at the back of the stacking order. */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/20250414_101519.jpg"
            alt="En bild på mig"
            layout="fill" // The image fills its parent div
            objectFit="cover" // Scales the image to cover the area without distortion
            priority // Prioritizes loading of this image
          />
          {/* Vignette overlay on the image. Also fills the header with a radial gradient. */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              backgroundImage:
                "radial-gradient(circle at center, transparent 60%, rgba(0,0,0,0.7) 100%)",
              pointerEvents: "none", // Prevents the overlay from blocking mouse interactions
            }}
          ></div>
        </div>

        {/* Text container - centered and on top of the image */}
        {/* 'relative z-10': Places the text on top of the image. 'relative' is needed for z-index to work correctly. */}
        {/* 'flex flex-col gap-2 w-full max-w-[700px] text-center text-white': Styling for the text content. */}
        <div className="relative z-10 flex flex-col gap-2 w-1/2 max-w-[700px] text-center text-white">
          <h1 className="font-[family-name:var(--font-geist-mono)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Finding <b>solutions</b> for <u>tomorrows</u> problems.
          </h1>
        </div>
      </header>
      {/* HEADER CONTAINER END */}

      {/* MAIN CONTENT - placed correctly below the header in the grid. */}
      <main className="row-start-3 w-full max-w-screen-lg mx-auto py-16 px-4">
        <h2 className="font-[family-name:var(--font-geist-mono)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8">
          About Me
        </h2>
        <div className="relative flex justify-evenly items-center w-full max-w-[600px] mx-auto flex-wrap gap-4">
          <h3 className="font-[family-name:var(--font-geist-mono)] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center min-w-[100px]">
            Who?
          </h3>
          <h3 className="font-[family-name:var(--font-geist-mono)] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center min-w-[100px]">
            What?
          </h3>
          <h3 className="font-[family-name:var(--font-geist-mono)] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center min-w-[100px]">
            Why?
          </h3>
        </div>
      </main>

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
    </div>
  );
}
