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
        <section className="container mx-auto mb-72 flex h-[100dvh] flex-col items-center justify-center gap-6 p-4 md:gap-0">
          <div className="flex gap-10">
            <Link to="/about" className="link_text">
              About
            </Link>
            <Link to="/contact" className="link_text">
              Contact
            </Link>
          </div>
          <h1 className="text-[75px] font-semibold md:text-[150px] md:leading-snug lg:text-[200px] xl:text-[300px]">
            Timilehin
          </h1>
          <div className=" flex size-14 cursor-pointer items-center justify-center rounded-full bg-white duration-300 ease-in hover:scale-125 md:size-20">
            <img src={arrowDown} width={window.width < 768 ? 20 : 30} />
          </div>
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

        <section className="h-[1380px] bg-customOrange">
          <div className="relative bottom-28 flex flex-col gap-16">
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