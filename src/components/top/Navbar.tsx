"use client";

import React from "react";
import {
  Navbar,
  Collapse,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const NavList: React.FC = () => {
  return (
    <List className="flex-col mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:items-center lg:p-1">
      <Link href="/" className="font-medium hover:text-pink-600 text-sm">
        <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
      </Link>
      <Link href="/about" className="font-medium hover:text-pink-600 text-sm">
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          About
        </ListItem>
      </Link>
      <Link href="/contact" className="font-medium hover:text-pink-600 text-sm">
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Contact
        </ListItem>
      </Link>
    </List>
  );
};

const NavbarWithMegaMenu: React.FC = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="w-full px-4 py-2 !shadow-none border-b bg-zinc-900 border-zinc-900 border-b-zinc-800  !rounded-none">
      <div className="flex items-center justify-between mx-auto max-w-screen-xl">
        <Link
          href="/"
          className="mr-4 font-semibold cursor-pointer py-1.5 lg:ml-2 transition-all ease-in-out duration-75 hover:!text-xl hover:text-pink-600 hover:uppercase"
        >
          Proxreal
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
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
