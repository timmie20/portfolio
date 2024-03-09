import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="container sticky top-0 mx-auto flex items-center justify-between p-6">
        <h4 className="text-xl font-semibold md:text-2xl">Timilehin</h4>
        <div className="hidden gap-8 font-medium md:flex md:items-center">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        {/* mobile nav view */}

        {!isMenuOpen ? (
          <div className="block md:hidden">
            <RiMenu3Fill onClick={handleToggle} size={26} />
          </div>
        ) : (
          <div className="space-y-2 md:hidden">
            <RiCloseFill size={30} onClick={handleToggle} />
            <div
              className={`top-100 absolute left-0 z-10 flex w-full flex-col items-center gap-2 `}
            >
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
