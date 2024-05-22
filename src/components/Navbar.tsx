import { Link } from "react-router-dom";
import { useState } from "react";
import gcsLogo from "../assets/gcs-logo.png"; // Update the path to your GCS logo

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-[#003478] h-[50px] flex justify-between items-center overflow-hidden">
      {/* name div */}
      <div className={`${menuOpen ? "hidden" : "block"}`} id="x">
        <Link to={"/"}>
          {/* logo Image*/}
         <div className="flex justify-center items-center">
         <img src={gcsLogo} className="h-8 w-8 block md:hidden " alt="" />
         {/* logo Name */}
          <h1 className="text-white md:text-[20px] text-xs font-mono pl-[10px] sm:pl-[69] font-[700]">
            Global Stanford Campus
          </h1>
         </div>
        </Link>
      </div>
      {/* Hamburger menu for small screens */}
      <div className="md:hidden mr-4">
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
