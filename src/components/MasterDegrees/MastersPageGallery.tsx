import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Master from "../../assets/Master.jpg";
import Banking from "../../assets/MBA Banking.png";
import Management from "../../assets/MBA Management.jpg";
import { Link } from "react-router-dom";

function MastersPageGallery() {
  return (
    <motion.div
      className="sm:grid grid-cols-3 gap-6 my-[10vh] mx-[10vh]"
    >
      {/* MBA in Management */}
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
      >
        <Link to={"/master-degrees/mba-management"}>
          <div className="my-10 shadow-custom rounded-2xl">
            <img src={Management} alt="" className="sm:h-[364px] w-full rounded-t-2xl" />
            <div className="h-[68px] bg-[#007FFF] w-full rounded-b-2xl">
              <h1 className="pt-[20px] font-extrabold text-white font-mono text-center md:text-[25px] text-[15px] leading-[1.4] tracking-wide">
                MBA in Management
              </h1>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* MBA in Banking and Finance */}
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
      >
        <Link to={"/master-degrees/mba-bankingAndFinance"}>
          <div className="my-10 shadow-custom rounded-2xl">
            <img src={Banking} alt="" className="sm:h-[364px] w-full rounded-t-2xl" />
            <div className="h-[68px] bg-[#007FFF] w-full rounded-b-2xl">
              <h1 className="pt-[20px] font-extrabold text-white font-mono text-center md:text-[25px] text-[15px] leading-[1.4] tracking-wide">
                MBA in Banking and Finance
              </h1>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Master of Education */}
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
      >
        <Link to={"/master-degrees/master-education"}>
          <div className="my-10 rounded-2xl shadow-custom">
            <img src={Master} alt="" className="sm:h-[364px] w-full rounded-t-2xl" />
            <div className="h-[68px] bg-[#007FFF] w-full rounded-b-2xl">
              <h1 className="pt-[20px] font-extrabold text-white font-mono text-center md:text-[25px] text-[15px] leading-[1.4] tracking-wide">
                Master of Education
              </h1>
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default MastersPageGallery;
