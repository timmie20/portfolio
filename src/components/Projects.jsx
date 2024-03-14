import React, { useContext } from "react";
import ProjectPreview from "./ProjectPreview";
import { data } from "../projectData";
import { AppContext } from "../context/AppContext";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const { current, setCurrent } = useContext(AppContext);

  const { ref: sectionRef } = useInView({
    onChange: (inView) => {
      setCurrent(inView);
      // console.log(inView);
    },
  });

  return (
    <>
      <section ref={sectionRef} id="projects" className="relative">
        <div className="h-[170dvh] w-full bg-customOrange"></div>

        <div className="container absolute inset-x-0 -top-28 mx-auto flex flex-col gap-16 px-4">
          {data.map((project) => (
            <ProjectPreview project={project} key={project.id} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
