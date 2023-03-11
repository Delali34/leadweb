import React from "react";
import Image from "next/image";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
function AboutUs() {
  return (
    <div>
      <div className=" mt-[80px] lg:mt-[150px] max-w-7xl mx-auto md:p-20 ">
        <h1 className="md:text-[80px] font-font font-semibold text-[40px] md:pl-0 pl-10">
          About Us
        </h1>
        <motion.div
          initial={{
            y: 0,
            opacity: 0,
            scale: 0,
          }}
          transition={{ duration: 0.3 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          className="md:mt-40 mt-8 lg:mt-20"
        >
          <Image
            width={2000}
            height={1000}
            className="lg:h-[650px] "
            src="/gyla (11).webp"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="md:mt-40 mt-8 lg:mt-20 bg-purple-500 relative"
      >
        <div className="max-w-7xl mx-auto lg:flex p-10 justify-between gap-8 items-center">
          <div>
            <h1 className="text-white text-4xl font-font font-bold text-center lg:text-start">
              Why we exist
            </h1>
            <p className="mt-5 xl:text-[17px] lg:text-[14px] text-white  font-font lg:text-start text-center text-sm">
              LeadAfrique International is focused on developing young leaders
              in Africa. Their African Leadership Toolkit curriculum teaches
              leadership skills and principles. The organization works to
              support not only young people but also their parents, schools, and
              teachers. The aim is to cultivate a new generation of creative and
              responsive leaders.
            </p>
          </div>
          <div className="lg:flex gap-6 pt-20">
            <div className="bg-white xl:w-[350px] xl:h-[350px] lg:w-[250px] lg:h-[250px] p-3 lg:pt-16 rounded-sm">
              <Image
                width={50}
                height={50}
                className="mr-auto ml-auto"
                src="/icons8-mission-80 (1).png"
                alt=""
              />
              <h1 className="text-2xl font-font text-center font-bold p-2">
                Our Mission
              </h1>
              <p className="text-center">
                We inspire people to achieve their Greatness
              </p>
            </div>
            <div className="bg-white xl:w-[350px] xl:h-[350px] lg:w-[250px] lg:h-[250px] p-3 rounded-sm lg:pt-16 mt-8 lg:mt-0">
              <Image
                width={50}
                height={50}
                className="mr-auto ml-auto"
                src="/icons8-surprise-64.png"
                alt=""
              />
              <h1 className="text-2xl font-font text-center font-bold p-2">
                Our Vision
              </h1>
              <p className="text-center">
                Transformed Africa through creative and responsive leaders.
              </p>
            </div>
          </div>
        </div>
        <h1 className="absolute bottom-[20%] lg:left-[10%] lg:text-[180px] text-[120px] opacity-10 text-white font-bold">
          Values
        </h1>
      </motion.div>
      <Team />
      <Footer />
    </div>
  );
}

export default AboutUs;
