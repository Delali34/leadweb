import React from "react";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("");

  return (
    <div>
      <div className="relative">
        <Image
          className="w-[100%] h-[70vh] object-cover -z-50 blur-image"
          loading="eager"
          width={1000}
          height={1000}
          src="/contact.webp"
          alt=""
        />
      </div>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-white xl:text-[60px] text-[40px] m-5 p-5 font-font font-bold shadow-sm shadow-black absolute xl:top-[40%] top-[30%]">
          We would love to work with you.
        </h1>
      </div>

      <div className="  font-font xl:flex justify-center items-center max-w-7xl mx-auto xl:-mt-52 lg:gap-5 ">
        <div className="bg-[#CFF5DD] w-[100%] z-[9999]">
          <h1 className=" px-12 pt-6 pb-8 mb-2">
            Book a one on one with us below
          </h1>
          <form
            action="https://getform.io/f/63c76d56-a805-46b8-b922-21d9d8691dee"
            method="POST"
            encType="multipart/form-data"
            className=" px-12 pt-6 pb-8 xl:mb-4"
          >
            <div className="lg:flex justify-between text-sm">
              <div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-normal mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="lg:w-[400px] appearance-none border  w-full xl:w-full py-2 px-3 text-gray-700 outline-none bg-[#CFF5DD] border-b-black  focus:border-b-purple-500 transition translate duration-200 ease-in-out"
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    name="name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-normal mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className=" appearance-none border   w-full py-2 px-3 text-gray-700 outline-none bg-[#CFF5DD] border-b-black  focus:border-b-purple-500 transition translate duration-200 ease-in-out"
                    id="email"
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    name="email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-normal mb-2"
                    htmlFor="phone"
                  >
                    Phone number
                  </label>
                  <input
                    className="appearance-none border  w-full py-2 px-3 text-gray-700 outline-none bg-[#CFF5DD] border-b-black  focus:border-b-purple-500 transition translate duration-200 ease-in-out"
                    id="phone"
                    type="tel"
                    placeholder="Your Phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    name="phone number"
                  />
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-normal mb-2"
                    htmlFor="name"
                  >
                    Subject
                  </label>
                  <input
                    className="lg:w-[400px] appearance-none border  w-full xl:w-full py-2 px-3 text-gray-700 outline-none bg-[#CFF5DD] border-b-black  focus:border-b-purple-500 transition translate duration-200 ease-in-out"
                    id="topic"
                    type="text"
                    placeholder="Enter Topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    required
                    name="Subject"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-normal mb-2"
                    htmlFor="date"
                  >
                    Date
                  </label>
                  <input
                    className="appearance-none border  w-full py-2 px-3 text-gray-700 outline-none bg-[#CFF5DD] border-b-black  focus:border-b-purple-500 transition translate duration-200 ease-in-out"
                    id="date"
                    min={new Date().toISOString().split("T")[0]}
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    name="Date"
                  />
                </div>
                <div className="mb-9">
                  <label
                    className="block text-gray-700 font-normal mb-2"
                    htmlFor="time"
                  >
                    Time
                  </label>
                  <input
                    className="appearance-none border w-full py-2 px-3 text-gray-700 outline-none bg-[#CFF5DD] border-b-black  focus:border-b-purple-500 transition translate duration-200 ease-in-out"
                    id="time"
                    min="08:00"
                    max="17:00"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                    name="Time"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-purple-500 hover:bg-purple-300 text-white font-normal py-2 outline-none px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Book Meeting
              </button>
            </div>
          </form>
        </div>
        <div className="bg-[#2E2E2E] w-[100%] h-[470px] flex flex-col items-center justify-center z-[9999]">
          <p className="text-[15px] text-purple-500 text-center">
            LeadAfrique International
          </p>
          <p className="text-[15px] text-white text-center">
            Greatness House, #432
          </p>
          <p className="text-[15px] text-white text-center">
            Lame Dwaahe Street, SHC Estates, Adenta
          </p>
          <p className="text-[15px] text-white text-center">
            Housing Down, Accra, Ghana
          </p>
          <p className="text-[15px] text-center text-white pt-7">
            +233 302 540387 | +233 574 368 092
          </p>
          <p className="text-[15px] text-center text-white ">
            ask@leadafrique.org
          </p>
          <div className="text-white flex mt-5 gap-2 text-3xl ">
            <Link
              href="https://facebook.com/leadafriqueinternational"
              target="_blank"
            >
              {" "}
              <FiFacebook className="cursor-pointer hover:text-purple-500" />
            </Link>
            <Link href="https://www.instagram.com/leadafrique/" target="_blank">
              {" "}
              <AiOutlineInstagram className="cursor-pointer hover:text-purple-500" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/leadafrique-internatonal/"
              target="_blank"
            >
              <AiOutlineLinkedin className="cursor-pointer hover:text-purple-500" />
            </Link>
            <Link href="https://twitter.com/LeadAfrique">
              {" "}
              <AiOutlineTwitter className="cursor-pointer hover:text-purple-500" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container max-w-7xl mx-auto mb-36 md:mb-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4580.031134258044!2d-0.15797834929503896!3d5.705980195844037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9d36f6d8f56f%3A0xaa69443fc55723c!2sLeadAfrique%20International!5e1!3m2!1sen!2sus!4v1678178980421!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contacts;
