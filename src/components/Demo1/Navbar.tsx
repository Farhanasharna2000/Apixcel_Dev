"use client";
import React, { useState } from "react";
import { categories } from "@/constants/categories";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="max-w-[1440px] mx-auto px-4">
      {/* Top Navbar */}
      <div className="container mx-auto flex items-center justify-between py-5">
        {/* Left side */}
        <div className="flex items-center gap-4 md:gap-[31px] w-full md:w-auto">
          {/* Logo */}
          <Image
            src="/logo.png"
            alt="logo"
            width={116}
            height={57.31}
            className="w-[90px] md:w-[116px] h-auto"
          />

          {/* Search bar  */}
          <div className="hidden md:block flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Skins..."
                className="w-[268px] h-[52px] px-5 pr-12 bg-[#522b63] border rounded-[68px] text-[#F5F5F56E]/43 text-sm placeholder-[#F5F5F56E]/430 focus:outline-none transition-all"
              />
              <button className="absolute -right-12 top-1/2 -translate-y-1/2 size-[52px] flex items-center justify-center bg-[#522b63] rounded-full cursor-pointer">
                <Image src="/search.svg" alt="search" width={24} height={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Right side buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="font-medium text-white cursor-pointer">
            Market
          </button>
          <button className="px-2 py-4 w-[123px] h-[53.14px] text-[#F5F5F5] border-[1.5px] rounded-[68px] font-medium bg-[#6b53a2] cursor-pointer">
            Sign Up
          </button>
          <button className="px-2 py-4 w-[187px] h-[53.14px] bg-gradient-to-r from-[#E9AD83] to-[#9B1FE8] text-white font-medium rounded-[68px] cursor-pointer">
            Login with Steam
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#522b63] rounded-xl p-4 space-y-4 text-center text-white">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search Skins..."
              className="w-full h-[48px] px-4 pr-10 bg-[#6b3b83] border rounded-[68px] text-sm text-[#F5F5F56E]/43  placeholder:text-white focus:outline-none"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              <Image src="/search.svg" alt="search" width={20} height={20} />
            </button>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <button className="font-medium text-white">Market</button>
            <button className="w-full py-3  rounded-[68px] font-medium bg-[#6b53a2]">
              Sign Up
            </button>
            <button className="w-full py-3 bg-gradient-to-r from-[#E9AD83] to-[#9B1FE8] text-white font-medium rounded-[68px]">
              Login with Steam
            </button>
          </div>
        </div>
      )}

      {/* Categories */}
      <div className="max-w-[1440px] mx-auto mt-4">
        <div className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-[33px] justify-center md:justify-start container mx-auto">
          {categories.map((category, index) => (
            <button key={index} className="relative">
              <div className="flex items-center gap-[8px] md:gap-[11px]">
                <h1
                  className={`font-medium text-sm md:text-base ${
                    index === 0
                      ? "bg-gradient-to-r from-[#E9AD83] to-[#9B1FE8] bg-clip-text text-transparent"
                      : "text-[#F5F5F5]"
                  }`}
                >
                  {category}
                </h1>
                <Image
                  src={index === 0 ? "/c1.png" : "/c.png"}
                  alt=""
                  width={24}
                  height={20}
                  className="md:w-[31px] md:h-[26px]"
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
