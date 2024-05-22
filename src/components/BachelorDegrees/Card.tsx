import img1 from "../../assets/Managment.jpg";
import img2 from "../../assets/Education.jpg";
import img3 from "../../assets/Nursing.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import { Link } from "react-router-dom";

// Card Responsived
function Card() {
  return (
    <motion.div
      // variants={fadeIn("up", 0.6)}
      // initial="hidden"
      // whileInView={"show"}
      // viewport={{ once: false, amount: 0.7 }}
      className="sm:grid grid-cols-3 gap-6 my-[10vh] mx-[10vh] "
    >
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
      >
        <Link to={"/bachelors-degree/bba-management"}>
          <div className="my-10">
            <a href="">
              <img src={img1} alt="" className="sm:h-[364px] w-full" />
              <div className="h-[68px] bg-[#007FFF] w-full">
                <h1 className="pt-[20px] font-extrabold text-white font-mono text-center md:text-[25px] text-[15px]">
                  BBA in Management
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
        viewport={{ once: false, amount: 0.5 }}
      >
        <Link to={"/bachelors-degree/bachelor-of-education"}>
          <div className="my-10">
            <a href="">
              <img src={img2} alt="" className="sm:h-[364px] w-full" />
              <div className="h-[68px] bg-[#007FFF] w-full">
                <h1 className="pt-[20px] font-extrabold text-white font-mono text-center md:text-[25px] text-[15px]">
                  Bachelor of Education
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
        viewport={{ once: false, amount: 0.5 }}
      >
        <Link to={"/bachelors-degree/bachelor-of-science-in-nursing"}>
          <div className="my-10">
            <a href="">
              <img src={img3} alt="" className="sm:h-[364px] w-full" />
              <div className="h-[68px] bg-[#007FFF] w-full">
                <h1 className="pt-[20px] font-extrabold text-white font-mono text-center md:text-[25px] text-[15px]">
                  Bachelor of Science In Nursing
                </h1>
              </div>
            </a>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default Card;
