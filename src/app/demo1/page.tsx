import Navbar from "@/components/Demo1/Navbar";
import React from "react";

const Demo1Page: React.FC = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/45"></div>
      <div className="relative z-10">
        <Navbar />
      </div>
    </div>
  );
};

export default Demo1Page;
