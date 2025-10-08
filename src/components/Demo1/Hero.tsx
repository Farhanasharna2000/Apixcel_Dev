"use client";
import { features } from "@/constants/features";
import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between container mx-auto py-8 text-white px-4 md:px-0">
      {/* Left side content */}
      <div className="flex-1 text-center md:text-left mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-[64px] font-medium leading-tight font-poppins">
          The Ultimate <span className="text-[#E9AE82]">CS 2</span>{" "}
          <span className="text-[#E9AE82]">Marketplace</span> for Gamers{" "}
          <span className="block">Who Mean Business</span>
        </h1>
        <p className="text-[#F5F5F5] font-medium mt-4 md:mt-[13.55px] mb-8 md:mb-[42.72px] text-sm sm:text-base max-w-md mx-auto md:mx-0">
          Buy, sell, and trade skins securely with unbeatable prices and
          transparency
        </p>

        {/* Button */}
        <div className="relative inline-block">
          <button className="px-4 py-3 w-[180px] md:w-[193px] h-[48px] md:h-[52px] bg-gradient-to-r from-[#E9AD83] to-[#9B1FE8] text-white font-medium rounded-[68px] cursor-pointer text-sm md:text-base">
            Login with Steam
          </button>
          <button className="absolute right-[-47px] top-1/2 -translate-y-1/2 size-[40px] md:size-[52px] flex items-center justify-center bg-[#b854c5] text-white rounded-full cursor-pointer">
            <Image src="/arrow.svg" alt="arrow" width={10} height={10} />
          </button>
        </div>
      </div>

      {/* Right side image */}
      <div className="flex justify-center md:justify-end w-full md:w-auto">
        <Image
          src="/hero.png"
          alt="Hero"
          width={455}
          height={531}
          className="w-[250px] sm:w-[320px] md:w-[455px] h-auto"
        />
      </div>

      {/* Feature cards at bottom */}
      <div className="absolute bottom-0 w-full px-4 md:px-0">
        <div className="bg-[#341d44] rounded-3xl p-4 md:p-6">
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-start gap-6 md:gap-[70px]">
            {features.map((feature, index) => {
              const Path = feature.path;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 md:gap-[34px] min-w-[140px] justify-center md:justify-start"
                >
                  <div className="size-[50px] md:size-[60px] rounded-[19px] flex items-center justify-center bg-gradient-to-r from-[#E9AD83] to-[#9B1FE8] text-white">
                    <Image src={Path} alt="" width={24} height={24} />
                  </div>
                  <span className="text-[#F5F5F5] font-medium text-sm md:text-base">
                    {feature.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
