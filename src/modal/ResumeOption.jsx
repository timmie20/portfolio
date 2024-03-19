import React from "react";
import { Link } from "react-router-dom";

const ResumeOption = ({ setIsOpen }) => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex h-full flex-col items-center justify-center gap-5 overflow-y-scroll bg-slate-900/20 p-8 backdrop-blur">
        <div className="flex items-center gap-5">
          <button>
            <a href="#" className="primary-btn">
              View resume
            </a>
          </button>
          <button className="primary-btn">
            <a href="#">Download Resume</a>
          </button>
        </div>
        <p className="cursor-pointer text-lg" onClick={() => setIsOpen(false)}>
          Cancel
        </p>
      </div>
    </>
  );
};

export default ResumeOption;
