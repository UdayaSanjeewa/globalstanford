import AlumniImage from "./AlumniImage";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { Link } from "react-router-dom";

function AlumniDetails() {
  return (
    <div className="ml-[8%] mb-[5%] mr-[10%] sm:mr[10%] ">
      <h1
        className="font-serif  sm:text-[28px] mt-12 mb-6  text-[24px]  uppercase animate-typing overflow-hidden 
                whitespace-nowrap  pr-5 text-5xl text-sky-900 font-bold"
      >
        WELCOME TO GSC ALUMNI ASSOCIATION
      </h1>
      {/* new div */}

      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.2 }}
        className="p-6 font-semibold rounded-lg bg-gradient-to-r from-sky-400/30 via-Cyan-400/30 to-blue-400/30"
      >
        <p className="text-[16px] sm:text-[18px] font-catamaran">
          GSC isn't just a place you earn a degree, it's where you forge
          lifelong connections and launch a fulfilling career. As a graduate,
          you automatically become part of a powerful network – the GSC Alumni
          Community.
        </p>
        <br />
        <p className="text-[16px] sm:text-[18px] font-catamaran mt-5">
          Imagine a network of over 600 passionate individuals, all over the
          world, cheering you on. This isn't just a number, it's a global family
          of successful professionals, ready to connect, collaborate, and help
          you reach your goals. GSC Alumni Unit together with GSC Alumni
          Association offers you many benefits,
        </p>

        <li className="mt-8">
          Build friendships, share experiences, and find mentors who've walked
          your path.
        </li>
        <li className="mt-5">
          Our lecturers become your lifelong champions, offering guidance and
          advice to propel your professional development.
        </li>
        <li className="mt-5">
          Enjoy exclusive privileges on continuing your education at GSC.
        </li>
        <li className="mt-5">
          Mingle with fellow alumni and industry leaders, fostering valuable
          connections.
        </li>
        <li className="mt-5">You can join the referral program</li>

        <p className="text-[16px] sm:text-[18px] font-catamaran mt-5">
          This is your chance to tap into an invaluable professional resource –
          your GSC Alumni Community. Join us and take your success to the next
          level!
        </p>
      </motion.div>

      <div className="mt-6 sm:mt-16 ">
        <AlumniImage />
      </div>
      <div className="sm:px-0 px-[30%]">
        <Link 
        className=" text-white bg-cyan-700 px-2 py-2 sm:px-6 sm:py-3 rounded-[10px] font-extrabold text-[15px] sm:text-[18px] mt-3 sm:mt-1"
        to={"https://docs.google.com/forms/d/e/1FAIpQLScUzU_eTBr7VyyLpwtSX8Ux8j6fhNl-BxERxgkNJKjm7nKdeA/viewform?usp=sf_link"}
        >
          Alumni Register
        </Link>
      </div>
    </div>
  );
}

export default AlumniDetails;
