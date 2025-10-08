import React from "react";
import { categories } from "@/constants/categories";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <header className="max-w-[1440px] mx-auto">
      <div className="container mx-auto flex items-center justify-between py-5">
        <div className="flex items-center justify-between gap-[31px]">
          {/* Logo */}
          <Image src="/logo.png" alt="" width={116} height={57.31} />

          {/* Search bar */}
          <div className="flex-1 ">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Skins..."
                className="w-[268px] h-[52px] px-5 pr-12 bg-[#522b63] border rounded-[68px] text-[#F5F5F56E]/43 text-sm placeholder-[#F5F5F56E]/430 focus:outline-none  transition-all"
              />
              <button className="absolute -right-12 top-1/2 -translate-y-1/2 size-[52px] flex items-center justify-center bg-[#522b63]  rounded-full transition-colors cursor-pointer">
                <Image src="/search.svg" alt="" width={24} height={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center gap-4 ">
          <button className=" font-medium text-white cursor-pointer transition-colors">
            Market
          </button>
          <button className="px-2 py-4 w-[123px] h-[53.14px] text-[#F5F5F5] border-[1.5px] rounded-[68px] font-medium  bg-[#6b53a2] cursor-pointer">
            Sign Up
          </button>
          <button className="px-2 py-4 w-[187px] h-[53.14px] bg-gradient-to-r from-[#E9AD83] to-[#9B1FE8] text-white font-medium rounded-[68px] cursor-pointer">
            Login with Steam
          </button>
        </div>
      </div>
      {/* categories  */}
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center gap-[33px] container mx-auto">
          {categories.map((category, index) => (
            <button key={index} className="relative">
              <div className="flex items-center gap-[11px]">
                <h1
                  className={`font-medium ${
                    index === 0
                      ? "bg-gradient-to-r from-[#E9AD83] to-[#9B1FE8] bg-clip-text text-transparent"
                      : "text-[#F5F5F5] "
                  }`}
                >
                  {category}
                </h1>
                <Image
                  src={index === 0 ? "/c1.png" : "/c.png"}
                  alt=""
                  width={31}
                  height={26}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
