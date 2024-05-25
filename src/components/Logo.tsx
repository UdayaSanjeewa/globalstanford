import { FC } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import gcsLogo from "../assets/gcs-logo.png"; // Update the path to your GCS logo
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const logo: FC = () => {
  return (
    <div>
      <div>
        <Link to={"/"}>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.1 }}
            className="flex mt-[17px]  mb-2"
            
          >
            <img src={gcsLogo} className="md:h-[77px] h-[65px] w-[70px] pb-2" alt="" />
            <div className="font-merriweather text-[10px] sm:text-[14px] font-[700] pt-1 ">
              <h2>Global</h2>
              <h2>Stanford</h2>
              <h2 className="text-red-600">CAMPUS</h2>
            </div>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default logo;
