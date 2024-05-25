import { Link } from "react-router-dom";
import conversation from "../../assets/PhD.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

function PhdDBAGallery() {
  return (
    <motion.div className="flex flex-col items-center my-[8vh] mx-[8vh] ">
      {/*container gallery */}

      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.1 }}
        className=""
      >
        <Link to={"/dop"}>
          <div className="my-10 shadow-custom rounded-2xl">
            <img
              src={conversation}
              alt=""
              className="lg:h-[300px] lg:w-[400px] sm:h-[250px] sm:w-[300px] rounded-t-2xl"
            />
            <div className="sm:h-[75px] h-[68px] bg-[#007FFF] w-full rounded-b-2xl">
              <h1 className="pt-[20px] font-extrabold text-white font-mono text-center md:text-[17px] text-[17px] leading-[1.3] tracking-wide">
                Doctor of philosophy
              </h1>
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default PhdDBAGallery;
