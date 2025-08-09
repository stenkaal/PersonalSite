export default function Home() {
  return (
    <div>
      {/*HEADER */}
      <header className="relative w-full row-start-1 min-h-screen overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-1 flex flex-col items-start justify-center px-8 text-white max-w-[1100px] top-1/2">
          <h1 className="font-sans font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            Welcome to my <b className="bg-white px-2 text-black">Blog</b>
          </h1>
        </div>
      </header>
      {/*HEADER */}

      {/*BLOG SECTION*/}
      <section
        id="blog"
        className="row-start-3 w-full max-w-screen-lg mx-auto py-16 px-4"
      >
        <h2 className="font-mono font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8">
          Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[900px] mx-auto">
          {/* Blog post cards will go here */}
        </div>
      </section>
      {/*BLOG SECTION END*/}
    </div>
  );
}
