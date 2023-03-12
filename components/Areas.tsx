import React from "react";
import Image from "next/image";

import Link from "next/link";

import Areamo from "./Areamo";

function Areas() {
  return (
    <div>
      <div>
        <h1 className="lg:text-6xl text-center pt-5 lg:mt-4 md:text-3xl text-2xl font-bold ">
          MASTER EVERY AREA OF YOUR LIFE
        </h1>
        <p className="lg:text-xl text-center pt-5 font-light md:text-sm px-5">
          VISIT OUR E-LEARNING PLATFORM FOR SOLUTIONS TO FIT YOUR TIME, YOUR
          LIFESTYLE AND YOUR BUDGET
        </p>
      </div>
      <div className="mt-10  md:grid-cols-2 lg:grid-cols-3 grid-cols-1 max-w-7xl mx-auto items-center sm:grid-cols-2 hidden sm:grid">
        <Link
          href="https://www.myleadershipfarm.com/course_content/38/"
          target="_blank"
        >
          <Image
            loading="lazy"
            className="p-5"
            width={500}
            height={500}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/v1678626869/G4C_COVER_1_axvy9c.webp"
            alt=""
          />

          <p className="flex items-center gap-1 px-5 underline">Wact here</p>
        </Link>
        <Link
          href="https://www.myleadershipfarm.com/course_content/99/"
          target="_blank"
        >
          <Image
            loading="lazy"
            className="p-5"
            width={500}
            height={500}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/v1678626869/G4C_COVER_14_plq5o2.webp"
            alt=""
          />

          <p className="flex items-center gap-1 px-5 underline">Watch here</p>
        </Link>{" "}
        <Link
          href="https://www.myleadershipfarm.com/course_content/93/"
          target="_blank"
        >
          <Image
            loading="lazy"
            className="p-5"
            width={500}
            height={500}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/v1678626870/G4C_COVER_15_ctnwth.webp"
            alt=""
          />

          <p className="flex items-center gap-1 px-5 underline">Watch here</p>
        </Link>
        <Link
          href="https://www.myleadershipfarm.com/course_content/97/"
          target="_blank"
        >
          <Image
            loading="lazy"
            className="p-5"
            width={500}
            height={500}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/v1678626870/G4C_COVER_16_rqz6j1.webp"
            alt=""
          />

          <p className="flex items-center gap-1 px-5 underline">Watch here</p>
        </Link>
        <Link
          href="https://www.myleadershipfarm.com/course_content/96/"
          target="_blank"
        >
          <Image
            loading="lazy"
            className="p-5"
            width={500}
            height={500}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/v1678626871/G4C_COVER_17_mkhglj.webp"
            alt=""
          />

          <p className="flex items-center gap-1 px-5 underline">Watch here</p>
        </Link>
        <Link
          href="https://www.myleadershipfarm.com/course_content/45/"
          target="_blank"
        >
          <Image
            loading="lazy"
            className="p-5"
            width={500}
            height={500}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/v1678626869/G4C_COVER_2_eqjmcm.webp"
            alt=""
          />

          <p className="flex items-center gap-1 px-5 underline">Watch here</p>
        </Link>
      </div>
      <Areamo />
    </div>
  );
}

export default Areas;
