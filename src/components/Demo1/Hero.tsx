import { features } from "@/constants/features";
import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between container mx-auto py-8 text-white">
      {/* Left side content */}
      <div className="flex-1">
        <h1 className="text-4xl md:text-[64px] font-medium leading-tight font-poppins">
          The Ultimate <span className="text-[#E9AE82]">CS 2</span>{" "}
          <span className="text-[#E9AE82]">Marketplace</span> for Gamers{" "}
          <span className="block">Who Mean Business</span>
        </h1>
        <p className="text-[#F5F5F5] font-medium mt-[13.55px] mb-[42.72px]">
          Buy, sell, and trade skins securely with unbeatable prices and
          transparency
        </p>

        {/* Button */}
        <div className="relative">
          <button className="px-2 py-4 w-[193px] h-[52px] bg-gradient-to-r from-[#E9AD83] to-[#9B1FE8] text-white font-medium rounded-[68px] cursor-pointer">
            Login with Steam
          </button>
          <button className="absolute left-47.5 top-1/2 -translate-y-1/2 size-[52px] flex items-center justify-center bg-gradient-to-r from-[#E9AD83] to-[#9B1FE8] text-white rounded-full transition-colors cursor-pointer">
            <Image src="/arrow.svg" alt="" width={10} height={10} />
          </button>
        </div>
      </div>

      {/* Right side image */}
      <div className=" ">
        <Image
          src="/hero.png"
          alt="Hero"
          width={455}
          height={531}
          className=""
        />
      </div>
      {/* Feature cards at bottom */}
      <div className="absolute bottom-0 w-full ">
        <div className="bg-[#341d44]  rounded-3xl p-4">
          <div className="flex items-center gap-[70px]">
            {features.map((feature, index) => {
              const Path = feature.path;
              return (
                <div key={index} className="flex items-center gap-[34px]">
                  <div className="size-[60px] rounded-[19px] flex items-center justify-center bg-gradient-to-r from-[#E9AD83] to-[#9B1FE8] text-white ">
                    <Image src={Path} alt="" width={24} height={24} />
                  </div>
                  <span className="text-[#F5F5F5] font-medium">
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
