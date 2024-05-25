interface LeftBoxProps {
  title: string;
  children: React.ReactNode; // or specify the type more accurately based on expected children
}

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

function LeftBox(props: LeftBoxProps) {
  return (
    <motion.div
      variants={fadeIn("up", 0.6)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.4 }}
      className="md:ml-[20px] ml-2 mt-[30px] sm:mt-[55px] "
    >
      <h1 className="font-extrabold text-white text-[15px] md:text-[35px] font-serif">
        {props.title}
      </h1>
      <p className="text-white sm:mt-[10px] text-[12px] md:text-[12px] mt-3 mb-3 font-mono md:leading-[1.6] pr-10">
        {props.children}
      </p>
    </motion.div>
  );
}

export default LeftBox;
