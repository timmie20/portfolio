import React from "react";
import profileAvatar from "../assets/Frame 24.png";
import { FaQuoteLeft } from "react-icons/fa6";

const Reviews = () => {
  return (
    <>
      <div className="container mx-auto mt-32">
        <div className="mx-5 flex flex-col items-center gap-3 rounded-[15px] bg-[#1B1B1B] px-6 py-4 text-center md:gap-5 md:py-10">
          <FaQuoteLeft size={40} className="text-white" />
          <h2 className="text-xl font-normal md:w-3/5 md:text-2xl lg:text-3xl">
            “Timi is hands down one of the best front end developer I’ve ever
            worked with, sweats the small details, and always delivers”
          </h2>
          <h3 className="text-base font-normal text-white/65 md:text-[18px] lg:text-xl">
            Jeffery-IK, web Designer
          </h3>
          <img src={profileAvatar} alt="profile avatar image" />
        </div>
      </div>
    </>
  );
};

export default Reviews;
