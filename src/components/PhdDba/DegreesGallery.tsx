import lectureHall from "../../assets/Master’s Degrees.jpg";
import freestyle from "../../assets/Bachelor’s Degrees.jpg";
import conversation from "../../assets/Doctor of Philosophy.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

function DegreesGallery() {
  return (
    <motion.div
      className="sm:grid grid-cols-3 gap-[8%] my-[10vh] mx-[10vh]"
    >
      {/* Bachelor's Degrees */}
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Link to="/bachelors-degree">
          <div className="my-10 cursor-pointer shadow-custom rounded-2xl">
            <img
              src={freestyle}
              alt="Bachelor's Degrees"
              className="w-full sm:h-full rounded-t-2xl"
            />
            <div className="sm:h-[75px] h-[68px] bg-[#007FFF] w-full rounded-b-2xl">
              <h1 className="pt-[20px] font-extrabold text-white font-mono text-center md:text-[17px] text-[15px] leading-[1.3] tracking-wide">
                Bachelor's Degrees
              </h1>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Master's Degrees */}
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Link to="/master-degrees">
          <div className="my-10 cursor-pointer shadow-custom rounded-2xl">
            <img
              src={lectureHall}
              alt="Master’s Degrees"
              className="w-full sm:h-full rounded-t-2xl"
            />
            <div className="sm:h-[75px] h-[68px] bg-[#007FFF] w-full rounded-b-2xl">
              <h1 className="pt-[20px] font-extrabold text-white font-mono text-center md:text-[17px] text-[15px] leading-[1.3] tracking-wide">
                Master’s Degrees
              </h1>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* PhD / DBA */}
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Link to="/phd-dba">
          <div className="my-10 cursor-pointer shadow-custom rounded-2xl">
            <img
              src={conversation}
              alt="PhD and DBA"
              className="w-full sm:h-full rounded-t-2xl"
            />
            <div className="sm:h-[75px] h-[68px] bg-[#007FFF] w-full rounded-b-2xl">
              <h1 className="pt-[20px] font-extrabold text-white font-mono text-center md:text-[17px] text-[15px] leading-[1.3] tracking-wide">
                PhD / DBA
              </h1>
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default DegreesGallery;
