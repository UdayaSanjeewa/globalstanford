import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

function LeftBox(props: any) {
  return (
    <motion.div
      variants={fadeIn("up", 0.6)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="md:ml-[20px] ml-2 mt-[30px] sm:mt-[55px] "
    >
      <h1 className="font-extrabold text-white text-[15px] md:text-[35px] font-serif">
        {props.title}
      </h1>
      <p className="text-white sm:mt-[10px] text-[12px] sm:text-[20px] mt-3 mb-3 font-mono md:leading-[1.9] ">
        {props.children}
      </p>
    </motion.div>
  );
}

export default LeftBox;
