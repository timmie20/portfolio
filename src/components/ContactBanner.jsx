import React, { useContext, useState } from "react";
import github from "../assets/gitbud.svg";
import insta from "../assets/insta.svg";
import tiktok from "../assets/tiktok.svg";
import { AppContext } from "../context/AppContext";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import ContactModal from "../modal/ContactModal";

const ContactBanner = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { setContactInView } = useContext(AppContext);

  const { ref: contactSectionRef } = useInView({
    threshold: 0.7,
    onChange: (inView) => {
      setContactInView(inView);
    },
  });
  return (
    <>
      <section className="relative mt-32" id="contact" ref={contactSectionRef}>
        <div className="banner flex h-[621px]">
          <div className="first_cover "></div>
          <div className="third_cover "></div>
        </div>
        <div className="absolute inset-x-0 inset-y-[20%] flex h-fit flex-col items-center justify-center gap-10 border-[1px] border-white/10 bg-[#1B1B1B]/70 py-28">
          <h2 className="text-xl md:text-[32px]">Got a project idea?</h2>

          <button
            className="w-fit rounded-sm bg-customOrange px-10 py-3 font-medium text-white shadow-[3px_3px_0px_white] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
            onClick={() => setIsOpen(true)}
          >
            Let's Connect
          </button>

          {isOpen && <ContactModal setIsOpen={setIsOpen} />}

          <div className="social_links flex items-center gap-4">
            <Link to="https://github.com/timmie20" target="_blank">
              <img src={github} />
            </Link>
            <Link
              to="https://www.tiktok.com/@codeturner5?_t=8kkvDATYebl&_r=1"
              target="_blank"
            >
              <img src={tiktok} />
            </Link>
            <Link
              to="https://www.instagram.com/codeturner_?igsh=eG55MWplYWw0eDd1&utm_source=qr"
              target="_blank"
            >
              <img src={insta} />
            </Link>
            <Link
              to="https://www.linkedin.com/in/oluwatimilehin-olayinka-038709246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="32px"
                height="32px"
              >
                <path d="M 8.6425781 4 C 7.1835781 4 6 5.181625 6 6.640625 C 6 8.099625 7.182625 9.3085938 8.640625 9.3085938 C 10.098625 9.3085938 11.283203 8.099625 11.283203 6.640625 C 11.283203 5.182625 10.101578 4 8.6425781 4 z M 21.535156 11 C 19.316156 11 18.0465 12.160453 17.4375 13.314453 L 17.373047 13.314453 L 17.373047 11.310547 L 13 11.310547 L 13 26 L 17.556641 26 L 17.556641 18.728516 C 17.556641 16.812516 17.701266 14.960938 20.072266 14.960938 C 22.409266 14.960937 22.443359 17.145609 22.443359 18.849609 L 22.443359 26 L 26.994141 26 L 27 26 L 27 17.931641 C 27 13.983641 26.151156 11 21.535156 11 z M 6.3632812 11.310547 L 6.3632812 26 L 10.923828 26 L 10.923828 11.310547 L 6.3632812 11.310547 z" />
              </svg>
            </Link>
          </div>
        </div>
        <p className="my-10 text-center text-sm">copyright 2024, Timilehin</p>
      </section>
    </>
  );
};

export default ContactBanner;
