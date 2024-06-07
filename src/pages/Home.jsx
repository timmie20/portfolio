import { lazy } from "react";
const Projects = lazy(() => import("../components/Projects"));
const DynamicIsland = lazy(() => import("../components/DynamicIsland"));
const Reviews = lazy(() => import("../components/Reviews"));
const Bento = lazy(() => import("../components/Bento"));
const Skills = lazy(() => import("../components/Skills"));
const ContactBanner = lazy(() => import("../components/ContactBanner"));

const Home = () => {
  return (
    <>
      <a
        href="https://geenie.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute"
      >
        <marquee bgcolor="#D14305" className="m-0 py-2">
          Hi there, I'm currently building a full stack web application called
          Genie, It's a social platform where users can make wishes like post
          while other active users grant them. click this banner for more info
          and register for waitlist 🚀 Thanks...
        </marquee>
      </a>
      <DynamicIsland />
      <Bento />
      <Skills />
      <Projects />
      <Reviews />
      <ContactBanner />
    </>
  );
};
export default Home;
