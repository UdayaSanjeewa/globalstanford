import { useState } from "react";
import { Link } from "react-router-dom";

//sectionFAQ

const SectionFAQ = () => {
  const [text, settext] = useState("");
  return (
    <div className="mb-7">
      <h1 className="w-full mb-6 text-center title3 max-w-[1100px] mx-auto md:py-[70px] px-[30px] pt-3 ">
        Frequently Asked Questions
      </h1>
      <div className="mb-2">
        <FAQ FAQ="What is Global Stanford Campus ?" />
      </div>
      <div className="mb-2">
        <FAQ FAQ="What are Top-Up Degrees ?" />
      </div>
      <div className="mb-2">
        <FAQ FAQ="How to Register ?" />
      </div>
      <div className="mb-2">
        <FAQ FAQ="What About the Payment?" />
      </div>
      <div className="mb-2">
        <FAQ FAQ="How the Lectures are helding ?" />
      </div>
      <div className="mb-2">
        <FAQ FAQ="How to Get The UGC Letter" />
      </div>
      <div>
        <div className="pb-1 m-2 text-xl text-center text-white pt-7">
          Ready to start? Enter your email to get more details your Degree
        </div>
        <div className="flex flex-col w-full gap-2 md:justify-center md:flex-row md:items-stretch ">
          <input
            className="md:w-[60%] w-100 px-[10px] py-2 md:py-4 bg-white placeholder:text-sm mx-3"
            type="text"
            value={text}
            placeholder="Type your E-mail here"
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
    </div>
  );
};

const FAQ = (props: any) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="">
      <div>
        <ul className="w-[75%] mx-auto">
          <li
            className="cursor-pointer list-item"
            onClick={() => setAccordionOpen(!accordionOpen)}
          >
            <div className="list-item-title">{props.FAQ}</div>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="list-item-icon"
              data-name="Plus"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                fill="currentColor"
              />
            </svg>
          </li>
          <li>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm bg-gradient-to-r from-blue-700/90 to-sky-700/90 rounded-b-md mx-4 text-center ${
                accordionOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                quis ullam suscipit similique magni porro corporis, inventore
                debitis unde. Quasi autem rerum explicabo labore ex excepturi
                corporis tenetur officiis culpa? Veritatis minus porro, soluta
                alias, dignissimos error facere praesentium itaque vel ducimus
                voluptatibus assumenda odio aliquam earum! Placeat neque modi
                sunt non maiores rerum omnis labore! Doloribus alias nostrum
                distinctio.
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SectionFAQ;
