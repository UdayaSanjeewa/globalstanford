import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

function DegreeDetails() {
  return (
    <div className="ml-[6%] mb-[5%] mr-[10%] sm:mr[10%] ">
      <h1
        className="font-catamaran  sm:text-[28px] mt-8 mb-4  text-[22px]  uppercase animate-typing overflow-hidden 
        whitespace-nowrap  pr-5 text-5xl text-sky-900 font-bold"
      >
        ABOUT THE PROGRAMME
      </h1>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.4 }}
        className="p-6 font-semibold rounded-lg bg-gradient-to-r from-sky-400/30 via-Cyan-400/30 to-blue-400/30 shadow-custom"
      >
        <p className="text-[16px] sm:text-[18px] font-catamaran">
          The program is awarded by a U.G.C. Sri Lanka recognized university.
           This recognition ensures
          the program meets certain quality standards set by Sri Lanka's higher
          education authority.
        </p>
        <p className="text-[16px] sm:text-[18px] font-catamaran mt-5">
          This nursing program is unique in its delivery style. It focuses on
          assignments and a thesis, eliminating the stress of traditional exams.
          Assignments likely test your understanding of the course material
          through written work, case studies, or projects. The thesis provides
          an opportunity to delve deeper into a specific nursing health topic
          through research and writing.
        </p>
        <div className="flex text-[16px] sm:text-[18px] font-catamaran mt-5">
          <p className="font-bold">World-class lecture panels: </p>&nbsp;
          <p>
            You'll have the chance to learn from experienced and qualified
            instructors.
          </p>
        </div>
        <div className="flex text-[16px] sm:text-[18px] font-catamaran mt-5">
          <p className="font-bold">Affordable payment plans: </p>&nbsp;
          <p>
            Makes the program financially accessible to a wider range of
            students.
          </p>
        </div>

        <div className="flex text-[16px] sm:text-[18px] font-catamaran mt-5">
          <p className="font-bold">Guarantee of timely completion: </p>&nbsp;
          <p>
            This provides peace of mind, ensuring you graduate within the
            program's timeframe.
          </p>
        </div>
      </motion.div>
      <h1
        className="font-catamaran  sm:text-[28px] mt-8 mb-4  text-[22px]  uppercase animate-typing overflow-hidden 
        whitespace-nowrap  pr-5 text-5xl text-sky-900 font-bold"
      >
        Career Opportunities
      </h1>
      <motion.p
        variants={fadeIn("down", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.4 }}
        className="font-catamaran text-[20px] sm:text-[26px] mt-6  underline-offset-1  text-sky-500 font-semibold"
      >
        Senior Level Education Positions with Promotions
      </motion.p>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.4 }}
        className="p-6 font-semibold rounded-lg bg-gradient-to-r from-sky-400/30 via-Cyan-400/30 to-blue-400/30 shadow-custom"
      >
        <p className="text-[16px] sm:text-[18px]">
          Bachelor of Science in Nursing degree can lead to senior-level
          positions in the health sector, both within hospital and other health
          organizations. Having a nursing degree equips you with the knowledge
          and skills needed for a career in nursing. This degree can open doors
          to positions with greater responsibility and leadership compared to
          entry-level nursing roles. To succeed in these senior positions,
          you'll need strong decision-making and research abilities,
        </p>
        <p className="mt-5 text-[16px] sm:text-[18px]">
          Understanding and applying different nursing theories will help you
          solve complex problems in the education field. A nursing degree
          combined with experience and honed skills can pave the way for
          advancement in the health sector.
        </p>
      </motion.div>
      <motion.p
        variants={fadeIn("down", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.4 }}
        className="font-catamaran text-[20px] sm:text-[26px] mt-6  underline-offset-1  text-sky-500 font-semibold"
      >
        Migrating Opportunities
      </motion.p>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.4 }}
        className="p-6 font-semibold rounded-lg bg-gradient-to-r from-sky-400/30 via-Cyan-400/30 to-blue-400/30 shadow-custom"
      >
        <p className="text-[16px] sm:text-[18px]">
          A Bsc might qualify you for postgraduate studies in nursing, which
          could be a route to student immigration. This would allow you to get a
          visa to study and potentially transition to work after graduation
        </p>
      </motion.div>
    </div>
  );
}

export default DegreeDetails;
