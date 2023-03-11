import React from "react";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import Youtubemo from "./Youtubemo";
import Link from "next/link";
import Video from "@/components/video";

function Youtube() {
  return (
    <div>
      <div className=" w-full mt-28 hidden md:flex">
        <div className="relative w-[40%]">
          <Image
            loading="lazy"
            width={500}
            height={500}
            className="w-full h-[100%] blur-image"
            src="/hqdefault.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-purple-900 bg-opacity-90"></div>
          <h1 className="absolute top-[50%] lg:text-3xl text-xl font-font font-bold pl-10  text-white items-center">
            Watch more on our Youtube Channel
            <div className=" flex items-center gap-2">
              <FaYoutube className="text-red-600 lg:text-6xl text-4xl " />
              <Link
                href="https://www.youtube.com/@leadafriquetv7715"
                target="_blank"
              >
                <h1 className="lg:text-2xl font-font text-white font-medium hover:underline text-sm">
                  LeadAfrique tv{"--- "}
                </h1>
              </Link>
            </div>
          </h1>
        </div>

        <Video />
      </div>
      <Youtubemo />
    </div>
  );
}

export default Youtube;
