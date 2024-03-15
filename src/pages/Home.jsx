import Hero from "../components/Hero";
import Projects from "../components/Projects";
import DynamicIsland from "../components/DynamicIsland";
import Reviews from "../components/Reviews";
import ContactBanner from "../components/ContactBanner";

const Home = () => {
  return (
    <>
      <div>
        <DynamicIsland />
        <Hero />
        <Projects />
        <Reviews />
        <ContactBanner />
      </div>
    </>
  );
};

export default Home;
