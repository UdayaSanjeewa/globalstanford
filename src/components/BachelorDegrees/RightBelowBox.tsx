import { motion } from "framer-motion";

import { fadeIn } from "../../variants";

function RightBelowBox(props: any) {
  return (
    <motion.div
      variants={fadeIn("left", 0.9)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="bg-[#011C3F] md:w-[560px] md:px-1 text-white font-catamaran rounded-[8px] ml-5 mr-2 md:py-1 "
    >
      <div className="flex flex-row pt-5 py-1 ml-[3%] sm:text-[16px] text-[12px]">
        <p className="font-bold ">Duration :</p>&nbsp;
        <p className="font-regular">{props.duration}</p>
      </div>

      <div className="flex flex-row ml-[3%] py-1 sm:text-[16px] text-[12px]">
        <p className="font-bold">Credits :</p>&nbsp;
        <p className=" font-regular">120 credits (Equivalent to 4 Years)</p>
      </div>

      <div className="flex flex-row ml-[3%] py-1 sm:text-[16px] text-[12px]">
        <p className="font-bold">Intakes :</p>&nbsp;
        <p className=" font-regular">
          {" "}
          Call us at 070 747 7771 / 070 747 7772 for <br /> intake information.
        </p>
      </div>

      <div className="flex flex-row ml-[3%] py-1 pb-2 sm:text-[16px] text-[12px]">
        <p className="font-bold">Fees </p>&nbsp;
        <p className=" font-regular">
          : Call us at 070 747 7771 / 070 747 7772 for For fees and payment information
        </p>
      </div>
    </motion.div>
  );
}

export default RightBelowBox;
