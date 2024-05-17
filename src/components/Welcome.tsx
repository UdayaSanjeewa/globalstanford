import welcomeImage from "../assets/welcome-img.jpg";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import { Link } from "react-router-dom";

function Welcome() {

  return (
    <div className="md:h-[90vh] h-[70vh] relative ">
      <img src={welcomeImage} className="object-cover w-full h-full" alt="" />
      {/* overLay */}
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-sky-800/40 via-sky-800/30 to-sky-800/40">
        <MainText />
      </div>
    </div>
  );
}

const MainText = () => {
  const [text, settext] = useState("");

  return (
    <div className="relative flex flex-col justify-center w-[85%] max-w-[800px] h-full items-center mx-auto gap-5 text-center px-5">
      <h1 className="max-w-screen-sm text-white title">Welcome to,</h1>

      <TypeAnimation
        sequence={["Our University", 1000, "Global Stanford Campus"]}
        speed={20}
        repeat={Infinity}
        className="title"
      />

      {/* search component */}
      <div className="flex flex-col w-full gap-2 md:justify-center md:flex-row md:items-stretch ">
        <input
          className="md:w-[60%] w-full px-[10px] py-2 md:py-4 bg-white placeholder:text-sm"
          type="text"
          value={text}
          placeholder="Type Your E-Mail Here"
          onChange={(e) => {
            settext(e.target.value);
          }}
        ></input>
        <Link 
        className=" blue-button"
        to={"https://docs.google.com/forms/d/e/1FAIpQLScr6QLFtYLDStjvVylN0LOEke5taAYWXmc6UVSKNnqOT9L_GA/viewform?usp=sf_link"}
        >
          <span className="flex items-center">
            Get Started
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              data-mirrorinrtl="true"
              className="text-white fill-current h-11 "
              data-name="ChevronRight"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
