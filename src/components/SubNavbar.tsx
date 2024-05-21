import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function SubNavBar2() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="flex items-center justify-between w-[92%] mx-auto md:h-[71px] relative ">
        {/* logo */}
        <div className="sm:block hidden">
          <Logo />
        </div>

        {/* link container */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:items-center md:gap-[4vw] gap-12`}
        >
          <ul className="flex flex-col md:flex-row md:items-center gap-5 ml-[-30px]">
            <li>
              <Link
                to={"/"}
                className="text-sky-800 md:text-base text-sm px-8 py-2 font-bold rounded cursor-pointer hover:text-white hover:bg-gradient-to-r from-red-500 hover:to-rose-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/cources"}
                className="text-sky-800 md:text-base text-sm px-8 py-2 font-bold rounded cursor-pointer hover:text-white hover:bg-gradient-to-r from-red-500 hover:to-rose-500"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to={"/about-us"}
                className="text-sky-800 md:text-base text-sm px-8 py-2 font-bold rounded cursor-pointer hover:text-white hover:bg-gradient-to-r from-red-500 hover:to-rose-500"
              >
                AboutUs
              </Link>
            </li>
            <li>
              <Link
                to={"/alumni"}
                className="text-sky-800 md:text-base text-sm px-8 py-2 font-bold rounded cursor-pointer hover:text-white hover:bg-gradient-to-r from-red-500 hover:to-rose-500"
              >
                Alumni
              </Link>
            </li>
          </ul>
        </div>

        {/* Menu button for mobile */}
        <div className="md:hidden flex justify-end items-center w-full">
          <button
            onClick={toggleMenu}
            className={`text-gray-800 focus:outline-none ${menuOpen ? "fixed top-[50px] right-[10px]" : ""}`}
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
