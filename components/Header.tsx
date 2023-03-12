import React, { useRef, useEffect, useState } from "react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

const myImages = [
  new CloudinaryImage("camp_4_hbmxvz", { cloudName: "dpbuwo8ha" }).resize(
    fill().width(1920).height(1077)
  ),
  new CloudinaryImage("camp_10_hbp9b6", { cloudName: "dpbuwo8ha" }).resize(
    fill().width(1920).height(1077)
  ),
  new CloudinaryImage("camp_54_c90khq", { cloudName: "dpbuwo8ha" }).resize(
    fill().width(1920).height(1077)
  ),
  new CloudinaryImage("gyla_53_r7lgfe", { cloudName: "dpbuwo8ha" }).resize(
    fill().width(1920).height(1077)
  ),
  new CloudinaryImage("work_eli4r6", { cloudName: "dpbuwo8ha" }).resize(
    fill().width(1920).height(1077)
  ),
];

type Props = {};

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
      setBackgroundIndex((backgroundIndex + 1) % myImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundIndex]);

  return (
    <header>
      <div className="fade-in" ref={pageRef}>
        <div className="relative">
          <AdvancedImage
            cldImg={myImages[backgroundIndex]}
            className="h-screen w-full object-cover blur-image"
            alt=""
            cache="86400"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 h-screen"></div>
        </div>
      </div>
    </header>
  );
}
