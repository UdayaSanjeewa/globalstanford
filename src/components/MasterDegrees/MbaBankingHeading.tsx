import lectureHall from "../../assets/lecture-hall.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

function MbaBankingHeading() {
  return (
    <div className="w-full h-[497px] relative">
      {/* Adding background image and blue overlay to the image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${lectureHall})` }}
      >
        <div className="absolute inset-0 bg-[#003478C4] opacity-75"></div>
      </div>

      {/* content */}
      <div className="absolute flex lg:ml-10 w-full items-center justify-center 2xl:justify-start mt-[80px] flex-col md:flex-row md:gap-20 lg:gap-5 xl:gap-20 2xl:gap-40 2xl:ml-32">
        {/* Right side */}
        <motion.div
          variants={fadeIn("right", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-[300px] h-[120px]  lg:w-[500px] lg:h-[197px] lg:space-y-10"
        >
          <p className="text-white font-catamaran font-[800] text-[20px] lg:text-[35px]">
            MBA in Banking and Finance{" "}
          </p>
          <p className="text-white font-[500] font-catamaran lg:text-[20px]">
            Designed for Employees who are in the field of Banking at executive
            level, the MBA is an assignment based one.
          </p>
        </motion.div>

        {/* Left side */}
        <div className="flex flex-col space-y-10">
          {/* Creating the box */}
          <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='w-[300px] h-[80px] lg:w-[400px] xl:w-[610px] lg:h-[108px] bg-[#011C3F] rounded-[8px] text-white'
          >
            <p className="font-catamaran font-500 mt-2 ml-5 text-[16px] lg:text-[18px] lg:mt-4 lg:ml-10">
             <b>Entry Requirements</b>
            </p>
            <p className="h-[25.92px] font-catamaran font-[400] text-[10px] lg:text-[16px] ml-6 lg:ml-16 mt-2">
              Any recognized bachelor degree in management related or IBSL pass
              finalized
            </p>
          </motion.div>

          {/* Creating the box */}
          <motion.div
            variants={fadeIn("left", 0.9)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="w-[300px] lg:w-[400px] xl:w-[610px] h-[105px] 2xl:h-[108px] lg:h-[180px] xl:h-[150px] bg-[#011C3F] rounded-[8px] text-white"
>
              <div className="font-catamaran font-[400] text-[10px] lg:text-[16px] ml-6 lg:ml-10 mt-2 lg:mt-5 xl:mt-5 2xl:mt-2">
                <p><b>Duration :</b> 18 Months </p>
                <p>
                <b>Credits :{" "}</b>
                  <span className="font-[400]">
                    60 credits (Equivalent to 2 Years)
                  </span>{" "}
                </p>
                <p>
                <b>Intakes :{" "}</b>
                  <span className="font-[400]">
                    {" "}
                    Call us at 070 747 7771 / 070 747 7772 for intake information.
                  </span>
                </p>
                <p>
                <b>Fees :{" "}</b>
                  <span className="font-[400]">
                    {" "}
                    Call us at 070 747 7771 / 070 747 7772 for For fees and payment information
                  </span>
                </p>
              </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default MbaBankingHeading;
