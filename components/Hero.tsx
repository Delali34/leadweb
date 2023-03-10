import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Inspire You To GREATness",
      "Are People Builders",
      "Are Ready To Work",
    ],
    loop: true,
    delaySpeed: 2300,
  });
  return (
    <div className="absolute top-[0] left-[0] w-full lg:px-16 lg:py-1 md:mt-24 mt-24 px-4">
      <h1 className="text-purple-500 text-6xl font-font xl:text-8xl md:text-6xl font-bold md:text-center md:pt-72 pt-36 ">
        We <span className="text-white">{text}</span>
        <Cursor cursorColor="#7B2A93" />
      </h1>
      <h1 className="text-white text-xl font-font xl:text-4xl md:text-2xl md:text-center pt-10">
        Transformed Africa through creative and responsive leaders.
      </h1>
    </div>
  );
}
