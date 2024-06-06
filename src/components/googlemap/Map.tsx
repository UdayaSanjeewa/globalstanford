import { FC } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { Carousel } from "react-responsive-carousel";

const map: FC = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse justify-between max-w-[1100px] gap-3 md:mx-auto items-center  pb-[30px] md:mt-5 m-2 ">
      <motion.div
        variants={fadeIn("right", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col ml-[1%] mt-[5%] mr-[1%] sm:mr[10%] justify-items-center sm:px-[10%] "
      >
        <Carousel className="sm:h-[518] sm:w-[778]">
          <div className="relative h-[200px] ">
            <iframe
              className="object-cover w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.1779672595894!2d79.890089!3d6.869266887871538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b7f14e461ff%3A0xfd71a95c18a59b7d!2sGlobal%20Stanford%20Campus!5e0!3m2!1sen!2slk!4v1716571926992!5m2!1sen!2slk"
            >
              {" "}
            </iframe>
            <span className="pb-2 mb-10">Nugegoda</span>
          </div>
          <div className="relative h-[200px] ">
            <iframe
              className="object-cover w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.452608816417!2d81.67594799999999!3d7.3029389999999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae519ebe92dd37b%3A0xe3f59710f7f13702!2sGlobal%20Stanford%20Campus%20-Ampara.!5e0!3m2!1sen!2slk!4v1716643394936!5m2!1sen!2slk"
            ></iframe>
          </div>
          <div className="relative h-[200px] ">
            <iframe
              className="object-cover w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.153750967582!2d81.0602806!3d6.991164899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae4638715cdb867%3A0xf3408ab7b439ebb9!2sGlobal%20Stanford%20Campus!5e0!3m2!1sen!2slk!4v1716622298196!5m2!1sen!2slk"
            ></iframe>
          </div>
          <div className="relative h-[200px] ">
            <iframe
              className="object-cover w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.293180282116!2d80.5457624!3d5.9542835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae138d29b00f705%3A0x6fe693da78f44ce9!2sDMCI%20Pre%20School!5e0!3m2!1sen!2slk!4v1716622390674!5m2!1sen!2slk"
            ></iframe>
          </div>
        </Carousel>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.4 }}
        className="md:w-[52%] w-full text-center md:text-left pt-4 px-10 md:items-center md:p-5 "
      >
        <h1
          className="pb-3  md:text-xl  animate-typingfont-inter md:text-[30px] text-[17.5px]  md:mt-[13px] uppercase animate-typing overflow-hidden 
                whitespace-nowrap  pr-5  text-sky-900 font-bold  font-serif text-center"
        >
          Find our Locations
        </h1>
        <p className="subtitle font-serif ">
          From the heart of Stanford to the corners of <br />
          <span className="font-bold text-rose-900"> Nugegoda,</span> <br />
          <span className="font-bold text-rose-900">Ampara,</span>
          <br />
          <span className="font-bold text-rose-900">Matara ,</span>
          <br />
          <span className="font-bold text-rose-900">Badulla.</span> <br /> Our
          global footprint connects minds worldwide.
        </p>
      </motion.div>
    </div>
  );
};

export default map;
