"use client";

import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className=" flex flex-col items-center justify-center text-center py-24  overflow-hidden font-lexend">
      <div className="relative">
        {/* Background behind text only */}
        <div
          className="absolute inset-0 flex justify-center items-center pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="bg-cover bg-center bg-no-repeat w-[200px] md:w-[388.11px] rotate-[90%] h-[195px] md:h-[376.44px] opacity-[35%]"
            style={{ backgroundImage: "url('Group.png')" }}
          ></div>
        </div>

        {/* icons  */}
        <div className="hidden md:block">
          <div className="absolute bottom-0">
            <Image src="/coin1.svg" alt="coin" width={133.09} height={173.02} />
          </div>
          <div className="absolute -top-16 left-75 z-[20]">
            <Image src="/coin2.svg" alt="coin" width={111.46} height={108.83} />
          </div>
          <div className="absolute -top-16 right-0 ">
            <Image src="/coin3.svg" alt="coin" width={111.46} height={108.83} />
          </div>
          <div className="absolute bottom-5 right-40 z-[20]">
            <Image src="/coin4.svg" alt="coin" width={111.46} height={108.83} />
          </div>
          <div className="absolute bottom-13 rotate-12 right-130 z-[20]">
            <Image src="/box.svg" alt="coin" width={95.7} height={113} />
          </div>
          <div className="absolute -bottom-10  left-50 ">
            <Image src="/bulb.svg" alt="coin" width={115.07} height={113.49} />
          </div>
        </div>

        {/* Text Content */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-[100px] font-semibold text-white w-9/12 mx-auto">
            Ain’t{" "}
            <span className="bg-[#B341FF] px-3 py-1 rounded-[67px] text-white">
              Nobody
            </span>{" "}
            <br />
            Got time for{" "}
            <span className="bg-[#C2F929] px-3 py-1 rounded-[14px] text-black">
              Boring
            </span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFDD03] to-[#FBC403]">
              Regular Money
            </span>
          </h1>
        </div>
      </div>

      <p className="text-gray-300 mt-10 md:mt-[72px] text-sm sm:text-base md:text-[22px]">
        Trade the Hottest Demo Taka Effortlessly
      </p>
    </section>
  );
};

export default Hero;
