import React from "react";
import { Link } from "react-router-dom";
import { Link as HashLink } from "react-scroll";
import arrowDown from "../assets/arrow-down.svg";
import { useTypewriter } from "react-simple-typewriter";
import { FaMapLocationDot } from "react-icons/fa6";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Web", "React", "WebFlow"],
    loop: 1,
    typeSpeed: 150,
    deleteSpeed: 100,
  });
  return (
    <>
      <section
        className="container mx-auto mb-60 flex h-dvh flex-col items-center justify-center gap-6 p-4 md:mb-72 md:gap-0"
        id="hero"
      >
        <div className="flex items-center gap-6">
          <Link
            to="#"
            className="cursor-pointer rounded-sm border-[1px] border-customOrange px-4 py-2 text-sm font-normal text-white hover:scale-110 hover:duration-150 hover:ease-in-out"
          >
            resume
          </Link>
          <HashLink
            className="animate-pulse cursor-pointer rounded-sm bg-customOrange px-3 py-2 text-sm text-white hover:scale-110 hover:animate-none hover:duration-150 hover:ease-in-out"
            to="contact"
            spy={true}
            smooth={true}
            offset={-170}
            duration={400}
          >
            contact me
          </HashLink>
        </div>
        <h1 className="text-[75px] font-semibold md:text-[150px] md:leading-snug lg:text-[200px] xl:text-[300px]">
          <p className="text-sm font-normal leading-none md:text-base">
            Hi there 👋 , I'm{" "}
          </p>
          Timilehin
        </h1>
        <HashLink
          className=" flex size-14 animate-bounce cursor-pointer items-center justify-center rounded-full bg-white duration-300 ease-in hover:animate-none md:size-20"
          to="skills"
          spy={true}
          smooth={true}
          offset={-170}
          duration={400}
        >
          <img src={arrowDown} width={window.width < 768 ? 20 : 30} />
        </HashLink>
        <div className="mt-7 flex flex-col items-center gap-5 text-wrap text-center">
          <h1 className="text-3xl md:text-[36px]">
            <span className="font-semibold text-customOrange">{text} </span>
            Developer
          </h1>
          <div className="flex items-center gap-2 ">
            <FaMapLocationDot size={20} color="white" />
            <p className="text-lg text-white/55 md:text-xl">Lagos, Nigeria</p>
          </div>
          <h3 className="w-[70%] text-lg md:text-[22px]">
            I build websites that are fast, accessible, and user-friendly.
          </h3>
        </div>
      </section>
    </>
  );
};

export default Hero;
