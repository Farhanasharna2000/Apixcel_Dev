import Navbar from "@/components/Demo1/Navbar";
import Hero from "@/components/Demo1/Hero";
import React from "react";

const Demo1Page: React.FC = () => {
  return (
    <div
      className="w-full h-auto bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/45"></div>
      <div className="relative z-10 pb-20">
        <Navbar />
        <Hero/>
      </div>
    </div>
  );
};

export default Demo1Page;
