import React from "react";
import { FaYoutube } from "react-icons/fa";
import Video from "@/components/video";
import Image from "next/image";
function Youtubemo() {
  return (
    <div className=" w-full mt-10 md:hidden mb-28">
      <Video />
      <div className="relative">
        <Image
          loading="lazy"
          width={500}
          height={500}
          className="w-full h-[100%] -mt-2 blur-image"
          src="/camp (10).webp"
          alt=""
        />
        <div className="absolute inset-0 bg-purple-900 bg-opacity-90"></div>
        <h1 className="absolute top-[50%]  text-sm font-font font-bold pl-10  text-white items-center ">
          Subscribe to our Youtube Channel
          <div className=" flex items-center gap-2">
            <FaYoutube className="text-red-600 lg:text-6xl text-4xl " />
            <h1 className=" font-font text-white font-medium text-sm underline">
              LeadAfrique tv--{">"}{" "}
            </h1>
          </div>
        </h1>
      </div>
    </div>
  );
}

export default Youtubemo;
