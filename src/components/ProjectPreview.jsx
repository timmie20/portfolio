import React from "react";
import { Link } from "react-router-dom";
import arrowRight from "../assets/arrow-side.svg";

const ProjectPreview = ({ project }) => {
  return (
    <>
      <div className="container mx-auto flex h-fit flex-col-reverse px-5 md:flex-row">
        <aside className="flex w-full flex-col gap-6 rounded-b-xl bg-[#1B1B1B] p-4 md:w-[40%] md:gap-16 md:rounded-l-xl md:px-7 md:py-10 lg:gap-32">
          <div className="flex flex-col gap-4">
            <h3 className="font-medium">{project.projectName}</h3>
            <p className="opacity-50">{project.projectInfo}</p>
            <span className="flex items-center gap-2">
              <Link
                to={project.projectURL}
                target="_blank"
                className="text-sm underline md:text-base"
              >
                Visit Website
              </Link>
              <img
                src={arrowRight}
                alt="arrow link to webpage"
                className="w-4 md:w-5"
              />
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {project.techUsed.map((tech) => (
              <div
                key={tech.name}
                className="flex cursor-pointer items-center gap-2 rounded-full bg-gray-500 px-4 py-1"
              >
                <img src={tech.imgURL} />
                <p className="text-sm">{tech.name}</p>
              </div>
            ))}
          </div>
        </aside>
        <iframe
          src={project.projectURL}
          title="Preview"
          frameBorder="0"
          allowFullScreen
          scrolling="no"
          className="w-full bg-white md:rounded-r-xl"
        ></iframe>
      </div>
    </>
  );
};

export default ProjectPreview;
