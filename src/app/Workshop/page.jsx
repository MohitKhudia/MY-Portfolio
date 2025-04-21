import React from "react";
import { Projects } from "../Projects";
import Link from "next/link";

const Workshop = () => {
  return (
    <main>
      <section>
        <div className="container mx-auto max-w-[1240px] px-3 mt-4">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {Projects.map((value, index) => {
              return (
                <div
                  className="border p-3 rounded-2xl hover:-translate-y-1 transition-all duration-200 backdrop-blur-md bg-white/20"
                  key={index}
                  data-aos = "zoom-in"
                >
                  <img src={value.img.src} alt="Project Img" />
                  <h2 className="text-xl lg:text-2xl ff-Bree mt-2.5">
                    Title :- {value.title}
                  </h2>
                  <h2 className="text-xl lg:text-2xl ff-Bree mt-2.5">
                    Description :- {value.Description}
                  </h2>
                  <Link
                    href={value.Link}
                    target="_blank"
                    className="text-xl lg:text-2xl ff-Bree mt-2.5"
                  >
                    Link :-
                    <span className="hover:underline hover:text-blue-500 cursor-pointer">
                      Click Here
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
          <h1 className="ff-Bree sm:text-2xl text-xl mt-5 text-center">
            Now I am a fresher so I don't have any real world live projects but
            i promise one day i will have a long list here 
          </h1>
        </div>
      </section>
    </main>
  );
};

export default Workshop;
