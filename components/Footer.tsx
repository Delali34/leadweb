import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram, AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

function Footer() {
  return (
    <div className="bg-purple-500 ">
      <div className="max-w-7xl md:flex  items-center justify-center mx-auto md:px-10 pb-[120px] md:pb-0 gap-10">
        <div className="flex justify-center md:block ">
          <Image
            width={100}
            height={100}
            className="py-5 w-[50px] h-[100px] lg:w-[] lg:h-[] "
            src="/image 1.png "
            alt=""
          />
        </div>
        <div className="md:flex items-center justify-between w-[100%]">
          <div>
            <div className="flex justify-center items-center md:p-1 pl-5 md:pt-5 -ml-[35px]">
              <AiFillPhone className="text-3xl text-white" />
              <h1 className="font-font md:text-[15px] text-[10px] text-white">
                +233 302 540387{" "}
              </h1>
            </div>
            <div className="flex justify-center items-center md:p-1 pl-5  gap-2">
              <AiOutlineMail className="text-3xl text-white" />
              <h1 className="font-font  md:text-[15px] text-[10px] text-white">
                ask@Leadafrique.org
              </h1>
            </div>
          </div>
          <div className="flex  md:block justify-center">
            <div>
              <h1 className=" font-font font-normal   pl-5   md:text-[15px] text-[10px] text-white pt-5">
                Connect with us
              </h1>
              <div className="flex md:p-1 md:pl-5 md:justify-center pt-2">
                <Link
                  href="https://facebook.com/leadafriqueinternational"
                  target="_blank"
                >
                  <FiFacebook className="text-3xl text-white hover:text-black" />
                </Link>

                <Link href="https://www.instagram.com/leadafrique/">
                  <AiOutlineInstagram
                    className="text-3xl text-white hover:text-black"
                    target="_blank"
                  />
                </Link>

                <Link
                  href="https://www.linkedin.com/company/leadafrique-internatonal/"
                  target="_blank"
                >
                  <AiOutlineLinkedin className="text-3xl text-white hover:text-black" />{" "}
                </Link>

                <Link href="https://twitter.com/LeadAfrique" target="_blank">
                  <AiOutlineTwitter className="text-3xl text-white hover:text-black" />
                </Link>
              </div>
            </div>
          </div>
          <div className="pb-7 pl-1 pt-5">
            <h1 className=" font-font  md:text-[15px] text-[10px] text-white text-center">
              Want a One on One
            </h1>
            <Link href="/contact">
              <p className=" font-font hover:underline  md:text-[15px] text-[10px] text-white text-center">
                Click here
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
