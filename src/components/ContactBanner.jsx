import React from "react";
import arrowRight from "../assets/arrow-side.svg";
import insta from "../assets/insta.svg";
import twitter from "../assets/twitterx.svg";
import tiktok from "../assets/tiktok.svg";

const ContactBanner = () => {
  return (
    <section className="relative" id="contact">
      <div className="banner flex h-[621px]">
        <div className="first_cover "></div>
        {/* <div className="second_cover invisible"></div> */}
        <div className="third_cover "></div>
      </div>
      <div className="absolute inset-x-0 inset-y-[20%] flex h-fit flex-col items-center justify-center gap-5 border-[1px] border-white/10 bg-[#1B1B1B]/30 py-28">
        <h2 className="text-xl md:text-[32px]">Got a project idea?</h2>
        <div className="flex cursor-pointer items-center gap-2 rounded-full bg-customOrange px-10 py-5">
          <p>Let's Connect</p>
          <img src={arrowRight} alt="arrow right" />
        </div>
        <div className="social_links flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="32px"
            height="32px"
          >
            <path d="M 16.003906 4.0058594 C 13.080156 4.0058594 10.155 4.3490625 7.25 5.0390625 C 6.16 5.2990625 5.2990625 6.16 5.0390625 7.25 C 3.6590625 13.06 3.6590625 18.94 5.0390625 24.75 C 5.2990625 25.84 6.16 26.710938 7.25 26.960938 C 10.15 27.650938 13.08 28 16 28 C 18.92 28 21.85 27.650938 24.75 26.960938 C 25.84 26.700937 26.700937 25.84 26.960938 24.75 C 28.340937 18.94 28.340937 13.06 26.960938 7.25 C 26.710938 6.16 25.84 5.2990625 24.75 5.0390625 C 21.85 4.3490625 18.927656 4.0058594 16.003906 4.0058594 z M 10 11.060547 L 14 11.060547 C 14.3 11.060547 14.58 11.199688 14.75 11.429688 C 15.31 12.179688 16.079687 13.100547 16.929688 14.060547 C 17.759687 13.230547 18.53 12.359922 19.25 11.419922 C 19.57 11.009922 20.170078 10.94 20.580078 11.25 C 20.990078 11.57 21.06 12.170078 20.75 12.580078 C 19.96 13.590078 19.120938 14.539219 18.210938 15.449219 C 19.710938 17.029219 21.310469 18.499453 22.480469 19.189453 C 22.850469 19.409453 23.020156 19.84 22.910156 20.25 C 22.800156 20.66 22.42 20.939453 22 20.939453 L 17 20.939453 C 16.77 20.939453 16.549141 20.859219 16.369141 20.699219 C 15.579141 20.009219 14.929375 19.379297 14.359375 18.779297 C 13.529375 19.399297 12.619531 20.049297 11.519531 20.779297 C 11.359531 20.889297 11.18 20.939453 11 20.939453 C 10.7 20.939453 10.400703 20.799531 10.220703 20.519531 C 9.9307031 20.089531 10.040469 19.510703 10.480469 19.220703 C 11.490469 18.540703 12.339609 17.950859 13.099609 17.380859 C 12.519609 16.690859 11.980625 16.000234 11.390625 15.240234 C 10.780625 14.460234 10.109297 13.609609 9.2792969 12.599609 C 9.0392969 12.319609 8.9903906 11.929609 9.1503906 11.599609 C 9.3003906 11.269609 9.63 11.060547 10 11.060547 z M 11.980469 12.939453 C 12.300469 13.339453 12.589141 13.720078 12.869141 14.080078 C 14.219141 15.810078 15.299375 17.200547 17.359375 19.060547 L 19.220703 19.060547 C 17.090703 17.170547 14.789297 14.549453 13.529297 12.939453 L 11.980469 12.939453 z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="32px"
            height="32px"
          >
            <path d="M 16.003906 4.0058594 C 13.080156 4.0058594 10.155 4.3490625 7.25 5.0390625 C 6.16 5.2990625 5.2990625 6.16 5.0390625 7.25 C 3.6590625 13.06 3.6590625 18.94 5.0390625 24.75 C 5.2990625 25.84 6.16 26.710938 7.25 26.960938 C 10.15 27.650938 13.08 28 16 28 C 18.92 28 21.85 27.650938 24.75 26.960938 C 25.84 26.700937 26.700937 25.84 26.960938 24.75 C 28.340937 18.94 28.340937 13.06 26.960938 7.25 C 26.710938 6.16 25.84 5.2990625 24.75 5.0390625 C 21.85 4.3490625 18.927656 4.0058594 16.003906 4.0058594 z M 22.5 8 C 23.33 8 24 8.67 24 9.5 C 24 10.33 23.33 11 22.5 11 C 21.67 11 21 10.33 21 9.5 C 21 8.67 21.67 8 22.5 8 z M 16 10 C 19.31 10 22 12.69 22 16 C 22 19.31 19.31 22 16 22 C 12.69 22 10 19.31 10 16 C 10 12.69 12.69 10 16 10 z M 16 12 A 4 4 0 0 0 16 20 A 4 4 0 0 0 16 12 z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="32px"
            height="32px"
          >
            <path d="m26.96,7.25c-.25-1.09-1.12-1.95-2.21-2.21-5.8-1.38-11.69-1.38-17.5,0-1.09.26-1.95,1.12-2.21,2.21-1.38,5.81-1.38,11.69,0,17.5.26,1.09,1.12,1.96,2.21,2.21,2.9.69,5.83,1.04,8.75,1.04s5.85-.35,8.75-1.04c1.09-.26,1.95-1.12,2.21-2.21,1.38-5.81,1.38-11.69,0-17.5Zm-5.99,7.25h0c-1.1-.02-2.12-.39-2.93-1.02v6.02c0,2.21-1.8,4-4,4s-4-1.79-4-4,1.79-4,4-4c.55,0,1,.45,1,1s-.45,1-1,1c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2v-10c0-.55.45-1,1-1s1,.45,1,1c0,1.63,1.32,2.98,2.96,3,.55.01.99.46.98,1.01,0,.55-.45.99-1,.99Z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="32px"
            height="32px"
          >
            <path d="M 8.6425781 4 C 7.1835781 4 6 5.181625 6 6.640625 C 6 8.099625 7.182625 9.3085938 8.640625 9.3085938 C 10.098625 9.3085938 11.283203 8.099625 11.283203 6.640625 C 11.283203 5.182625 10.101578 4 8.6425781 4 z M 21.535156 11 C 19.316156 11 18.0465 12.160453 17.4375 13.314453 L 17.373047 13.314453 L 17.373047 11.310547 L 13 11.310547 L 13 26 L 17.556641 26 L 17.556641 18.728516 C 17.556641 16.812516 17.701266 14.960938 20.072266 14.960938 C 22.409266 14.960937 22.443359 17.145609 22.443359 18.849609 L 22.443359 26 L 26.994141 26 L 27 26 L 27 17.931641 C 27 13.983641 26.151156 11 21.535156 11 z M 6.3632812 11.310547 L 6.3632812 26 L 10.923828 26 L 10.923828 11.310547 L 6.3632812 11.310547 z" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
