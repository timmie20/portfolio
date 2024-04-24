import React, { useContext } from "react";
import ProjectPreview from "./ProjectPreview";
import { data } from "../data";
import { AppContext } from "../context/AppContext";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const { setProjectsInView } = useContext(AppContext);
  const { projectData } = data;

  const { ref: projectSectionRef } = useInView({
    threshold: 0.3,
    onChange: (inView) => {
      setProjectsInView(inView);
      // console.log(inView);
    },
  });

  return (
    <>
      <section
        ref={projectSectionRef}
        id="projects"
        className="mx-auto mt-36 max-w-[1300px] px-4"
      >
        <h2 className="text-center text-2xl md:text-3xl">Projects</h2>

        <div className="mt-10 flex flex-col gap-16">
          {projectData.map((project) => (
            <ProjectPreview project={project} key={project.id} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
