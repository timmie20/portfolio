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
      <div className="container mx-auto flex min-h-[100dvh] flex-col items-center justify-center gap-16">
        <div className="flex items-center gap-8 text-sm text-[#767981]">
          <Link to="#" className="link_text">
            Projects
          </Link>
          <Link to="#" className="link_text">
            Contact
          </Link>
        </div>

        <BubbleText />

        <div className="flex items-center justify-between">
          <p className="w-[35%] text-left text-sm text-[#e5e6e7]">
            WEB DEVELOPER |{" "}
            <span className="text-indigo-400">REACT DEVELOPER</span> | WEBFLOW .
            I Leverage both code and no-code tools{" "}
          </p>
          <div className="flex size-28 items-center justify-center rounded-full bg-white p-2 transition duration-300 ease-in-out hover:scale-125">
            <span className="cursor-default text-4xl">🚀</span>
          </div>
          <p className="text-whiteLight w-[35%] text-wrap text-right text-sm">
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
