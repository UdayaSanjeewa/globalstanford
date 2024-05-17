import { motion } from "framer-motion";

import { fadeIn } from "../../variants";

function EducationUpperBox() {
  return (
    <motion.div
      variants={fadeIn("left", 0.6)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="bg-[#011C3F] md:w-[500px] px-1 text-white font-catamaran rounded-[8px] ml-5 mr-2 py-1"
    >
      <div className="">
        <p className=" ml-[2%] text-[13px] sm:text-[18px] font-medium">
          Entry Requirements
        </p>
        <ul className=" ml-[6%] mt-[3px] text-[12px] sm:text-[16px] font-regular">
          <li>Teachers’ Diploma from NCOE or</li>
          <li>HND in Education or </li>
          <li>National Diploma in Teaching or</li>
          <li>Any Recognized Diploma related to Education or</li>
          <li>05 Year or more Teaching Experience at Government </li>
        </ul>
      </div>
    </motion.div>
  );
}
export default EducationUpperBox;
