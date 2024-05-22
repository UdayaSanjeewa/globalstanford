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
        viewport={{ once: false, amount: 0.5 }}
      >
        <Link to={"/dop"}>
          <div className="my-10">
            <a href="">
              <img
                src={conversation}
                alt=""
                className="sm:h-[300px] sm:w-[400px]"
              />
              <div className="h-[68px] bg-[#007FFF] sm:w-[400px]">
                <h1 className="pt-[20px] font-extrabold text-white font-catamaran text-center sm:text-[18px] text-[15px]">
                  Doctor of philosophy
                </h1>
              </div>
            </a>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default PhdDBAGallery;
