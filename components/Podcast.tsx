import React from "react";
import Image from "next/image";
function podcast() {
  return (
    <div className="">
      <div className="mt-24">
        <h1 className="text-3xl font-font text-center font-bold">
          WATCH AND LISTEN
        </h1>
        <p className="font-font text-sm text-center">
          GET STARTED NOW WITH INSIGHTS AND STRATEGIES
        </p>
      </div>
      <div className=" md:flex justify-center gap-10 mt-20">
        <div className="relative md:h-[30%] md:w-[30%] m-5">
          <Image
            width={300}
            height={300}
            className="w-[100%]"
            src="/pexels-andrea-piacquadio-813940.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 "></div>
          <h1 className="absolute top-[50%] left-[30%] font-bold font-font xl:text-3xl text-white md:text-xl text-3xl">
            FARMULUS
          </h1>
        </div>
        <div className="relative md:h-[30%] md:w-[30%] m-5">
          <Image
            width={500}
            height={500}
            className="w-[100%]"
            src="/pexels-harry-cunningham-harrydigital-7383469.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 "></div>
          <h1 className="absolute top-[50%] left-[30%] font-bold font-font xl:text-3xl text-white md:text-xl text-3xl">
            PODCAST
          </h1>
        </div>
      </div>
    </div>
  );
}

export default podcast;
