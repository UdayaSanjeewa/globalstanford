import lectureHall from "../../assets/lecture-hall.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

function MasterEducationHeading() {
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
      <div className="absolute flex space-y-10 md:space-y-0 lg:ml-10 w-full items-center justify-center 2xl:justify-start mt-[80px] flex-col md:flex-row md:gap-20 lg:gap-5 xl:gap-20 2xl:gap-40 2xl:ml-32">
        {/* Right side */}

        <motion.div
          variants={fadeIn("right", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-[300px] h-[120px]  lg:w-[500px] lg:h-[197px] lg:space-y-10"
        >
          <p className="text-white font-catamaran font-[800] text-[20px] lg:text-[35px]">
            Master of Education
          </p>
          <p className="text-white font-[500] font-catamaran lg:text-[20px]">
            This program is specifically designed for individuals already
            working in the education sector. It caters to those who want to
            enhance their knowledge and skills without disrupting their current
            careers.
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
            className="w-[300px] lg:w-[400px] xl:w-[610px] lg:h-[108px] bg-[#011C3F] rounded-[8px] text-white"
          >
            <p className="font-catamaran font-500 mt-2 ml-5 text-[16px] lg:text-[18px] lg:mt-4 lg:ml-10">
              Entry Requirements
            </p>
            <p className="h-[25.92px] font-catamaran font-[400] text-[10px] lg:text-[16px] ml-6 lg:ml-16 mt-2">
              Any recognized bachelor degree in Education related Or PHDE
            </p>
          </motion.div>

          {/* Creating the box */}
          <motion.div
            variants={fadeIn("left", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="w-[300px] lg:w-[400px] xl:w-[610px] h-[105px] 2xl:h-[108px] lg:h-[180px] xl:h-[150px] bg-[#011C3F] rounded-[8px] text-white"
          >
            <div className="font-catamaran font-[400] text-[10px] lg:text-[16px] ml-6 lg:ml-16 mt-2 lg:mt-5 xl:mt-5 2xl:mt-2">
              <p>Duration : 18 Months </p>
              <p>
                Credits :{" "}
                <span className="font-[400]">
                  60 credits (Equivalent to 2 Years)
                </span>{" "}
              </p>
              <p>
                Intakes :{" "}
                <span className="font-[400]">
                  {" "}
                  Call us at 070 747 7771 / 070 747 7772 for intake information.
                </span>
              </p>
              <p>
                Fees :{" "}
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

export default MasterEducationHeading;
