import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

// Content
const con1 =
  "Since GSC’s founding in 2018, GSC has established itself as a prominent leader in Sri Lanka's private sector higher education landscape. We offer UGC-recognized diplomas and degree programs that are internationally certified. Each course is designed according to standards that meet the highest quality of such an educational program.";
const con2 =
  "Top-up degrees are essentially the final year of an undergraduate degree program. They are designed for students who already have some college-level qualifications, typically a Higher National Diploma (HND) or a foundation degree";
const con3 =
  "You can register by calling the number below and contacting an officer on our campus.";
const con4 =
  "The Affordable Course Fee along with Flexible Payments Plans (Monthly Payment Plan)";
const con5 = (
  <>
    <p>
      How are the Lectures held? This BED program is unique in its delivery
      style. It focuses on assignments and a thesis, eliminating the stress of
      traditional exams. Assignments likely test your understanding of the
      course material through written work, case studies, or projects.{" "}
    </p>
    <ul className="ml-10">
      <li>- Online Learning</li>
      <li>- Case studies</li>
      <li>- Readings on recommended books.</li>
      <li>- Weekend Lectures.</li>
    </ul>
    <p>
      A qualified supervisory panel is available for the research supervision.
      The thesis provides an opportunity to delve deeper into a specific
      education topic through research and writing
    </p>
  </>
);
const con6 =
  "Global Stanford Campus will take the Responsible to Get our Students the UGC Verifycation letter";

//sectionFAQ

const SectionFAQ = () => {
  const [text, settext] = useState("");
  return (
    <div className="mb-7">
      <motion.h1
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="w-full md:mb-[-20px] text-center title3 max-w-[1100px] mx-auto md:py-[70px] px-[30px] pt-3 mb-1 "
      >
        Frequently Asked Questions
      </motion.h1>
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.4 }}
        className="mb-1"
      >
        <FAQ FAQ="What is Global Stanford Campus ?" Cont={con1} />
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.5 }}
        className="mb-1"
      >
        <FAQ FAQ="What are Top-Up Degrees ?" Cont={con2} />
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.5 }}
        className="mb-1"
      >
        <FAQ FAQ="How to Register ?" Cont={con3} />
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.5 }}
        className="mb-1"
      >
        <FAQ FAQ="What About the Payment?" Cont={con4} />
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.5 }}
        className="mb-1"
      >
        <FAQ FAQ="How the Lectures are helding ?" Cont={con5} />
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.5 }}
        className="mb-1"
      >
        <FAQ FAQ="How to Get The UGC Letter" Cont={con6} />
      </motion.div>
      <div>
        <div className="pb-4 m-2 text-xl text-center text-[#003478] font-bold pt-7 font-mono md:text-3xl">
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
            to={
              "https://docs.google.com/forms/d/e/1FAIpQLScr6QLFtYLDStjvVylN0LOEke5taAYWXmc6UVSKNnqOT9L_GA/viewform?usp=sf_link"
            }
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
            <div className="list-item-title font-serif">{props.FAQ}</div>
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
              className={`grid overflow-hidden transition-all duration-300 ease-in-out text-black text-sm bg-gradient-to-r from-blue-600/90 to-sky-600/90 rounded-b-md mx-4 pl-2 py-2 ${
                accordionOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden text-white">{props.Cont}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SectionFAQ;
