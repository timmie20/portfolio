import React from "react";
import { Link } from "react-router-dom";
import arrowRight from "../assets/arrow-side.svg";

const ProjectPreview = ({ project }) => {
  return (
    <>
      <div className="container mx-auto flex h-[600px]">
        <aside className="flex w-[40%] flex-col justify-between rounded-l-xl  bg-[#1B1B1B] px-7 py-10">
          <div className="flex flex-col gap-4">
            <h3 className="font-medium">{project.projectName}</h3>
            <p className="opacity-50">{project.projectInfo}</p>
            <span className="flex items-center gap-2">
              <Link
                to={project.projectURL}
                target="_blank"
                className="underline"
              >
                Visit Website
              </Link>
              <img src={arrowRight} alt="" />
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
          frameBorder="0"
          allowFullScreen
          scrolling="no"
          className="w-full rounded-r-xl bg-white"
        ></iframe>
      </div>
    </>
  );
};

export default ProjectPreview;
