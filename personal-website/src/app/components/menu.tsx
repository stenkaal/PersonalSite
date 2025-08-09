"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

import "./menu.css";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Projects", href: "/projects" },
];

export default function Menu() {
  const container = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const tl = useRef<gsap.core.Timeline | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });

      tl.current = gsap
        .timeline({
          paused: true,
        })
        .to(".menu-overlay", {
          duration: 1.5,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
          duration: 1,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [isOpen]);

  return (
    <div
      className="menu-container uppercase font-light font-sans fixed z-50 w-full"
      ref={container}
    >
      <div className="flex justify-between top-0 left-0 p-4 text-white">
        <div className="menu-logo">
          <Link href="/">Sten Kaal</Link>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <p>Menu</p>
        </div>
      </div>
      <div className="menu-overlay fixed top-0 left-0 w-full md:w-auto h-full z-2 grid grid-rows-3 gap-4 bg-purple-600 p-2 pr-10">
        <div className="menu-logo col-start-1">
          <Link href="/">Sten Kaal</Link>
        </div>
        <div
          className="font-light text-[75px] col-start-2 flex justify-end"
          onClick={toggleMenu}
        >
          <p>&#x2715;</p>
        </div>
        <div className="col-span-2 menu-copy">
          <div className="menu-links">
            {menuItems.map((item, index) => (
              <div className="menu-link-item" key={index}>
                <div className="text-[80px] font-[400] tracking-[-0.02em] leading-[85%] text-black">
                  <Link
                    href={item.href}
                    className="menu-link"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" row-start-3">
          <div>
            <a href="https://www.instagram.com/kaalico3">Instagram &#8599; </a>
            <a href="https://discordapp.com/users/409400613441634305">
              Discord &#8599;{" "}
            </a>
            <a href="https://github.com/stenkaal">Github &#8599;</a>
          </div>
          <div>
            <a href="mailto:mail@stenkaal.com">mail@stenkaal.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}
