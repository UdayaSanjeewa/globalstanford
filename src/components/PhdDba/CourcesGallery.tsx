import lectureHall from "../../assets/Master’s Degrees.jpg";
import freestyle from "../../assets/Bachelor’s Degrees.jpg";
import conversation from "../../assets/Doctor of Philosophy.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

function CourcesGallery() {
  return (
    <motion.div
      // variants={fadeIn("up", 0.6)}
      // initial="hidden"
      // whileInView={"show"}
      // viewport={{ once: false, amount: 0.7 }}
      className="sm:grid grid-cols-3 gap-[8%] my-[10vh] mx-[10vh] "
    >
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.1 }}
      >
        <Link to={"/bachelors-degree"}>
          <div className="my-10 shadow-custom rounded-2xl">
            <a href="">
              <img src={freestyle} alt="" className="w-full sm:h-full rounded-t-2xl" />
              <div className="sm:h-[75px] h-[68px] bg-[#007FFF] w-full rounded-b-2xl">
                <h1 className="pt-[20px] font-extrabold text-white font-mono text-center md:text-[17px] text-[15px] leading-[1.3] tracking-wide">
                  Bachelor's Degrees
                </h1>
              </div>
            </a>
          </div>
        </Link>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.1 }}
      >
        <Link to={"/master-degrees"}>
          <div className="my-10 shadow-custom rounded-2xl">
            <a href="">
              <img src={lectureHall} width={100} height={100} alt="" className="w-full sm:h-full rounded-t-2xl" />
              <div className="sm:h-[75px] h-[68px] bg-[#007FFF] w-full rounded-b-2xl">
                <h1 className="pt-[20px] font-extrabold text-white font-mono text-center md:text-[17px] text-[15px] leading-[1.3] tracking-wide">
                  Master’s Degrees
                </h1>
              </div>
            </a>
          </div>
        </Link>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.1 }}
      >
        <Link to={"/phd-dba"}>
          <div className="my-10 shadow-custom rounded-2xl">
            <a href="">
              <img src={conversation} alt="" className="w-full sm:h-full rounded-t-2xl" />
              <div className="sm:h-[75px] h-[68px] bg-[#007FFF] w-full rounded-b-2xll">
                <h1 className="pt-[20px] font-extrabold text-white font-mono text-center md:text-[17px] text-[15px] leading-[1.3] tracking-wide">
                  PhD/DBA
                </h1>
              </div>
            </a>
          </div>
        </Link>
      </motion.div>
    </motion.div>
   
  );
}

export default CourcesGallery;
