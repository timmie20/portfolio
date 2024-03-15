import React, { useContext } from "react";
import ProjectPreview from "./ProjectPreview";
import { data } from "../projectData";
import { AppContext } from "../context/AppContext";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const { setProjectsInView } = useContext(AppContext);

  const { ref: projectSectionRef } = useInView({
    threshold: 0.4,
    onChange: (inView) => {
      setProjectsInView(inView);
      // console.log(inView);
    },
  });

  return (
    <>
      <section ref={projectSectionRef} id="projects" className=" relative">
        <div className="h-[170dvh] w-full bg-customOrange"></div>

        <div className="container absolute inset-x-0 -top-32 mx-auto flex flex-col gap-16 px-4">
          {data.map((project) => (
            <ProjectPreview project={project} key={project.id} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
