import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import {} from "react-icons/ai";

function Team() {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto pt-20 pb-40">
        <div>
          <h1 className="lg:text-5xl font-font font-bold text-white md:text-3xl text-3xl text-center md:text-start ">
            Meet the team
          </h1>
        </div>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          <motion.div
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-20 p-10"
          >
            <Image
              loading="lazy"
              width={500}
              height={500}
              className="h-[400px] w-[400px]"
              src="/pexels-linkedin-sales-navigator-2182970.jpg"
              alt=""
            />
            <h1 className="font-bold font-font text-2xl text-white pt-10">
              Michael Ohene-Effah
            </h1>
            <p className=" font-font text-yellow-400">Co-Founder</p>
            <div className="text-white text-2xl flex gap-1 pt-2 cursor-pointer">
              <Link href="">
                <AiFillLinkedin className="hover:text-purple-500" />
              </Link>
              <Link href="">
                {" "}
                <AiFillInstagram className="hover:text-purple-500" />
              </Link>
              <Link href="">
                <AiFillTwitterSquare className="hover:text-purple-500" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{
              y: 100,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:pt-32 p-10"
          >
            <Image
              loading="lazy"
              width={500}
              height={500}
              className="h-[400px] w-[400px] anim"
              src="/pexels-emmy-e-2381069.jpg"
              alt=""
            />
            <h1 className="font-bold font-font text-2xl text-white pt-10">
              Letitia Ohene-Effah
            </h1>
            <p className=" font-font text-yellow-400">Co-Founder</p>
            <div className="text-white text-2xl flex gap-1 pt-2 cursor-pointer">
              <Link href="">
                <AiFillLinkedin className="hover:text-purple-500" />
              </Link>
              <Link href="">
                {" "}
                <AiFillInstagram className="hover:text-purple-500" />
              </Link>
              <Link href="">
                <AiFillTwitterSquare className="hover:text-purple-500" />
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{
              y: 100,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-20 p-10"
          >
            <Image
              loading="lazy"
              width={500}
              height={500}
              className="h-[400px] w-[400px] "
              src="/pexels-karolina-grabowska-4467687.jpg"
              alt=""
            />
            <h1 className="font-bold font-font text-2xl text-white pt-10">
              Douglas Kwabena Frimpong Darkwa
            </h1>
            <p className="text-yellow-400 font-font ">
              Project Officer, Youth Development Programs
            </p>
            <div className="text-white text-2xl flex gap-1 pt-2 cursor-pointer">
              <Link href="">
                <AiFillLinkedin className="hover:text-purple-500" />
              </Link>
              <Link href="">
                {" "}
                <AiFillInstagram className="hover:text-purple-500" />
              </Link>
              <Link href="">
                <AiFillTwitterSquare className="hover:text-purple-500" />
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-20 p-10"
          >
            <Image
              loading="lazy"
              width={500}
              height={500}
              className="h-[400px] w-[400px] "
              src="/pexels-bestbe-models-2282520.jpg"
              alt=""
            />
            <h1 className="font-bold font-font text-2xl text-white pt-10">
              Ebenezer Kwesi Ashie
            </h1>
            <p className=" font-font text-yellow-400">Digital Officer</p>
            <div className="text-white text-2xl flex gap-1 pt-2 cursor-pointer">
              <Link href="">
                <AiFillLinkedin className="hover:text-purple-500" />
              </Link>
              <Link href="">
                {" "}
                <AiFillInstagram className="hover:text-purple-500" />
              </Link>
              <Link href="">
                <AiFillTwitterSquare className="hover:text-purple-500" />
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:pt-32 p-10"
          >
            <Image
              loading="lazy"
              width={500}
              height={500}
              className="h-[400px] w-[400px] "
              src="/pexels-andrea-piacquadio-3785104.jpg"
              alt=""
            />
            <h1 className="font-bold font-font text-2xl text-white pt-10">
              Kelvin Edem Adevu
            </h1>
            <p className=" font-font text-yellow-400">
              Project Officer, Education Programs
            </p>
            <div className="text-white text-2xl flex gap-1 pt-2 cursor-pointer">
              <Link href="">
                <AiFillLinkedin className="hover:text-purple-500" />
              </Link>
              <Link href="">
                {" "}
                <AiFillInstagram className="hover:text-purple-500" />
              </Link>
              <Link href="">
                <AiFillTwitterSquare className="hover:text-purple-500" />
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{
              y: 100,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-20 p-10"
          >
            <Image
              loading="lazy"
              width={500}
              height={500}
              className="h-[400px] w-[400px] "
              src="/pexels-christina-morillo-1181428.jpg"
              alt=""
            />
            <h1 className="font-bold font-font text-2xl text-white pt-10">
              Mary Agbemavor
            </h1>
            <p className=" font-font text-yellow-400">Accountant</p>
            <div className="text-white text-2xl flex gap-1 pt-2 cursor-pointer">
              <Link href="">
                <AiFillLinkedin className="hover:text-purple-500" />
              </Link>
              <Link href="">
                {" "}
                <AiFillInstagram className="hover:text-purple-500" />
              </Link>
              <Link href="">
                <AiFillTwitterSquare className="hover:text-purple-500" />
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{
              y: 100,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-20 p-10"
          >
            <Image
              loading="lazy"
              width={500}
              height={500}
              className="h-[400px] w-[400px] "
              src="/pexels-christina-morillo-1181428.jpg"
              alt=""
            />
            <h1 className="font-bold font-font text-2xl text-white pt-10">
              Adel Ewurama Sesa Acquah
            </h1>
            <p className=" font-font text-yellow-400">
              Project Officer, Social Transformational Programs
            </p>
            <div className="text-white text-2xl flex gap-1 pt-2 cursor-pointer">
              <Link href="">
                <AiFillLinkedin className="hover:text-purple-500" />
              </Link>
              <Link href="">
                {" "}
                <AiFillInstagram className="hover:text-purple-500" />
              </Link>
              <Link href="">
                <AiFillTwitterSquare className="hover:text-purple-500" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Team;
