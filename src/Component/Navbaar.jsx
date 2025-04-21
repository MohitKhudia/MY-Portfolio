"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GitHubIcon, LinkDinIcon } from "./Icon";
import { AppContext } from "@/app/Context";

export default function Navbaar() {
  const Path = usePathname();
  const { Isopen, setIsopen, scrollToContact } = AppContext();
  const handleMenu = () => {
    setIsopen((prev) => {
      const newState = !prev;
      console.log("New Isopen value:", newState);
      return newState;
    });
  };
  return (
    <nav className="max-w-[1240px] mt-7 mx-auto flex justify-between items-center py-5 px-7.5 rounded-[50px] bg-gradient-to-r from-white/30 to-white/30">
      {/* Logo/Brand */}
      <div className="text-xl font-bold">
        <Link href="/" className="ff-Sansita text-[28px] font-normal">
          Portfolio
        </Link>
      </div>
      <ul
        className={`flex items-center gap-8 fixed md:static ${
          Isopen ? "bottom-0" : "bottom-full"
        } `}
      >
        <li>
          <Link
            href="/"
            className={`text-lg ff-Nato font-semibold hover:text-[#DF924A] ${
              Path == "/" ? "text-[#DF924A]" : "text-[#767472]"
            }`}
            onClick={()=> setIsopen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/Workshop"
            className={`text-lg ff-Nato font-semibold text-[#767472] hover:text-[#DF924A] ${
              Path == "/Workshop" ? "text-[#DF924A]" : "text-[#767472]"
            }`}
            onClick={()=> setIsopen(false)}
          >
            Workshop
          </Link>
        </li>
        <li className="md:ml-12">
          <button
            onClick={() => {
              scrollToContact() 
              setIsopen(false)
            }}
            className="py-2.5 px-5 rounded-[10px] bg-[#DF924A] text-lg ff-Nato text-white cursor-pointer"
          >
            Contact Us
          </button>
        </li>
        <li className="md:ml-12 flex items-center gap-3.5">
          <Link
            href="https://www.linkedin.com/in/mohit-khudia-a1a36434a/"
            target="_blank"
          >
            <LinkDinIcon />
          </Link>
          <div className="h-7.5 w-[1px] bg-[#797170]"></div>
          <Link href="https://github.com/MohitKhudia" target="_blank">
            <GitHubIcon />
          </Link>
        </li>
      </ul>
      <label className="hamburger md:hidden inline-block" onClick={handleMenu}>
        <input
          type="checkbox"
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
        <svg viewBox="0 0 32 32">
          <path
            className="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          ></path>
          <path className="line" d="M7 16 27 16"></path>
        </svg>
      </label>
    </nav>
  );
}
