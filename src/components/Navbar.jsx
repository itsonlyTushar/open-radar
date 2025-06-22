import { Link, useLocation } from "react-router";
import { GoDotFill } from "react-icons/go";
import Logo from "./Logo";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full border border-b-black py-5 px-2 shadow-md flex items-center bg-[#f4f4f0] justify-between gap-2 z-50">
        <Logo textSize={"text-5xl"} />

        <ul className="hidden sm:hidden md:hidden lg:flex xl:flex gap-4">
          <Link to={"/home"}>
            <li
              className={`${
                location.pathname === "/home" &&
                "border  border-black rounded-md"
              } px-2 py-1`}
            >
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li
              className={`${
                location.pathname === "/about" &&
                "border  border-black rounded-md"
              } px-2 py-1`}
            >
              About
            </li>
          </Link>
          <Link to={"/contact"}>
            <li
              className={`${
                location.pathname === "/contact" &&
                "border  border-black rounded-md"
              } px-2 py-1`}
            >
              Contact
            </li>
          </Link>

          <Link to={"/learn"}>
            <li
              className={`bg-black text-white px-4 py-1 rounded-md flex items-center gap-2`}
            >
              <GoDotFill className="animate-pulse text-green-600" /> Learn How
            </li>
          </Link>
        </ul>

        {/* For mobile responsiveness  */}

        {isOpen && (
          <ul className="lg:hidden xl:hidden gap-4">
            <Link to={"/home"}>
              <li
                className={`${
                  location.pathname === "/home" &&
                  "border  border-black rounded-md"
                } px-2 py-1`}
              >
                Home
              </li>
            </Link>
            <Link to={"/about"}>
              <li
                className={`${
                  location.pathname === "/about" &&
                  "border  border-black rounded-md"
                } px-2 py-1`}
              >
                About
              </li>
            </Link>
            <Link to={"/contact"}>
              <li
                className={`${
                  location.pathname === "/contact" &&
                  "border  border-black rounded-md"
                } px-2 py-1`}
              >
                Contact
              </li>
            </Link>

            <Link to={"/learn"}>
              <li
                className={`bg-black text-white px-4 py-1 rounded-md flex items-center gap-2 mt-2`}
              >
                <GoDotFill className="animate-pulse text-green-600" /> Learn How
              </li>
            </Link>
          </ul>
        )}

          <button className="lg:hidden xl:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <RxCross2 className="text-2xl" /> : <RxHamburgerMenu className="text-2xl"/>}
        </button>
      </nav>
    </>
  );
}

export default Navbar;
