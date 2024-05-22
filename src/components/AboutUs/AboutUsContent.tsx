import { motion } from "framer-motion";

import { fadeIn } from "../../variants";

function AboutUsContent() {
  return (
    // container div
    <div className="flex flex-col items-center justify-center mx-auto">
      <div className=" mx-8 font-[400px] text-[18px] font-catamaran grid md:grid-cols-3 sm:grid-flow-row md:gap-16 sm:gap-6">
        <motion.p
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="mt-10 p-6 rounded-lg bg-gradient-to-r from-[#3d79aa] via-[#124a77] to-[#3d79aa] text-white shadow-custom"
        >
          <span className=" text-white font-bold font-serif ">
            Since GSC’s founding in 2018, GSC has established itself as a
            prominent leader in Sri Lanka's private sector higher education
            landscape. We have achieved this position by attracting a
            substantial student body, making us one of the largest in the entire
            private sector. This rapid growth within a short timeframe
            highlights GSC's ability to resonate with students seeking
            high-quality tertiary education.
          </span>
        </motion.p>

        <motion.p
          variants={fadeIn("up", 0.9)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="mt-10 p-6 font-bold rounded-lg bg-gradient-to-r from-[#3d79aa] via-[#124a77] to-[#3d79aa] text-white font-serif shadow-custom"
        >
          We offer UGC-recognized diplomas and degree programs that are
          internationally certified. Each course is designed according to
          standards that meet the highest quality of such an educational
          program. We ensure every student here is learning with perfection and
          satisfaction. Every department has academic teachers alongside
          developing professional skills through our lectures and practical
          programs.
        </motion.p>
        <motion.p
          variants={fadeIn("up", 1.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="mt-10 p-6 font-bold rounded-lg bg-gradient-to-r from-[#3d79aa] via-[#124a77] to-[#3d79aa] text-white font-serif shadow-custom"
        >
          GSC's founders addressed this issue by creating a unique learning
          environment specifically designed for working professionals. The
          curriculum and program structure are tailored to accommodate busy
          schedules, allowing individuals to integrate their studies with their
          existing commitments.
        </motion.p>
      </div>

      {/* blue boxes div */}
      <div className="flex flex-col gap-2 mt-20 text-white sm:gap-32 lg:flex-row font-catamaran">
        {/* blue box div */}
        <motion.div
          variants={fadeIn("right", 0.9)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="lg:w-[536px] h-[300px] sm:h-[250px] bg-[#000061] rounded-[10px] m-2 shadow-custom"
        >
          <p className="font-[700] text-[25px] ml-5 lg:ml-10 mt-4 font-serif">Vision</p>

          <p className="lg:w-[415px] font-mono font-[400] text-[18px] ml-5 lg:ml-10 mt-5 leading-[1.9] tracking-wide ">
            To revolutionize studies in South Asia by creating a holistic
            learning environment that nurtures both academic excellence and the
            future of our students.
          </p>
        </motion.div>
        {/* blue box div */}
        <motion.div
          variants={fadeIn("left", 0.9)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="lg:w-[536px] h-[300px] sm:h-[250px] bg-[#000061] rounded-[10px] m-2 shadow-custom"
        >
          <p className="font-[700] text-[25px] ml-5 lg:ml-10 mt-4 font-serif">Mission</p>

          <p className="lg:w-[415px] font-mono font-[400] text-[18px] ml-5 lg:ml-10 mt-5 leading-[1.9] tracking-wide ">
            We empower South Asian students by providing innovative, holistic
            learning experiences that cultivate academic success and prepare
            them to be well-rounded, future-ready individuals.
          </p>
        </motion.div>
      </div>

      {/* Affliation div */}
      {/* <div className="mt-10">
        <motion.h1
          variants={fadeIn("left", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="font-catamaran  sm:text-[28px] mt-8  text-[45px]  uppercase animate-typing overflow-hidden 
                whitespace-nowrap  pr-5 text-5xl text-sky-900 font-bold"
        >
          Our Affliation
        </motion.h1>
        <motion.img
          variants={fadeIn("up", 0.9)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          src={Affliation}
          alt=""
          className="md:w-[625px] md:h-[370px]"
        />
      </div> */}

      <div className="">

      </div>
    </div>

    
  );
}

export default AboutUsContent;
