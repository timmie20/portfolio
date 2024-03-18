import React, { useContext, useEffect, useRef } from "react";
import { AppContext } from "../context/AppContext";
import { useInView } from "react-intersection-observer";
import { data } from "../data";
import { motion } from "framer-motion";

const Skills = () => {
  const { setSkillsInView } = useContext(AppContext);
  const { skillObj } = data;

  const { ref: skillsSectionRef } = useInView({
    threshold: 1,
    onChange: (inView) => {
      setSkillsInView(inView);
    },
  });

  // const skillsSectionRef = useRef(null);
  // const isInView = useInView(skillsSectionRef);

  // useEffect(() => {
  //   if (isInView) {
  //     // setSkillsInView(isInView);
  //     console.log(isInView);
  //   }
  // }, [isInView]);

  return (
    <>
      <section
        className="container mx-auto mb-0 px-4 md:mb-[100px] "
        ref={skillsSectionRef}
        id="skills"
      >
        <h2 className="text-center text-2xl md:text-3xl">Well-versed in</h2>
        <div className="mx-auto mt-20 flex flex-wrap items-center justify-center gap-5 md:w-[80%]">
          {skillObj.map((skill) =>
            skill.id % 2 ? (
              <motion.div
                key={skill.id}
                // initial={{ y: 30 }}
                // whileInView={{ y: [30, -30, 0] }}
                // transition={{ duration: 1.4, ease: "backInOut" }}
              >
                <img src={skill.imgPath} />
              </motion.div>
            ) : (
              <motion.div
                key={skill.id}
                // initial={{ y: -30 }}
                // whileInView={{ y: [-30, 30, 0] }}
                // transition={{ duration: 1.4, ease: "backInOut" }}
              >
                <img src={skill.imgPath} />
              </motion.div>
            ),
          )}
        </div>
      </section>
    </>
  );
};

export default Skills;
