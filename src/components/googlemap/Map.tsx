import { FC } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const map: FC = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse justify-between max-w-[1100px] gap-3 md:mx-auto items-center  pb-[30px] md:mt-5 m-2 ">
      <div className="relative md:w-[48%] ">
        <iframe
          className="w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.1779672595894!2d79.890089!3d6.869266887871538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b7f14e461ff%3A0xfd71a95c18a59b7d!2sGlobal%20Stanford%20Campus!5e0!3m2!1sen!2slk!4v1716571926992!5m2!1sen!2slk"
        ></iframe>
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
