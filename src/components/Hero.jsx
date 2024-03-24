import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as HashLink } from "react-scroll";
import { useTypewriter } from "react-simple-typewriter";
import { FaMapLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";
import ResumeOption from "../modal/ResumeOption";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text] = useTypewriter({
    words: ["Web", "React", "WebFlow"],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 100,
  });
  return (
    <>
      <main
        className="container mx-auto mb-0 flex h-dvh flex-col items-center justify-center gap-6 p-4 md:mb-32 md:gap-0"
        id="hero"
      >
        {isOpen && <ResumeOption setIsOpen={setIsOpen} />}
        <motion.div
          className="flex items-center gap-6 md:gap-8"
          initial={{ opacity: 0.3, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: "linear" }}
        >
          <Link to="#" className="text-sm" onClick={() => setIsOpen(true)}>
            Resume
          </Link>
          <HashLink
            className="primary-btn"
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
          className="text-[80px] font-semibold md:text-[150px] md:leading-snug lg:text-[200px] xl:text-[300px]"
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
            y: [0, 60, -90, -90, 10, 0],
          }}
          transition={{ duration: 2, ease: "backInOut" }}
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
        <p className="hidden text-sm md:mt-5 lg:block">{`function launch ( hover, click ) {
              hover + click
            }`}</p>
        <div className="flex flex-col items-center gap-5 text-wrap text-center md:mt-5">
          <p className="text-sm leading-none">3yrs experience</p>
          <h1 className="text-3xl md:text-[36px]">
            <span className="font-semibold text-customOrange">{text} </span>
            Developer
          </h1>
          <div className="flex items-center gap-2 ">
            <FaMapLocationDot size={20} color="white" />
            <p className="text-lg text-white/55 md:text-xl">Lagos, Nigeria</p>
          </div>
          <h3 className="text-base leading-normal md:w-[80%] md:text-[22px]">
            I leverage both code & no-code tools to build highly scaleable and
            interactive user interfaces and web applications
          </h3>
        </div>
      </main>
    </>
  );
};

export default Hero;
