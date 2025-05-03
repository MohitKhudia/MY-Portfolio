import React from "react";
import { Projects } from "../Projects";
import Link from "next/link";

const Workshop = () => {
  return (
    <main>
      <section>
        <div className="container mx-auto max-w-[1240px] px-3 mt-4">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
            {Projects.map((value, index) => {
              return (
                <div
                  className="border flex flex-col h-full p-3 relative rounded-2xl hover:-translate-y-1 transition-all duration-200 backdrop-blur-md bg-white/20"
                  key={index}
                  data-aos = "zoom-in"
                >
                  <img src={value.img.src} alt="Project Img" className="w-full"/>
                  {value.size ? (<div className="bg-black px-2 py-1.5 text-sm absolute rounded-full -top-[15px] lg:-right-[30px] right-1/2 translate-x-1/2 lg:translate-x-0 ff-Bree text-white">
                      {value.size}
                  </div>) : ''}
                  <div className="flex flex-col justify-between h-[50%]">
                  <h2 className="text-xl lg:text-2xl ff-Bree mt-2.5">
                    Title :- {value.title} 
                  </h2>
                  <h2 className="text-[16px] lg:text-xl ff-Bree mt-2.5">
                    Description :- {value.Description}
                  </h2>
                  <Link
                    href={value.Link}
                    target="_blank"
                    className="text-[16px] lg:text-xl ff-Bree mt-2.5"
                  >
                    Link :-
                    <span className="hover:underline hover:text-blue-500 cursor-pointer">
                      Click Here
                    </span>
                  </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Workshop;
