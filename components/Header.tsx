import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

import first from "../public/camp (4).webp";
import second from "../public/camp (10).webp";
import third from "../public/camp (54).webp";
import four from "../public/gyla (53).webp";
import five from "../public/work.webp";

type Props = {};

const backgrounds = [first, second, third, four, five];

export default function Header({}: Props) {
  const pageRef = useRef<HTMLDivElement>(null);
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;
    page.classList.add("fade-in-active");
    return () => {
      page.classList.remove("fade-in-active");
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((backgroundIndex + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundIndex]);

  return (
    <header>
      <div className="fade-in" ref={pageRef}>
        <div className="relative">
          <Image
            width={800}
            height={600}
            className="h-screen w-full object-cover"
            src={backgrounds[backgroundIndex]}
            alt=""
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 h-screen"></div>
        </div>
      </div>
    </header>
  );
}
