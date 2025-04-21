"use client";
import ThreeModel from "@/Component/ThreeModel";
import R from "@/assets/img/R.png";
import Ring from "../assets/img/Ring.png";
import Flower from "../assets/img/Flower.png";
import Contact from "../assets/img/Contact.png";
import { Skills } from "./Skills";
import { LocationIcon, MailIcon, PhoneIcon } from "@/Component/Icon";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AppContext } from "./Context";
import Aos from "aos";
import 'aos/dist/aos.css';
export default function Home() {
  const {contactRef} = AppContext()
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    purpose: "",
  });
  useEffect(() => {
    Aos.init({
      duration: 800, 
      easing: 'ease-in-out', 
      once: true, 
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_i441thy",
        "template_lyn5qeg",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          reason: formData.purpose,
        },
        "yblEri5MMYfMSOAQq"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "", purpose: "" });
        },
        (error) => {
          alert("Failed to send message: " + error.text);
        }
      );
  };
  return (
    <>
      <header className="relative w-full">
        <img
          src={Flower.src}
          alt="FlowerImg"
          className="absolute flower md:h-[460px] md:w-[460px] h-[250px] -z-1"
        />
        <div className="container mx-auto max-w-[1240px] px-3 flex md:flex-row flex-col md:mt-0 mt-8 h-custom items-center">
          <div className="md:w-[60%] w-full " data-aos="fade-right">
            <h1 className="ff-Sansita text-black lg:text-4xl md:text-3xl sm:text-2xl ">
              Hello <span className="text-xl">( this is me )</span>
            </h1>
            <h1 className="xl:text-7xl lg:text-5xl md:text-4xl sm:text-5xl text-3xl text-black mt-4 ff-Sansita flex items-center">
              Frontend Develope
              <img
                src={R.src}
                alt="R"
                className="w-[0.9em] scale-300 object-contain inline-block"
              />
            </h1>
            <p className="text-[#575250] mt-4 ff-Outfit sm:text-lg ">
              I began my journey in this field a year ago,These are the skill
              sets I can confidently handle and perform as needed: UI & UX
              Development, Web Development, and No-Code Website Building.
            </p>
            <button  onClick={scrollToAbout} className="custom-gradient-btn cursor-pointer text-[#585553] text-base font-medium">
              About me
            </button>
          </div>
          <div className="md:w-[40%] w-full h-full" >
            <ThreeModel />
          </div>
        </div>
      </header>
      <main className="mt-35 md:mt-0">
        {/* About me */}
        <section ref={aboutRef} className="relative">
          <div className="container mx-auto max-w-[1240px] px-3 overflow-hidden">
            {/* intro  */}
            <div className="flex md:flex-row flex-col items-center gap-5">
              <img src={Ring.src} alt="Img" data-aos="fade-right" />
              <div>
                <h2 className="ff-Bree text-2xl" data-aos="fade-down">About Me</h2>
                <h1 className="mt-3.5 ff-Sansita lg:text-7xl md:text-5xl text-5xl Name" data-aos="fade-up">
                  Mohit Khudia
                </h1>
                <div className="flex items-center gap-5 mt-4" data-aos="fade-right">
                  <div className="Dot-Arrow"></div>
                  <h2 className="ff-Bree sm:text-2xl UI" >UI / UX Developer</h2>
                </div>
                <p className="ff-Outfit sm:text-lg mt-7.5 text-[#5D5553] wrap-break-word" data-aos="fade-up">
                  👋 Hi, I’m Mohit — a passionate frontend developer with a
                  strong eye for design and detail. I specialize in turning
                  creative ideas into clean, responsive, and user-friendly
                  websites using React, Next.js, and modern web technologies. I
                  began my journey in this field a year ago and now focused on
                  building real-world projects and growing as a high-value
                  developer. I’m also deeply interested in remote work and
                  freelance opportunities.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-5 mt-12.5">
              {/* Experience & Education */}
              <div className="lg:w-1/2" data-aos="fade-right">
                <div className="flex flex-col lg:flex-row gap-5">
                  {/* Experience  */}
                  <div className="lg:w-1/2">
                    <h2 className="ff-Bree text-2xl ">Experience</h2>
                    <p className="mt-5 ff-Bree">March 2024 - April 2025</p>
                    <div className="Dot-Arrow !w-full"></div>
                    <div className="pl-5 border-l-[3px] border-l-[#DF924A] mt-5">
                      <h2 className="text-lg ff-Bree">Frontend Developer</h2>
                      <p className="text-[#575353] mt-1">
                        + 1 year of Learning Exp
                      </p>
                    </div>
                    <div className="pl-5 border-l-[3px] border-l-[#DF924A] mt-5">
                      <h2 className="text-lg ff-Bree">
                        WordPress & No-Code Developer
                      </h2>
                    </div>
                  </div>
                  {/* Education */}
                  <div className="lg:w-1/2 mt-5 lg:mt-0">
                    <h2 className="ff-Bree text-2xl ">Education</h2>
                    <p className="mt-5 ff-Bree">2021 - 2022</p>
                    <div className="Dot-Arrow !w-full"></div>
                    <div className="pl-5 border-l-[3px] border-l-[#DF924A] mt-5">
                      <h2 className="text-lg ff-Bree">12th Graduated</h2>
                      <p className="text-[#575353] mt-1">
                        Gramin se sec School <br /> (Ramayan) , Hisar , Haryana
                      </p>
                    </div>
                    <p className="mt-5 ff-Bree">2025 Present</p>
                    <div className="Dot-Arrow !w-full"></div>
                    <div className="pl-5 border-l-[3px] border-l-[#DF924A] mt-5">
                      <h2 className="text-lg ff-Bree">
                        BCA (First year) <br />{" "}
                        <span className="text-sm">
                          (Bachelor of Computer Applications)
                        </span>
                      </h2>
                      <p className="text-[#575353] mt-1">
                        Guru Jambheshwar University of Science and Technology
                        (Hisar){" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Skills  */}
              <div className="md:w-1/2 mt-6 md:mt-0" data-aos="fade-left">
                <h2 className="ff-Bree text-2xl ">Technical Skills</h2>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-5">
                  {Skills.map((value, index) => (
                    <div
                      className="border p-3 rounded-2xl hover:-translate-y-1 transition-all duration-200"
                      key={index}
                      data-aos="flip-up"
                      data-aos-delay = "700"
                    >
                      <div className="flex items-center  justify-between ">
                        <img
                          src={value.img.src}
                          alt={value.Skill}
                          className="w-8 h-8"
                        />
                        <h2 className="ff-Sansita text-[16px]">
                          {value.Skill}
                        </h2>
                        <div className="flex gap-1">
                          {Array(value.Level)
                            .fill()
                            .map((_, i) => (
                              <span
                                key={i}
                                className="w-[10px] h-[10px] rounded-full bg-[#DF924A]"
                              ></span>
                            ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact Me  */}
        <section ref={contactRef} className="mt-12.5">
          <div className="container mx-auto max-w-[1240px] px-3">
            <div className="flex md:flex-row flex-col gap-5">
              <div className="md:w-1/2" data-aos="fade-right">
                <img src={Contact.src} alt="Img" />
                <h2 className="ff-Sansita lg:text-7xl text-5xl mt-5">
                  Contact Me !
                </h2>
                <div className="flex items-center gap-5 mt-5">
                  <MailIcon />
                  <Link
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=mohitkhudia7@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-blue-500 hover:underline ff-Bree cursor-pointer"
                  >
                    mohitkhudia7@gmail.com
                  </Link>
                </div>
                <div className="flex items-center gap-5 mt-5">
                  <PhoneIcon />
                  <h2 className="text-black ff-Bree">8607208816</h2>
                </div>
                <div className="flex items-center gap-5 mt-5">
                  <LocationIcon />
                  <address className="text-black ff-Bree">
                    Hisar , Haryana , India
                  </address>
                </div>
                <p className="text-2xl ff-Bree mt-5 md:w-3/4">
                  Got a question or proposal, or just want to say hello? Go
                  ahead.
                </p>
              </div>
              <div className="md:w-1/2 mt-5 md:mt-0" data-aos="fade-left">
                <div className="max-w-xl mx-auto p-12 rounded-[50px] backdrop-blur-md bg-white/20">
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div>
                      <label htmlFor="Name" className="ff-Bree text-lg">
                        Your Name
                      </label>
                      <input
                        id="Name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        className="p-4 rounded-lg bg-[#F5F3F1] text-lg ff-Bree focus:outline-none block w-full mt-3.5"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="Email" className="ff-Bree text-lg">
                        Your Email
                      </label>
                      <input
                        id="Email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="p-4 rounded-lg bg-[#F5F3F1] text-lg ff-Bree focus:outline-none block w-full mt-3.5"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="Description" className="ff-Bree text-lg">
                        Description
                      </label>
                      <textarea
                        id="Description"
                        name="message"
                        placeholder="Description"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="p-4 rounded-lg bg-[#F5F3F1] text-lg ff-Bree focus:outline-none block w-full mt-3.5 resize-none"
                        required
                      ></textarea>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-black ff-Bree">
                        Select an option:
                      </label>
                      <div className="flex gap-6 text-black ff-Bree">
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="purpose"
                            value="hire"
                            checked={formData.purpose === "hire"}
                            onChange={handleChange}
                            className="accent-[#DF924A]"
                            required
                          />
                          For hire
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="purpose"
                            value="project"
                            checked={formData.purpose === "project"}
                            onChange={handleChange}
                            className="accent-[#DF924A]"
                            required
                          />
                          I have a project
                        </label>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="mt-4 bg-[#DF924A] text-[#F2D3B7] py-3.5 cursor-pointer rounded-[10px] font-semibold hover:opacity-90 transition-all"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
