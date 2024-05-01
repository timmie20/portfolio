import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link as HashLink } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";

const DynamicIsland = () => {
  const [showComponent, setShowComponent] = useState(false);
  const { skillsInView, projectsInView, contactInView } =
    useContext(AppContext);

  useEffect(() => {
    const handleShowNav = () => {
      const viewportHeight = window.scrollY;
      setShowComponent(viewportHeight >= 565 ? true : false);
    };

    window.addEventListener("scroll", handleShowNav);
    handleShowNav();

    return () => window.removeEventListener("scroll", handleShowNav);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showComponent && (
          <motion.div
            className="island_links fixed inset-x-0 z-20 mx-auto flex w-[90%] max-w-[300px] items-center justify-center gap-4 rounded-xl border-[1px] border-white/10 bg-[#1B1B1B]/70 py-2 text-white/80 opacity-90 shadow-2xl backdrop-blur-lg md:gap-8"
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 20 }}
            transition={{ duration: 0.5, ease: "backInOut" }}
            exit={{ opacity: 0, y: 0 }}
          >
            <HashLink
              to="hero"
              spy={true}
              smooth={true}
              offset={-170}
              duration={400}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="23px"
                height="23px"
              >
                <path d="M28.447,11.583c-0.18-1.417-1.257-2.871-2.817-3.797c-1.425-0.832-2.82-1.674-4.167-2.487	c-1.407-0.85-2.763-1.667-4.045-2.41c-0.834-0.484-1.791-0.49-2.626-0.02c-1.409,0.794-2.904,1.682-4.46,2.604	C9.057,6.231,7.741,7.013,6.391,7.791c-1.572,0.92-2.66,2.38-2.84,3.812c-0.479,3.857-0.266,7.769,0.638,11.644	c0.502,1.978,2.587,4.092,4.572,4.623c2.402,0.592,4.82,0.888,7.239,0.888s4.837-0.296,7.239-0.888	c0.006-0.001,0.013-0.003,0.019-0.005c1.967-0.526,4.052-2.641,4.558-4.637C28.716,19.366,28.929,15.449,28.447,11.583z M20.115,25.303c-0.107,0.681-0.635,1.233-1.321,1.302c-1.856,0.188-3.714,0.189-5.567,0.004c-0.686-0.069-1.215-0.621-1.322-1.302	c-0.325-2.069-0.24-4.138,0.255-6.208c0.154-0.641,0.647-1.154,1.267-1.38c1.722-0.628,3.443-0.628,5.165,0	c0.62,0.226,1.113,0.739,1.267,1.38C20.355,21.167,20.44,23.235,20.115,25.303z" />
              </svg>
            </HashLink>

            <HashLink
              to="skills"
              spy={true}
              smooth={true}
              offset={-170}
              duration={500}
              className={`island_link ${skillsInView ? "active" : ""}`}
            >
              Skills
            </HashLink>

            <HashLink
              to="projects"
              spy={true}
              smooth={true}
              offset={-170}
              duration={500}
              className={`island_link ${projectsInView ? "active" : ""}`}
            >
              Projects
            </HashLink>

            {/* <HashLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-170}
              duration={500}
              className={`island_link ${contactInView ? "active" : ""}`}
            >
              Contact
            </HashLink> */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DynamicIsland;
