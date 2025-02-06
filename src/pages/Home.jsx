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
      <DynamicIsland />
      <Bento remove={false} />
      <Skills />
      <Projects />
      <Reviews />
      <ContactBanner />
    </>
  );
};
export default Home;
