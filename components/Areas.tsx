import React from "react";
import Image from "next/image";
import { AiFillPlayCircle } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";
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
        <motion.div
          initial={{
            x: -10,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Link
            href="https://www.myleadershipfarm.com/course_content/38/"
            target="_blank"
          >
            <Image
              className="p-5"
              width={500}
              height={500}
              src="/G4C COVER 1.webp"
              alt=""
            />

            <p className="flex items-center gap-1 px-5 underline">Wact here</p>
          </Link>
        </motion.div>
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link
            href="https://www.myleadershipfarm.com/course_content/99/"
            target="_blank"
          >
            <Image
              className="p-5"
              width={500}
              height={500}
              src="/G4C COVER 14.webp"
              alt=""
            />

            <p className="flex items-center gap-1 px-5 underline">Watch here</p>
          </Link>
        </motion.div>
        <motion.div
          initial={{
            x: 10,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {" "}
          <Link
            href="https://www.myleadershipfarm.com/course_content/93/"
            target="_blank"
          >
            <Image
              className="p-5"
              width={500}
              height={500}
              src="/G4C COVER 15.webp"
              alt=""
            />

            <p className="flex items-center gap-1 px-5 underline">Watch here</p>
          </Link>
        </motion.div>
        <motion.div
          initial={{
            x: -10,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Link
            href="https://www.myleadershipfarm.com/course_content/97/"
            target="_blank"
          >
            <Image
              className="p-5"
              width={500}
              height={500}
              src="/G4C COVER 16.webp"
              alt=""
            />

            <p className="flex items-center gap-1 px-5 underline">Watch here</p>
          </Link>
        </motion.div>
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link
            href="https://www.myleadershipfarm.com/course_content/96/"
            target="_blank"
          >
            <Image
              className="p-5"
              width={500}
              height={500}
              src="/G4C COVER 17.webp"
              alt=""
            />

            <p className="flex items-center gap-1 px-5 underline">Watch here</p>
          </Link>
        </motion.div>
        <motion.div
          initial={{
            x: 10,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Link
            href="https://www.myleadershipfarm.com/course_content/45/"
            target="_blank"
          >
            <Image
              className="p-5"
              width={500}
              height={500}
              src="/G4C COVER 2.webp"
              alt=""
            />

            <p className="flex items-center gap-1 px-5 underline">Watch here</p>
          </Link>
        </motion.div>
      </div>
      <Areamo />
    </div>
  );
}

export default Areas;
