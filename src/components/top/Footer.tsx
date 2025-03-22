"use client";

import { Typography } from "@/components/Materials";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="flex mt-12 px-10 w-full text-neutral-300 flex-wrap flex-row justify-around items-center gap-y-6 gap-x-12 border-t border-zinc-800 py-6 text-center md:justify-between bg-neutral-900">
      <Typography color="white" className="font-normal">
        &copy; 2025 Proxreal, Philip Schrenk
      </Typography>
      <ul className="flex flex-wrap justify-center items-center gap-y-2 gap-x-8">
        <li>
          <Link href="/about">
            <Typography
              color="white"
              className="font-normal transition-colors hover:text-pink-600 focus:text-pink-600"
            >
              About
            </Typography>
          </Link>
        </li>
        <li>
          <Link href={"/about#what-is-proxreal"}>
            <Typography
              color="white"
              className="font-normal transition-colors hover:text-pink-600 focus:text-pink-600"
            >
              What is Proxreal?
            </Typography>
          </Link>
        </li>
        <li>
          <Link href={"/contact"}>
            <Typography
              color="white"
              className="font-normal transition-colors hover:text-pink-600 focus:text-pink-600"
            >
              Contact
            </Typography>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
