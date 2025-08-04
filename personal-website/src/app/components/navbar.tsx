'use client';
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="font-bold text-lg absolute top-0 w-full z-20 pt-10 flex gap-[24px] flex-wrap items-center justify-center px-4">
        <Link href="#aboutMe">About</Link>
        <Link href="#">Skills</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
        <Link href="/blog">Blog</Link>
    </nav>
  );
}