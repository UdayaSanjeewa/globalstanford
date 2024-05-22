import lectureHall from "../../assets/Master’s Degrees.jpg";
import freestyle from "../../assets/Bachelor’s Degrees.jpg";
import conversation from "../../assets/Doctor of Philosophy.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

function CourcesGallery() {
  return (
    <motion.div
      // variants={fadeIn("up", 0.6)}
      // initial="hidden"
      // whileInView={"show"}
      // viewport={{ once: false, amount: 0.7 }}
      className="sm:grid grid-cols-3 gap-6 my-[10vh] mx-[10vh] "
    >
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
      >
        <Link to={"/bachelors-degree"}>
          <div className="my-10">
            <a href="">
              <img src={freestyle} alt="" className="sm:h-[364px] w-full" />
              <div className="h-[68px] bg-[#007FFF] w-full">
                <h1 className="pt-[20px] font-extrabold text-white font-mono text-center md:text-[25px] text-[15px] leading-[1.3] tracking-wide">
                  Bachelor's Degrees
                </h1>
              </div>
            </a>
          </div>
        </Link>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
      >
        <Link to={"/master-degrees"}>
          <div className="my-10">
            <a href="">
              <img src={lectureHall} alt="" className="sm:h-[364px] w-full" />
              <div className="h-[68px] bg-[#007FFF] w-full">
                <h1 className="pt-[20px] font-extrabold text-white font-mono text-center md:text-[25px] text-[15px] leading-[1.3] tracking-wide">
                  Master’s Degrees
                </h1>
              </div>
            </a>
          </div>
        </Link>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
      >
        <Link to={"/phd-dba"}>
          <div className="my-10">
            <a href="">
              <img src={conversation} alt="" className="sm:h-[364px] w-full" />
              <div className="h-[68px] bg-[#007FFF] w-full">
                <h1 className="pt-[20px] font-extrabold text-white font-mono text-center md:text-[25px] text-[15px] leading-[1.3] tracking-wide">
                  PhD/DBA
                </h1>
              </div>
            </a>
          </div>
        </Link>
      </motion.div>
    </motion.div>
    // <motion.div className="sm:grid grid-cols-3 gap-6 my-[10vh] mx-[10vh] ">
    //   {/*container gallery */}
    //   <motion.div
    //     variants={fadeIn("up", 0.6)}
    //     initial="hidden"
    //     whileInView={"show"}
    //     viewport={{ once: true, amount: 0.4 }}
    //   >
    //     <Link to={"/bachelors-degree"}>
    //       <div className="my-10">
    //       <div className="flex flex-col w-[330px] h-[324px]">
    //         {/*Image div*/}
    //         <img src={freestyle} className="sm:h-[364px] w-full" alt="" />
    //         <div className="h-[68px] bg-[#007FFF] w-full">
    //         <p className="bg-[#007FFF] w-[330px] flex items-center justify-center h-[68px] font-catamaran font-[800] text-[18px] text-white">
    //           Bachelor's Degrees{" "}
    //         </p>
    //           </div>
    //       </div>
    //       </div>

    //     </Link>
    //   </motion.div>
    //   <motion.div
    //     variants={fadeIn("up", 0.9)}
    //     initial="hidden"
    //     whileInView={"show"}
    //     viewport={{ once: true, amount: 0.4 }}
    //   >
    //     <Link to={"/master-degrees"}>
    //       <div className="flex flex-col w-[330px] h-[324px]">
    //         {/*Image div*/}
    //         <img src={lectureHall} className="sm:h-[364px] w-full" alt="" />
    //         <div className="h-[68px] bg-[#007FFF] w-full">
    //         <p className="bg-[#007FFF] w-[330px] flex items-center justify-center h-[68px] font-catamaran font-[800] text-[18px] text-white">
    //           Master’s Degrees{" "}
    //         </p>
    //           </div>
    //       </div>
    //     </Link>
    //   </motion.div>
    //   <motion.div
    //     variants={fadeIn("up", 1.2)}
    //     initial="hidden"
    //     whileInView={"show"}
    //     viewport={{ once: true, amount: 0.4 }}
    //   >
    //     <Link to={"/master-degrees/master-education"}>
    //       <div className="flex flex-col w-[330px] h-[324px]">
    //         {/*Image div*/}
    //         <img src={conversation} className="sm:h-[364px] w-full" alt="" />
    //         <div className="h-[68px] bg-[#007FFF] w-full">
    //         <p className="bg-[#007FFF] w-[330px] flex items-center justify-center h-[68px] font-catamaran font-[800] text-[18px] text-white">
    //           PHD/PDA{" "}
    //         </p>
    //           </div>
    //       </div>
    //     </Link>
    //   </motion.div>
    // </motion.div>
  );
}

export default CourcesGallery;
