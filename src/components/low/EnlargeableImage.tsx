"use client";

import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Dialog, DialogBody } from "@material-tailwind/react";
import Image from "next/image";
import { Fragment, useState } from "react";

type EnlargableImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const EnlargableImage: React.FC<EnlargableImageProps> = ({
  src,
  alt,
  className,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <Dialog
        open={open}
        handler={handleOpen}
        className="flex h-screen w-screen items-center justify-center bg-transparent backdrop-blur-sm"
        style={{ maxWidth: "100vw", maxHeight: "100vh" }} // Ensure full viewport coverage
      >
        <DialogBody className="flex items-center justify-center p-0">
          <img src={src} alt={alt} className="max-h-screen w-auto rounded-lg" />
          <div className="absolute right-4 top-4 flex flex-row-reverse gap-2">
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 bg-opacity-65 text-2xl font-bold text-white transition-all duration-100 ease-in-out hover:bg-opacity-90"
              onClick={handleOpen}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            <a href="/downloads/CV_Philip_Schrenk.pdf" download>
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 bg-opacity-65 text-2xl font-bold text-white transition-all duration-100 ease-in-out hover:bg-opacity-90">
                <ArrowDownTrayIcon className="h-6 w-6" />
              </button>
            </a>
          </div>
        </DialogBody>
      </Dialog>
      <Image
        src={src}
        alt={alt}
        width={460}
        height={0}
        priority
        className={`cursor-pointer rounded-sm shadow-md transition-opacity hover:opacity-85 ${className}`}
        onClick={handleOpen}
      />
    </Fragment>
  );
};

export default EnlargableImage;
