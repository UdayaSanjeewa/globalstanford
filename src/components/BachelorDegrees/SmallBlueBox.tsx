import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

function SmallBlueBox() {
  return (
    <motion.div
      variants={fadeIn("left", 0.6)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="bg-[#011C3F] md:w-[500px] px-1 text-white font-catamaran rounded-[8px] ml-5 mr-2 sm:py-7"
    >
      <div className="">
        <p className=" ml-[2%] text-[13px] sm:text-[18px] font-medium">
          Entry Requirements
        </p>
        <p className=" ml-[6%] mt-[3px] text-[12px] sm:text-[16px] font-regular">
          NTS Diploma
        </p>
      </div>
    </motion.div>
  );
}

export default SmallBlueBox;
