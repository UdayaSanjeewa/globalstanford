import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

function BBAUpperBox() {
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
          <li>Recognized Diploma in Management or</li>
          <li>HND in Education or </li>
          <li>
            Recognized Certificate Course in Management + 02 Year <br /> Work
            Experience in the field or
          </li>
          <li>03 Year Work Experience in the Field at Executive Level</li>
        </ul>
      </div>
    </motion.div>
  );
}
export default BBAUpperBox;
