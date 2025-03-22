"use client";

import { IconButton } from "@/components/Materials";
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
        className="bg-transparent flex items-center justify-center backdrop-blur-sm w-screen h-screen"
        style={{ maxWidth: "100vw", maxHeight: "100vh" }} // Ensure full viewport coverage
      >
        <DialogBody className="p-0 flex items-center justify-center">
          <img src={src} alt={alt} className="max-h-screen w-auto rounded-lg" />
          <div className="absolute top-4 right-4 flex flex-row-reverse gap-2">
            <button
              className="bg-red-600 transition-all duration-100 ease-in-out text-white text-2xl font-bold bg-opacity-65 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-90"
              onClick={handleOpen}
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <a href="/downloads/CV_Philip_Schrenk.pdf" download>
              <button
                className="bg-blue-700 transition-all duration-100 ease-in-out text-white text-2xl font-bold bg-opacity-65 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-90"
              >
                <ArrowDownTrayIcon className="w-6 h-6" />
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
        className={`rounded-sm shadow-md cursor-pointer hover:opacity-85 transition-opacity ${className}`}
        onClick={handleOpen}
      />
    </Fragment>
  );
};

export default EnlargableImage;
