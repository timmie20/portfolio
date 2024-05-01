import Projects from "../components/Projects";
import DynamicIsland from "../components/DynamicIsland";
import Reviews from "../components/Reviews";
import ContactBanner from "../components/ContactBanner";
import Skills from "../components/Skills";
import Bento from "../components/Bento";

const Home = () => {
  return (
    <>
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
