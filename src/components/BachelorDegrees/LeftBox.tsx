import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

function LeftBox(props: any) {
  return (
    <motion.div
      variants={fadeIn("right", 0.6)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="ml-6 sm:ml-[90px] mt-[30px] sm:mt-[55px]"
    >
      <h1 className="font-extrabold text-white text-[15px] sm:text-[35px] font-serif">
        {props.title}
      </h1>
      <p className="text-white sm:mt-[10px] text-[12px] sm:text-[20px] mt-3 mb-3 font-mono leading-[1.9] tracking-wide">
        {props.children}
      </p>
    </motion.div>
  );
}

export default LeftBox;
