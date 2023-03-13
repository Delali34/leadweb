import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Futuretest from "@/components/Futuretest";
import Footer from "./Footer";
import Menu from "@/components/Menu";

const svgVariants = {
  hidden: {
    rotate: -180,
  },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 5,
      ease: "easeInOut",
    },
  },
};
const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};
const letterAnimate = {
  initial: {
    y: 400,
    opacity: 0.4,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  },
};

const Future = () => {
  return (
    <div>
      <Menu />
      <div
        className="relative w-[100%]  flex justify-center items-center
      "
      >
        <Image
          loading="lazy"
          width={1000}
          height={1000}
          className="md:h-[600px] h-[250px] w-[100%] object-cover blur-image"
          src="/gyla (60).jpg"
          alt=""
        />

        <div className="absolute inset-0 bg-black bg-opacity-40 "></div>
        <motion.div initial="initial" animate="animate" className="absolute">
          <motion.div variants={banner} className="flex">
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              C
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              o
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              r
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              p
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              o
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              r
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              a
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold "
            >
              t
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              e
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold md:pl-7 pl-2"
            >
              T
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              r
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              a
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              i
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold "
            >
              n
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              i
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              n
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              g
            </motion.h1>

            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold md:pl-7 pl-2"
            >
              a
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold "
            >
              n
            </motion.h1>

            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              d
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold md:pl-7 pl-2"
            >
              R
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              e
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              t
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              r
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              e
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              a
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              t
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              s
            </motion.h1>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto xl:px-28 2xl:px-0"
      >
        <h1 className="pt-24 font-font font-bold text-[#66319A] px-10 md:text-6xl text-xl">
          Corporate Training and Retreats
        </h1>
        {/* <p className="p-10 font-font font-light md:text-xl text-sm">
          This initiative was birthed out of the need to enhance the overall
          learning capabilities amongst young people in socio-economically
          deprived communities across Ghana. There is a huge margin of young
          individuals in deprived urban or rural communities who never realize
          their full potential to achieve success academically, socially and
          professionally. This is due to they being unaware of their innate
          capabilities to be great and their ignorance about the uniqueness of
          their person.{" "}
        </p> */}
        <div>
          <h1 className="px-10 py-5 font-font font-bold md:text-xl text-sm text-[#66319A]">
            How they will benefit
          </h1>
          <p className="font-font px-10 md:text-xl text-[12px] font-light">
            <span className="text-[#66319A] md:text-2xl">{">"}</span> Personal
            Productivity <br /> <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span> Team
            Building <br />
            <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span> Report
            Writing <br />
            <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span> Project
            Management
            <br />
            <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span> Goal
            setting master class <br />
            <br />
            <span className="text-[#66319A] md:text-2xl">
              {">"}
            </span> Coaching <br />
            <br />
            <span className="text-[#66319A] md:text-2xl">
              {">"}
            </span> Mentoring <br />
            <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span> Resource
            Mobilization <br />
            <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span> Proposal
            Writing <br />
            <br />
          </p>
        </div>
        <motion.div className="max-w-7xl mx-auto ">
          <motion.img
            initial={{
              y: 50,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className=" ml-auto mr-auto nd:mt-36 mt-10 p-5"
            src="/las.png"
            alt=""
          />
          <p className="p-10 font-font font-light md:text-xl text-sm">
            <span className="text-[#FCA77A] xl:text-[40px] font-font font-black">
              {" "}
              Las
              <span className="text-[#581D5B]"> Magnatas</span>
            </span>{" "}
            As women continue to break glass ceiling in many sectors of the
            economy and pursue their interests, many of them are experiencing
            great burnout and resentment at home and at work, unconsciously
            sabotaging individual and company success.
          </p>
          <p className="p-10 font-font font-light md:text-xl text-sm">
            We at LeadAfrique International are convinced that the introduction
            of structured support, these multiple roles can be harmonized to
            prevent burnout and enable women to UNLEASH THE POWER WITHIN TO
            ACHIEVE GREAT HEIGHTS.
          </p>
          <p className="p-10 font-font font-light md:text-xl text-sm">
            In 2021, we started an elite women-only programme to enable the
            modern female business executives to discover herself and enjoy
            wealth and abundance that is translated into profitability at the
            workplace.
          </p>
          <p className="p-10 font-font font-light md:text-xl text-sm">
            Dubbed “Las Magnatas (Spanish for female tycoon)”, the inaugural
            cohort had five female executives with interest in oil and gas
            development and catering.
          </p>
        </motion.div>
        <h1 className="pt-24 font-font font-bold text-[#66319A] px-10 md:text-6xl text-4xl">
          Menspiration
        </h1>
        <p className="p-10 font-font font-light md:text-xl text-sm">
          What a man humbly displays in the external world may not be a true
          reflection of his interior world; external messages about how an
          individual or a group of individuals believe the world wants men to be
          may color the expression. Men’s behavior, particularly their
          connection with alcohol and other drugs is influenced by messages they
          receive from their family, friends, teachers and the media. For men,
          the messages are different from that for women.
        </p>
        <p className="p-10 font-font font-light md:text-xl text-sm">
          We at LeadAfrique International are convinced that the introduction of
          structured support, these multiple roles can be harmonized to prevent
          burnout and enable men to UNLEASH THE POWER WITHIN TO ACHIEVE GREAT
          HEIGHTS.
        </p>
        <p className="p-10 font-font font-light md:text-xl text-sm">
          It is a men-only programme to enable the modern male business
          executives to discover himself and enjoy wealth and abundance that is
          translated into profitability at the workplace. It is aimed at
          enabling men conquer their fears, develop a life plan, build their
          businesses and plan for their families.
        </p>
      </motion.div>

      {/* <div>
        <Futuretest />
      </div>
      <div className="mt-40 max-w-7xl mx-auto p-10">
        <h1 className="font-font font-bold text-6xl text-[#C40C7B] underline ">
          Support <span className="text-[#472657]"> Us</span>
        </h1>
        <img className="pt-32" src="/donate.png" alt="" />
      </div> */}
      <Footer />
    </div>
  );
};
export default Future;
