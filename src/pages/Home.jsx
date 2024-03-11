import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import arrowDown from "../assets/arrow-down.svg";
import { Link } from "react-router-dom";
import ProjectPreview from "../components/ProjectPreview";
import { data } from "../projectData";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Web", "React", "WebFlow"],
    loop: 1,
    typeSpeed: 150,
    deleteSpeed: 100,
  });
  return (
    <>
      <div className="">
        <section className="container mx-auto mb-52 flex h-dvh flex-col items-center justify-center gap-6 p-4 md:mb-72 md:gap-0">
          <div className="flex items-center gap-6">
            <Link
              to="/about"
              className="cursor-pointer font-normal text-gray-300 transition duration-300 ease-in-out hover:text-white"
            >
              about
            </Link>
            <div className="rounded-sm bg-customOrange px-3 py-2 text-sm text-white">
              <Link to="/contact">contact me</Link>
            </div>
          </div>
          <h1 className="text-[75px] font-semibold md:text-[150px] md:leading-snug lg:text-[200px] xl:text-[300px]">
            Timilehin
          </h1>
          <Link
            className=" flex size-14 animate-bounce cursor-pointer items-center justify-center rounded-full bg-white duration-300 ease-in hover:animate-none md:size-20"
            to="#projects"
          >
            <img src={arrowDown} width={window.width < 768 ? 20 : 30} />
          </Link>
          <div className="mt-7 flex flex-col items-center gap-3 text-wrap text-center">
            <h1 className="text-3xl md:text-[36px]">
              <span className="font-semibold text-customOrange">{text} </span>
              Developer
            </h1>
            <h2 className="text-2xl opacity-50 md:text-[28px]">
              Based in Lagos, Nigeria
            </h2>
            <h3 className="text-lg md:text-[22px]">
              I build websites that are fast, accessible, and user-friendly.
            </h3>
          </div>
        </section>

        <section className="h-[1280px] bg-customOrange" id="projects">
          <div className="relative bottom-32 flex flex-col gap-16">
            {data.map((project) => (
              <ProjectPreview project={project} key={project.id} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
