
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Master from "../../assets/Master.jpg";
import Banking from "../../assets/MBA Banking.jpg"
import Management from "../../assets/MBA Management.jpg"
import { Link } from "react-router-dom";

function MastersPageGallery() {
  return (
    <div className="flex flex-col mt-5 mb-5 lg:grid  grid-cols-3 gap-10 sm:my-[10vh] sm:mx-[10vh] justify-center items-center">
      {/*container gallery */}


      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
      >
        <Link to={"/master-degrees/mba-management"}>
          <div className="flex flex-col w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[280px] xl:w-[330px] xl:h-[324px]">
            {/*Image div*/}
            <img src={Management} className="h-[264px] w-[330px]" alt="" />

            <p
              className="bg-[#007FFF] w-[200px] h-[68px] sm:w-[250px] md:w-[300px] xl:w-[330px] flex items-center justify-center font-catamaran 
              font-[800] text-[18px] text-white"
            >

              MBA in Management

            </p>
          </div>
        </Link>
      </motion.div>


      <motion.div
        variants={fadeIn("up", 0.9)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
      >
        <Link to={"/master-degrees/mba-bankingAndFinance"}>
          <div className="flex flex-col w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[280px] xl:w-[330px] xl:h-[324px]">
            {/*Image div*/}
            <img src={Banking} className="h-[264px] w-[330px]" alt="" />

            <p
              className="bg-[#007FFF] w-[200px] h-[68px] sm:w-[250px] md:w-[300px] xl:w-[330px] flex items-center justify-center font-catamaran 
              font-[800] text-[18px] text-white text-center"
            >
              MBA in Banking and Finance
            </p>
          </div>
        </Link>
      </motion.div>


      <motion.div
        variants={fadeIn("up", 0.9)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
      >
        <Link to={"/master-degrees/master-education"}>
          <div className="flex flex-col w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[280px] xl:w-[330px] xl:h-[324px]">
            {/*Image div*/}
            <img src={Master} className="h-[264px] w-[330px]" alt="" />

            <p
              className="bg-[#007FFF] w-[200px] h-[68px] sm:w-[250px] md:w-[300px] xl:w-[330px] flex items-center justify-center font-catamaran 
              font-[800] text-[18px] text-white"
            >
              Master of Education
            </p>
          </div>
        </Link>
      </motion.div>

    </div>
  );
}

export default MastersPageGallery;
