"use client";

import React from "react";
import {
  Navbar,
  Collapse,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const NavList: React.FC = () => {
  return (
    <List className="mb-6 mt-4 flex-col p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:p-1">
      <Link href="/" className="text-sm font-medium hover:text-pink-600">
        <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
      </Link>
      <Link href="/about" className="text-sm font-medium hover:text-pink-600">
        <ListItem className="flex items-center gap-2 py-2 pr-4">About</ListItem>
      </Link>
      <Link href="/projects" className="text-sm font-medium hover:text-pink-600">
        <ListItem className="flex items-center gap-2 py-2 pr-4">Projects</ListItem>
      </Link>
      <Link href="/contact" className="text-sm font-medium hover:text-pink-600">
        <ListItem className="flex items-center gap-2 py-2 pr-4">Contact</ListItem>
      </Link>
    </List>
  );
};

const NavbarWithMegaMenu: React.FC = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <Navbar className="w-full !rounded-none border-b border-zinc-900 border-b-zinc-800 bg-zinc-900 px-4 py-2 !shadow-none">
      <div className="relative mx-auto flex max-w-screen-xl items-center justify-between lg:justify-center">
        <Link
          href="/"
          className="mr-4 cursor-pointer py-1.5 font-semibold leading-8 transition-all duration-75 ease-in-out hover:!text-xl hover:uppercase hover:text-pink-600 lg:absolute lg:left-0 lg:top-0 lg:ml-2"
        >
          Proxreal
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="flex items-center justify-center lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      {openNav && (
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      )}
    </Navbar>
  );
};

export default NavbarWithMegaMenu;
