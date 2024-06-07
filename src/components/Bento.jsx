import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import proficPic from "../assets/profile-pic 4.png";
import { Link as HashLink } from "react-scroll";
import { BiLogoGithub } from "react-icons/bi";
import { FaLinkedin, FaTiktok, FaInstagram } from "react-icons/fa";
import { FaMapLocationDot, FaAnglesDown } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Notification from "./Notification";

const Bento = () => {
  return (
    <>
      <main
        className="mx-auto min-h-screen max-w-[1280px] px-4 py-12 text-zinc-50"
        id="hero"
      >
        <motion.div
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.06 }}
          className="grid grid-flow-dense grid-cols-12 gap-4"
        >
          <HeaderBlock />
          <SocialsBlock />
          <AboutBlock />
          <LocationBlock />
          <SendEmailBlock />
        </motion.div>
      </main>
    </>
  );
};

const Block = ({ className, ...props }) => {
  return (
    <motion.div
      variants={{
        initial: { scale: 0.5, y: 50, opacity: 0 },
        animate: { scale: 1, y: 0, opacity: 1 },
      }}
      transition={{ type: "spring", mass: 3, stiffness: 400, damping: 50 }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className,
      )}
      {...props}
    />
  );
};

const HeaderBlock = () => {
  return (
    <Block className="col-span-12 row-span-2 md:col-span-6">
      <div className="flex items-center gap-3">
        <img
          src={proficPic}
          alt="Profile picture"
          className="mb-4 size-20 rounded-full"
        />
        <h4 className="text-zinc-50">React Web Developer</h4>
      </div>

      <h1 className="text-4xl font-semibold leading-tight">
        Hi , I'm Timilehin,{" "}
        <span className="text-zinc-400">
          I build 😎 websites and web apps like this one.
        </span>
      </h1>

      <div className="mt-10 flex items-center justify-between">
        <motion.div
          className="grid size-12 cursor-pointer place-content-center rounded-full bg-zinc-500 transition-colors duration-300 ease-in-out hover:bg-zinc-300 hover:text-zinc-700 md:size-14"
          initial={{ scale: 0.3, x: 0 }}
          animate={{
            scale: 1,
            x: [0, 100, 100, 0],
          }}
          transition={{ duration: 1.4, ease: "backInOut" }}
        >
          <HashLink
            to="skills"
            spy={true}
            smooth={true}
            offset={-170}
            duration={400}
          >
            <FaAnglesDown />
          </HashLink>
        </motion.div>

        <a
          href="files/oluwatimilehin-resume.pdf"
          target="_blank"
          className="w-fit rounded-sm bg-customOrange px-5 py-2 text-sm font-medium text-zinc-50 shadow-[3px_3px_0px_white] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
        >
          My Resume
        </a>
      </div>
    </Block>
  );
};

const SocialsBlock = () => {
  return (
    <>
      <Block
        className="col-span-6 bg-green-500 md:col-span-3"
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
      >
        <Link
          to="https://github.com/timmie20"
          target="_blank"
          className="social_link"
        >
          <BiLogoGithub />
        </Link>
      </Block>

      <Block
        className="col-span-6 bg-blue-500 md:col-span-3"
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
      >
        <Link
          to="https://www.linkedin.com/in/oluwatimilehin-olayinka-038709246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          className="social_link"
        >
          <FaLinkedin />
        </Link>
      </Block>

      <Block
        className="col-span-6 bg-zinc-50 md:col-span-3"
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
      >
        <Link
          to="https://www.tiktok.com/@codeturner5?_t=8kkvDATYebl&_r=1"
          target="_blank"
          className="social_link text-black"
        >
          <FaTiktok />
        </Link>
      </Block>

      <Block
        className="col-span-6 bg-customOrange md:col-span-3"
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
      >
        <Link
          to="https://www.instagram.com/techread_?igsh=eG55MWplYWw0eDd1&utm_source=qr"
          target="_blank"
          className="social_link"
        >
          <FaInstagram />
        </Link>
      </Block>
    </>
  );
};

const AboutBlock = () => {
  return (
    <Block className="col-span-12 text-xl leading-snug md:text-2xl lg:text-[28px]">
      <p className="flex flex-col">
        <span className="text-zinc-300">
          With a three-year background, I specialize in utilizing React,
          Tailwind CSS, Framer Motion, and Firebase, while remaining adaptable
          to other frameworks. My approach involves the strategic integration of
          both code-based and no-code tools.
        </span>
        <span className="mt-3 text-base">
          Check out my TikTok page for helpful tech tips and web development
          content. Please follow and leave a comment if you enjoy my content.
        </span>
      </p>
    </Block>
  );
};

const LocationBlock = () => {
  return (
    <Block className="col-span-12 flex flex-col items-center justify-center gap-4 md:col-span-3">
      <FaMapLocationDot size={30} />
      <p className="text-center text-lg text-zinc-400">
        Based in Lagos, Nigeria
      </p>
    </Block>
  );
};

const SendEmailBlock = () => {
  const [email, setEmail] = useState("");
  const [messsage, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState("");

  const templateParams = {
    from_email: email,
    to_name: "Timilehin",
    message: messsage,
  };

  const serviceId = "service_cintsgo";
  const templateId = "template_jekhkfq";

  const handleSendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      });
      setLoading(false);
      setNotification("Email sent successfully, I'll get back to you ASAP");
    } catch (error) {
      setIsOpen(false);
      setNotification("Unable to send email at this time, try again later !");
      console.log(error.text);
    } finally {
      setMessage("");
    }
  };
  return (
    <>
      {notification !== "" && (
        <Notification
          notification={notification}
          setNotification={setNotification}
        />
      )}
      <Block className="col-span-12 md:col-span-9">
        <p className="mb-3 text-lg">
          Send me a short message or email
          <a
            className="text-sm text-blue-400 hover:underline"
            href="mailto:olutimilehinolayinka1234@gmail.com"
          >
            {" "}
            @ olutimilehinolayinka1234@gmail.com
          </a>
        </p>

        <form className="flex flex-col items-center gap-2 lg:flex-row lg:items-center">
          <input
            type="email"
            className="w-full rounded-md border-[1px] border-zinc-700 bg-transparent px-4 py-3 outline-none"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <textarea
            className="w-full resize-none rounded border-[1px] border-zinc-700 bg-transparent px-4 py-3 focus:outline-none"
            placeholder="Subject..."
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            onClick={handleSendEmail}
            className="flex items-center gap-2 whitespace-nowrap rounded bg-customOrange px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-300 hover:text-zinc-700 disabled:cursor-not-allowed "
            disabled={!messsage || !email}
          >
            <IoSend />
            {loading ? "Sending..." : "send"}
          </button>
        </form>
      </Block>
    </>
  );
};
export default Bento;
