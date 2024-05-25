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
          <ul className="flex flex-col md:flex-row md:items-center gap-16 md:ml-[130px] mr-auto">
            <li>
              <Link to={"/"}>
                <button className="before:ease relative md:text-lg text-sm h-10 w-20 overflow-hidden border border-none font-mono font-bold text-sky-800 
                 transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45
                  before:bg-rose-500 before:duration-300 hover:text-white hover:shadow-blue-900 rounded-xl hover:before:h-64 hover:before:-translate-y-32">
                  <span className="relative z-10">Home</span>
                </button>
              </Link>
            </li>
            <li>
              <Link to={"/cources"}>
              <button className="before:ease relative md:text-lg text-sm h-10 w-20 overflow-hidden border border-none font-mono font-bold text-sky-800 
                 transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45
                  before:bg-rose-500 before:duration-300 hover:text-white hover:shadow-blue-900 rounded-xl hover:before:h-64 hover:before:-translate-y-32">
                  <span className="relative z-10">Courses</span>
                </button>
              </Link>
            </li>
            <li>
              <Link
                to={"/about-us"}
                
              >
                 <button className="before:ease relative md:text-lg text-sm h-10 w-20 overflow-hidden border border-none font-mono font-bold text-sky-800 
                 transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45
                  before:bg-rose-500 before:duration-300 hover:text-white hover:shadow-blue-900 rounded-xl hover:before:h-64 hover:before:-translate-y-32">
                  <span className="relative z-10">AboutUS</span>
                </button>
              </Link>
            </li>
            <li>
              <Link
                to={"/alumni"}
                
              >
                <button className="before:ease relative md:text-lg text-sm h-10 w-20 overflow-hidden border border-none font-mono font-bold text-sky-800 
                 transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45
                  before:bg-rose-500 before:duration-300 hover:text-white hover:shadow-blue-900 rounded-xl hover:before:h-64 hover:before:-translate-y-32">
                  <span className="relative z-10">Alumni</span>
                </button>
              </Link>
            </li>
          </ul>
        </div>

        {/* Menu button for mobile */}
        <div className="md:hidden flex justify-end items-center w-full">
          <button
            onClick={toggleMenu}
            className={`text-gray-800 focus:outline-none ${
              menuOpen ? "fixed top-[50px] right-[10px]" : ""
            }`}
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