import bgImage from "../../assets/lecture-hall.jpg";
import LeftBox from "./LeftBox";
import UpperBox from "./DOPUpperBox";
import RightBox from "./DOPRightBox";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

function BlueBox() {
  return (
    <div className="relative h-[460px]">
      <img src={bgImage} alt="" className="inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-[#003478] opacity-75 ">
        <div className="flex-row md:flex gap-14">
          <motion.div
           variants={fadeIn("right", 0.7)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.7 }}
          >
          <LeftBox title="Doctor of philosophy  ">
            PhD stands for Doctor of Philosophy, but its meaning goes
            deeper than just a title. The word "philosophy" itself comes
            from ancient Greece, literally translating to "love of wisdom"
            (φιλοσοφία - Philosophia). Originally, a philosopher wasn't
            just someone with a doctorate; it referred to someone who
            had achieved a well-rounded education encompassing the
            fundamental issues of their time.
          </LeftBox>
          </motion.div>
          <div className="mt-5 sm:ml-[20%] sm:mt-14">
          <motion.div
           variants={fadeIn("left", 0.6)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.7 }}
          >
            <UpperBox />
            </motion.div>
            <div className="mt-5">
            <motion.div
           variants={fadeIn("left", 0.8)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.7 }}
          >
              <RightBox duration="3 Years" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlueBox;
