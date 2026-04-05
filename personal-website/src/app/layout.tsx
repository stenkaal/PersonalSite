import type { Metadata } from "next";
import {
  Inter,
  JetBrains_Mono,
  Bricolage_Grotesque,
  Space_Grotesk,
  Geist,
  Geist_Mono,
  Playwrite_IE,
} from "next/font/google";
import "./globals.css";
import Menu from "@/components/menu";

// Define them here
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const playwrite = Playwrite_IE({ variable: "--font-mono" });
const brico = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-brico",
});
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sten Kaal | Personal Website",
  description:
    "This is a website for me to showcase who I am, what I do and why I do it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${mono.variable} ${playwrite.variable} ${brico.variable} ${space.variable} ${inter.variable} antialiased`}
      >
        <Menu />
        {children}
      </body>
    </html>
  );
}
