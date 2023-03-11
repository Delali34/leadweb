import React from "react";
import Image from "next/image";

import { AiFillPlayCircle } from "react-icons/ai";
import Link from "next/link";
import { useRef } from "react";

function Areamo() {
  const imageRef = useRef<HTMLImageElement>(null);

  const handleImageLoad = () => {
    if (imageRef.current) {
      imageRef.current.classList.remove("loading");
    }
  };
  return (
    <div className="mt-10 grid grid-cols-1 max-w-7xl mx-auto items-center sm:hidden">
      <Link
        href="https://www.myleadershipfarm.com/course_content/38/"
        target="_blank"
      >
        <Image
          loading="eager"
          onLoad={handleImageLoad}
          ref={imageRef}
          className="p-5"
          width={500}
          height={500}
          src="/G4C COVER 1.webp"
          alt=""
        />

        <p className="flex items-center gap-1 px-5 underline">Watch here</p>
      </Link>
      <Link
        href="https://www.myleadershipfarm.com/course_content/99/"
        target="_blank"
      >
        <Image
          loading="eager"
          onLoad={handleImageLoad}
          ref={imageRef}
          className="p-5"
          width={500}
          height={500}
          src="/G4C COVER 14.webp"
          alt=""
        />

        <p className="flex items-center gap-1 px-5 underline">Watch here</p>
      </Link>{" "}
      <Link
        href="https://www.myleadershipfarm.com/course_content/93/"
        target="_blank"
      >
        <Image
          loading="eager"
          onLoad={handleImageLoad}
          ref={imageRef}
          className="p-5"
          width={500}
          height={500}
          src="/G4C COVER 15.webp"
          alt=""
        />

        <p className="flex items-center gap-1 px-5 underline">Watch here</p>
      </Link>
      <Link
        href="https://www.myleadershipfarm.com/course_content/97/"
        target="_blank"
      >
        <Image
          loading="eager"
          onLoad={handleImageLoad}
          ref={imageRef}
          className="p-5"
          width={500}
          height={500}
          src="/G4C COVER 16.webp"
          alt=""
        />

        <p className="flex items-center gap-1 px-5 underline">Watch here</p>
      </Link>
      <Link
        href="https://www.myleadershipfarm.com/course_content/96/"
        target="_blank"
      >
        <Image
          loading="eager"
          onLoad={handleImageLoad}
          ref={imageRef}
          className="p-5"
          width={500}
          height={500}
          src="/G4C COVER 17.webp"
          alt=""
        />

        <p className="flex items-center gap-1 px-5 underline">Watch here</p>
      </Link>
      <Link
        href="https://www.myleadershipfarm.com/course_content/45/"
        target="_blank"
      >
        <Image
          loading="eager"
          onLoad={handleImageLoad}
          ref={imageRef}
          className="p-5"
          width={500}
          height={500}
          src="/G4C COVER 2.webp"
          alt=""
        />

        <p className="flex items-center gap-1 px-5 underline">
          Watch here <AiFillPlayCircle className="text-purple-500" />
        </p>
      </Link>
    </div>
  );
}

export default Areamo;
