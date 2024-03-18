import React from "react";
import { Link } from "react-router-dom";
import { Link as HashLink } from "react-scroll";
import arrowDown from "../assets/arrow-down.svg";
import { useTypewriter } from "react-simple-typewriter";
import { FaMapLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Web", "React", "WebFlow"],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 100,
  });
  return (
    <>
      <motion.section
        className="container relative mx-auto mb-0 flex h-dvh flex-col items-center justify-center gap-6 p-4 md:mb-32 md:gap-0"
        id="hero"
      >
        <motion.div
          className="flex items-center gap-6 md:gap-8"
          initial={{ opacity: 0.3, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: "linear" }}
        >
          <Link to="#" className="text-sm">
            Resume
          </Link>
          <HashLink
            className="w-fit rounded-sm bg-customOrange px-5 py-2 text-sm font-medium text-white shadow-[3px_3px_0px_white] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
            to="contact"
            spy={true}
            smooth={true}
            offset={-170}
            duration={400}
          >
            Contact me
          </HashLink>
        </motion.div>
        <motion.h1
          className="text-[80px] font-semibold md:text-[150px] md:leading-snug lg:text-[200px] xl:text-[290px]"
          initial={{ opacity: 0.2, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <p className="text-sm font-normal leading-none md:text-base">
            Hi there 👋 , I'm{" "}
          </p>
          Timilehin
        </motion.h1>
        <motion.div
          className="relative flex size-16 cursor-pointer items-center justify-center rounded-full bg-white md:size-20"
          initial={{ scale: 0.1, y: 0 }}
          animate={{
            scale: 1,
            y: [0, 60, -90, -90, 5, 0],
          }}
          transition={{ duration: 1.7, ease: "backInOut" }}
        >
          <HashLink
            to="skills"
            spy={true}
            smooth={true}
            offset={-170}
            duration={400}
          >
            <span className="absolute right-0 top-2 size-3 animate-ping rounded-full bg-customOrange md:size-4"></span>
            <motion.p
              className="text-2xl md:text-3xl"
              initial={{ rotate: "45deg" }}
              whileHover={{ rotate: "-45deg" }}
              transition={{ duration: 0.6, ease: "backInOut" }}
            >
              🚀
            </motion.p>
          </HashLink>
        </motion.div>
        <div className="mt-7 flex flex-col items-center gap-4 text-wrap text-center">
          <p className="text-sm leading-none">2yrs + experience</p>
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
      </motion.section>
    </>
  );
};

export default Hero;
