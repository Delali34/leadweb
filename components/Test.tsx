import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

function Test() {
  return (
    <div className=" max-w-5xl mx-auto">
      <div className="text-center">
        <h1 className="lg:text-4xl font-font font-bold md:text-2xl text-xl">
          Don’t take our word for it
        </h1>
        <p className="bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent lg:text-3xl font-font font-bold pt-3 ">
          Trust Our Customers
        </p>
      </div>
      <div className="mt-5 flex flex-col rounded-lg items-center">
        <Image
          width={100}
          height={100}
          className="object-center"
          src="/icons8-quote-left-100.png"
          alt=""
        />
      </div>
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={4000}
        className="mt-5 px-5 lg:px-0"
      >
        <div className="font-font ">
          <p className="lg:text-2xl text-sm font-light">
            “Leadership Farm is fun, exciting and really helpful. It has helped
            me take myself seriously, I now think about where I see myself in
            the future”.
          </p>
          <h1 className="p-2 text-2xl font-bold text-purple-500">--STUDENT</h1>
          <p>AIS</p>
        </div>
        <div className="font-font ">
          <p className="lg:text-2xl text-sm font-light">
            “I used to speak a lot of negative words to myself daily I never
            felt good enough but after going through self -belief I see myself
            as the best, I wake up and I speak positively to myself and it has
            made me better in all I do. Thank you Leadership Farm”
          </p>
          <h1 className="p-2 text-2xl font-bold text-purple-500">--STUDENT</h1>
          <p>AIS</p>
        </div>
        <div className="font-font ">
          <p className="lg:text-2xl text-sm font-light">
            “Learning to learn as helped me to do better in art and mathematics
            which was a challenge.”
          </p>
          <h1 className="p-2 text-2xl font-bold text-purple-500">--STUDENT</h1>
          <p>AIS</p>
        </div>
        <div className="font-font ">
          <p className="lg:text-2xl text-sm font-light">
            “I used to hate math’s and was not interested in the subject so I
            was failing but after leader farm took me through self- belief have
            improve a lot in math’s now I belief I will not fail the subject
            ever again.”
          </p>
          <h1 className="p-2 text-2xl font-bold text-purple-500">--STUDENT</h1>
          <p>FLOBAR</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Test;
