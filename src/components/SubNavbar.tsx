import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function SubNavBar2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [convocationOpen, setConvocationOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="flex items-center justify-between w-[92%] mx-auto md:h-[71px] relative ">
        {/* logo */}
        <div className="hidden sm:block">
          <Logo />
        </div>

        {/* link container */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:items-center md:gap-[4vw] gap-12`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:gap-16 md:ml-[130px] mr-auto ml-[150px]">
            <li>
              <Link to={"/"}>
                <button className="relative w-20 h-10 overflow-hidden font-mono text-sm font-bold transition-all border border-none before:ease md:text-lg text-sky-800 // before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-rose-500 before:duration-300 hover:text-white hover:shadow-blue-900 rounded-xl hover:before:h-64 hover:before:-translate-y-32">
                  <span className="relative z-10">Home</span>
                </button>
              </Link>
            </li>
            {/* <li>
              <Link to={"/cources"}>
              <button className="relative w-20 h-10 overflow-hidden font-mono text-sm font-bold transition-all border border-none before:ease md:text-lg text-sky-800 // before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-rose-500 before:duration-300 hover:text-white hover:shadow-blue-900 rounded-xl hover:before:h-64 hover:before:-translate-y-32">
                  <span className="relative z-10">Courses</span>
                </button>
              </Link>
            </li> */}
            {/* Courses Dropdown */}
            <li className="relative group">
              {/* Courses Button */}
              <button className="relative w-24 h-10 overflow-hidden font-mono text-sm font-bold transition-all md:text-lg text-sky-800 rounded-xl hover:text-white hover:shadow-blue-900">
                <span className="relative z-10 flex items-center gap-1">
                  Courses
                  <svg
                    className="w-4 h-4 transition-transform group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>

              {/* Dropdown */}
              <ul className="absolute left-0 z-50 invisible w-48 mt-2 overflow-hidden transition-all duration-200 bg-white border border-gray-200 shadow-xl opacity-0 rounded-xl group-hover:visible group-hover:opacity-100">
                <li>
                  <Link to="/degrees">
                    <span className="block px-5 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-rose-100 hover:text-rose-600">
                      🎓 Degrees
                    </span>
                  </Link>
                </li>

                <li className="border-t border-gray-200">
                  <Link to="/diplomas">
                    <span className="block px-5 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-rose-100 hover:text-rose-600">
                      📜 Diplomas
                    </span>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to={"/about-us"}>
                <button className="relative w-20 h-10 overflow-hidden font-mono text-sm font-bold transition-all border border-none before:ease md:text-lg text-sky-800 // before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-rose-500 before:duration-300 hover:text-white hover:shadow-blue-900 rounded-xl hover:before:h-64 hover:before:-translate-y-32">
                  <span className="relative z-10">AboutUS</span>
                </button>
              </Link>
            </li>
            <li>
              <Link to={"/alumni"}>
                <button className="relative w-20 h-10 overflow-hidden font-mono text-sm font-bold transition-all border border-none before:ease md:text-lg text-sky-800 // before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-rose-500 before:duration-300 hover:text-white hover:shadow-blue-900 rounded-xl hover:before:h-64 hover:before:-translate-y-32">
                  <span className="relative z-10">Alumni</span>
                </button>
              </Link>
            </li>
            {/* Dropdown for Convocations */}
            <li className="relative">
              <button
                onClick={() => setConvocationOpen(!convocationOpen)}
                className="flex items-center gap-2 px-4 py-2 font-mono font-bold transition-colors text-sky-800 rounded-xl hover:text-white hover:bg-rose-500"
              >
                Convocations
                <svg
                  className={`w-4 h-4 transition-transform ${
                    convocationOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown menu */}
              {convocationOpen && (
                <ul className="absolute left-0 z-50 w-56 mt-2 overflow-hidden bg-white border border-gray-200 shadow-xl rounded-xl animate-dropdown">
                  <li>
                    <Link to="/convocation24">
                      <span className="block px-5 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-rose-100 hover:text-rose-600">
                        🎓 Convocation 2024
                      </span>
                    </Link>
                  </li>
                  <li className="border-t border-gray-200">
                    <Link to="/convocation25">
                      <span className="block px-5 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-rose-100 hover:text-rose-600">
                        🎓 Convocation 2025
                      </span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        {/* Menu button for mobile */}
        <div className="flex items-center justify-end w-full md:hidden">
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
