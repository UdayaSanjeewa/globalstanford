import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-[#003478] h-[50px] flex justify-between items-center overflow-hidden">
      {/* name div */}
      <div className="flex-grow">
        <Link to={"/"}>
          <h1 className="hidden md:block text-white md:text-[20px] text-xs font-catamaran pl-[69px] font-[700]">
            Global Stanford Campus
          </h1>
        </Link>
      </div>
      {/* Hamburger menu for small screens */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      {/* Student and payment div */}
      <div
        className={`${menuOpen ? "flex" : "hidden"} md:flex gap-6 px-10 mr-10`}
      >
        <div>
          <Link
            to={"/lms-login"}
            className="text-white md:text-[14px] text-xs font-semibold font-nokora hover:text-red-400"
          >
            Students
          </Link>
        </div>
        <div>
          <Link
            to={"/payments"}
            className="text-white md:text-[14px] text-xs font-semibold font-nokora hover:text-rose-400"
          >
            Payments
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
