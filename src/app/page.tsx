import Link from "next/link";

export default function Home() {
  return (
    <nav className="flex flex-col justify-center items-center gap-6 md:gap-8 min-h-screen font-poppins ">
      <h1 className="text-[#9B1FE8] font-extrabold text-4xl md:text-5xl lg:text-6xl">
        APIXcel
      </h1>
      <div className="flex flex-col md:flex-row gap-6 ">
        <Link href="/demo1">
          <button className="font-bold text-white bg-gradient-to-r from-[#E9AD83] to-[#9B1FE8] px-7 py-4 rounded-[68px] cursor-pointer">
            Demo 1
          </button>
        </Link>
        <Link href="/demo2">
          <button className="font-bold text-white bg-gradient-to-r from-[#E9AD83] to-[#9B1FE8] px-7 py-4 rounded-[68px] cursor-pointer">
            Demo 2
          </button>
        </Link>
      </div>
    </nav>
  );
}
