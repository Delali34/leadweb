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
    <div className="flex items-center h-screen absolute top-[0] left-[0] w-[100%] justify-center md:px-10 px-5">
      <div className="">
        <h1 className="text-purple-500 text-4xl font-font xl:text-7xl 2xl:text-8xl md:text-5xl font-extrabold  ">
          We <span className="text-white">{text}</span>
          <Cursor cursorColor="#7B2A93" />
        </h1>
        <h1 className="text-white text-sm font-font xl:text-2xl md:text-2xl 2xl:text-4xl  pt-7 xl:pt-5 2xl:pt-10">
          Transformed Africa through creative and responsive leaders.
        </h1>
      </div>
    </div>
  );
}
