import React, { useContext, useState } from "react";
import github from "../assets/gitbud.svg";
import insta from "../assets/insta.svg";
import tiktok from "../assets/tiktok.svg";
import { AppContext } from "../context/AppContext";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import ContactModal from "../modal/ContactModal";
import Notification from "./Notification";
import { Link as HashLink } from "react-scroll";

const ContactBanner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notification, setNotification] = useState("");

  const { setContactInView } = useContext(AppContext);

  const { ref: contactSectionRef } = useInView({
    threshold: 0.7,
    onChange: (inView) => {
      setContactInView(inView);
    },
  });

  return (
    <>
      {notification !== "" && (
        <Notification
          notification={notification}
          setNotification={setNotification}
        />
      )}
      <section className="relative mt-32" id="contact" ref={contactSectionRef}>
        <div className="banner flex h-[621px]">
          <div className="first_cover "></div>
          <div className="third_cover "></div>
        </div>
        <div className="absolute inset-x-0 inset-y-[20%] flex h-fit flex-col items-center justify-center gap-10 border-[1px] border-white/10 bg-[#1B1B1B]/70 py-28">
          <h2 className="text-xl md:text-[32px]">Got a project idea?</h2>

          <HashLink
            to="hero"
            spy={true}
            smooth={true}
            offset={-170}
            duration={400}
            className="w-fit rounded-sm bg-customOrange px-10 py-3 font-medium text-white shadow-[3px_3px_0px_white] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
          >
            Let's Connect
          </HashLink>
        </div>
        <p className="my-10 text-center text-sm">copyright 2024, Timilehin</p>
      </section>
    </>
  );
};

export default ContactBanner;
