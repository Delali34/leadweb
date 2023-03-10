import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { PageWrapper } from "./../pages/page-wrapper";
import first from "../public/camp (4).jpg";
import second from "../public/camp (10).jpg";
import third from "../public/camp (54).jpg";
import four from "../public/gyla (53).jpg";
import five from "../public/work.jpg";

type Props = {};

const backgrounds = [first, second, third, four, five];

export default function Header({}: Props) {
  const pageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;
    page.classList.add("fade-in-active");
    return () => {
      page.classList.remove("fade-in-active");
    };
  }, []);
  const [active, setActive] = useState(false);
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const showMenu = () => {
    setActive(!active);
  };

  useEffect(() => {
    let handler = () => {
      setActive(false);
    };
    document.addEventListener("mousedown", handler);
  });

  useEffect(() => {
    setTimeout(() => {
      setBackgroundIndex((backgroundIndex + 1) % backgrounds.length);
    }, 5000);
  }, [backgroundIndex]);

  return (
    <header>
      <div className="fade-in" ref={pageRef}>
        <div className="relative">
          <Image
            width={1580}
            height={1200}
            className="h-screen w-full object-cover"
            src={backgrounds[backgroundIndex]}
            alt=""
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 h-screen"></div>
        </div>
      </div>
      {/* <div className="absolute top-[0] left-[0] w-full lg:px-16 lg:py-1 md:mt-24 mt-36 px-4">
          <h1 className="text-white text-6xl font-font xl:text-8xl md:text-6xl font-bold md:text-center md:pt-72 pt-36 ">
            We Inspire <span className="text-[#C500FF]">You</span> To{" "}
            <span className="text-[#C500FF]">GREATness</span>
          </h1>
          <h1 className="text-white text-xl font-font xl:text-4xl md:text-2xl md:text-center pt-10">
            Transformed Africa through creative and responsive leaders.
          </h1>
        </div> */}
      {/* </PageWrapper> */}
    </header>
  );
}
