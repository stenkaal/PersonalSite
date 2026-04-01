import React from "react";
import Image from "next/image";

interface CardProps {
  image: string;
  CardTitle: string;
  CardDescription: string;
  Button?: string;
  titleHref?: string;
  btnHref?: string;
}

export default function Card({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}: CardProps) {
  return (
    <div className="mb-10 overflow-hidden rounded-lg border-1 border-accent shadow-white shadow-lg duration-300 max-w-[calc(100vw/5)]">
      {/* 1. Added a wrapper div for the Image */}
      <div className="relative h-[250px] w-full">
        <Image
          src={image}
          alt={CardTitle}
          fill
          className="object-cover" // 2. Ensures image covers the area without stretching
        />
      </div>

      <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
        <h3>
          <a
            href={titleHref || "/#"}
            className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
          >
            {CardTitle}
          </a>
        </h3>
        <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
          {CardDescription}
        </p>

        {Button && (
          <a
            href={btnHref || "#"}
            className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6"
          >
            {Button}
          </a>
        )}
      </div>
    </div>
  );
}
