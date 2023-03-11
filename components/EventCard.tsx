import React from "react";
import { motion } from "framer-motion";

function EventCard() {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl-[900px] snap-center bg-purple-500 p-10 opacity-100 lg:opacity-60 lg:hover:opacity-100 cursor-pointer overflow-hidden transition-opacity duration-200 md:mt-20">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full border border-purple-500 xl:[200px] object-cover object-center"
        src="/summercamp.webp"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h3 className="text-3xl font-font font-bold text-white">
          SUMMERCAMP 2023
        </h3>
        <p className="text-xl font-medium font-font text-white">
          Date: July 9 - July 15
        </p>
        <p className="font-font font-extralight my-2 text-xs md:text-sm text-white">
          Farm Summer Camp is a 1-week self and purpose discovery summer camp
          for upper primary, junior high, senior high, and university-bound
          young people between ages 6 -20. At the end of every academic year,
          hundreds of emerging student leaders from across the country are
          camped to be groomed in the art of leadership and statesmanship.
        </p>
        <h2 className="border mt-4 text-white p-3 text-center">
          Read More ---{">"}
        </h2>
      </div>
    </article>
  );
}

export default EventCard;
