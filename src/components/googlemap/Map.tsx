
import { FC } from "react";
import Image from "../../assets/map.png"; // Update the path to your TV image
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const map: FC = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse justify-between max-w-[1100px] gap-3 md:mx-auto items-center  pb-[30px] md:mt-5 m-2 ">
    <div className="relative md:w-[48%] ">
        <img src={Image} alt="" className=" h-full w-full mx-auto " />
      </div>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="md:w-[52%] w-full text-center md:text-left pt-4 px-10 md:items-center md:p-5 "
      >
        <h1
          className="pb-3 title2 md:text-xl  animate-typingfont-inter text-[45px]  md:mt-[13px] uppercase animate-typing overflow-hidden 
                whitespace-nowrap  pr-5  text-sky-900 font-bold"
        >
          Find our Location
        </h1>
        <p className="subtitle">
          From the heart of Stanford to the corners of Nugegoda, Ampara, and
          Badulla, our global footprint connects minds worldwide.
        </p>
      </motion.div>
    </div>
  );
};

export default map;
