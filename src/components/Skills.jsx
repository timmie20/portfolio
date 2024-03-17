import React, { useContext } from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import tailwind from "../assets/tailwind.png";
import vue from "../assets/vue.png";
import react from "../assets/react.png";
import next from "../assets/next.png";
import redux from "../assets/redux.png";
import ts from "../assets/ts.png";
import git from "../assets/git.png";
import { AppContext } from "../context/AppContext";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const { setSkillsInView } = useContext(AppContext);

  const { ref: skillsSectionRef } = useInView({
    threshold: 1,
    onChange: (inView) => {
      setSkillsInView(inView);
    },
  });

  return (
    <>
      <section
        className="container mx-auto mb-0 px-4 md:mb-[200px] "
        ref={skillsSectionRef}
        id="skills"
      >
        <h2 className="text-center text-2xl md:text-3xl">Well versed in </h2>
        <div className="logos my-10">
          <div className="logo-slide">
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={js} alt="" />
            <img src={ts} alt="" />
            <img src={tailwind} alt="" />
            <img src={vue} alt="" />
            <img src={react} alt="" />
            <img src={redux} alt="" />
            <img src={next} alt="" />
            <img src={git} alt="" />
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={js} alt="" />
            <img src={ts} alt="" />
            <img src={tailwind} alt="" />
            <img src={vue} alt="" />
            <img src={react} alt="" />
            <img src={redux} alt="" />
            <img src={next} alt="" />
            <img src={git} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
