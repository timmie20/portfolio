import Hero from "../components/Hero";
import Projects from "../components/Projects";
import DynamicIsland from "../components/DynamicIsland";
import Reviews from "../components/Reviews";
import ContactBanner from "../components/ContactBanner";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <>
      <div>
        <DynamicIsland />
        <Hero />
        <Skills />
        <Projects />
        <Reviews />
        <ContactBanner />
      </div>
    </>
  );
};
export default Home;
