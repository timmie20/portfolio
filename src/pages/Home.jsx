import React from "react";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BubbleText from "../components/BubbleText";

const Home = () => {
  const [text] = useTypewriter({
    words: ["INTERACTIVE", "RESPONSIVE"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 100,
  });
  return (
    <>
      <div className="container mx-auto flex min-h-[100dvh] flex-col items-center justify-center gap-16 px-4">
        <div className="flex items-center gap-8 text-sm text-[#767981]">
          <Link to="#" className="link_text">
            Projects
          </Link>
          <Link to="#" className="link_text">
            Contact
          </Link>
        </div>

        <BubbleText />

        <div className="flex flex-col items-center justify-between gap-7 md:flex-row">
          <p className="w-full text-center text-sm text-[#e5e6e7] md:w-[35%] md:text-left">
            WEB DEVELOPER |{" "}
            <span className="text-indigo-400">REACT DEVELOPER</span> | WEBFLOW .
            I leverage both code and no-code tools{" "}
          </p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex size-16 items-center justify-center rounded-full bg-white p-2 transition duration-300 ease-in-out hover:scale-125 md:size-24 lg:size-28">
              <span className="-rotate-45 cursor-default text-2xl md:text-4xl">
                🚀
              </span>
            </div>
            <p className="text-sm md:text-base">press to launch </p>
          </div>
          <p className="text-whiteLight w-full text-wrap text-center text-sm md:w-[35%] md:text-right">
            I build highly <span className="text-indigo-400">{text}</span>
            <span>
              <Cursor cursorBlinking cursorColor="inherit" />
            </span>
            user interfaces and web applications with effective S.E.O techniques
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
