import Card from "@/components/card";

export default function Home() {
  return (
    <div>
      {/*HEADER */}
      <header className="relative w-full row-start-1 min-h-screen overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-1 flex flex-col items-start justify-center px-8 text-foreground max-w-[1100px] top-1/2">
          <h1 className="font-sans font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            <b className="bg-foreground px-2 text-black">Projects</b>
          </h1>
        </div>
      </header>
      {/*HEADER */}

      {/*FOR FUTUTRE REFERENCE*/}
      {/*Grid of cards with a light outline, a picture of the project and a footer with a title, when clicked on brings it to the blog page about the specific project.*/}

      {/*PROJECTS SECTION*/}
      <section>
        {" "}
        <div className="grid gap-8 sm:grid-cols-5 lg:grid-cols-8">
          <div className="col-start-2 col-span-2">
            {" "}
            <Card
              image="/websiteBackground.jpg"
              Button="Read More"
              CardDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, velit? Odio veritatis reiciendis quisquam? Consequuntur ratione qui doloribus sint unde accusamus saepe, molestiae repellendus labore! Illum placeat iusto est. Pariatur?"
              CardTitle="Lorem Ipsum"
            />
          </div>
          <div className="col-start-4 col-span-2">
            {" "}
            <Card
              image="/websiteBackground.jpg"
              Button="Read More"
              CardDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, velit? Odio veritatis reiciendis quisquam? Consequuntur ratione qui doloribus sint unde accusamus saepe, molestiae repellendus labore! Illum placeat iusto est. Pariatur?"
              CardTitle="Lorem Ipsum"
            />
          </div>
          <div className="col-start-6 col-span-2">
            {" "}
            <Card
              image="/websiteBackground.jpg"
              Button="Read More"
              CardDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, velit? Odio veritatis reiciendis quisquam? Consequuntur ratione qui doloribus sint unde accusamus saepe, molestiae repellendus labore! Illum placeat iusto est. Pariatur?"
              CardTitle="Lorem Ipsum"
            />
          </div>
        </div>
      </section>
      {/*PROJECTS SECTION END*/}
    </div>
  );
}
