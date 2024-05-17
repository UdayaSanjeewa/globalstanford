import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

function MasterEducationContent() {
  return (
    <div className="font-catamaran font-[500] text-[18px] mt-10 ml-10 mr-10 mb-10 md:mt-20 md:mb-32 md:ml-32 md:mr-44 space-y-10">
      <div className="w-[1091] h-[360] space-y-5">
        <h1
          className="font-catamaran  sm:text-[28px] mt-8  text-[19px]   uppercase animate-typing overflow-hidden 
                whitespace-nowrap  pr-5 text-5xl text-sky-900 font-bold"
        >
          ABOUT THE PROGRAMME
        </h1>

        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="p-6 rounded-lg bg-gradient-to-r from-sky-400/30 via-Cyan-400/30 to-blue-400/30"
        >
          <p>
            The program is awarded by a U.G.C. Sri Lanka recognized university.
             This recognition
            ensures the program meets certain quality standards set by Sri
            Lanka's higher education authority.
          </p>
          <br />
          <p>
            This MED program is unique in its delivery style. It focuses on
            assignments and a thesis, eliminating the stress of traditional
            exams. Assignments likely test your understanding of the course
            material through written work, case studies, or projects. The thesis
            provides an opportunity to delve deeper into a specific education
            topic through research and writing.
          </p>
          <br />
          <p>
            World-class lecture panels: You'll have the chance to learn from
            experienced and qualified instructors. Affordable payment plans:
            Makes the program financially accessible to a wider range of
            students.
          </p>
          <br />
          <p>
            Guarantee of timely completion: This provides peace of mind,
            ensuring you graduate within the program's timeframe.
          </p>
        </motion.div>
      </div>

      <div className="w-[1030] h-[337]">
        <h1
          className="font-catamaran  sm:text-[28px] mt-8  text-[19px]  uppercase animate-typing overflow-hidden 
                whitespace-nowrap  pr-5 text-5xl text-sky-900 font-bold"
        >
          Career Opportunities
        </h1>
      </div>

      <div className="w-[972] h-[272] space-y-5">
        <motion.p
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="font-catamaran text-[22px] sm:text-[28px] mt-6 underline underline-offset-1  text-sky-500 font-semibold"
        >
          Senior Level Education Positions with Promotions
        </motion.p>

        {/* new div */}

        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="p-6 rounded-lg bg-gradient-to-r from-sky-400/30 via-Cyan-400/30 to-blue-400/30"
        >
          <p>
            A Master of Education (M.Ed) degree builds upon the foundation of a
            Bachelor of Education (B.Ed) and equips educators with advanced
            knowledge and refined skills for leadership roles within schools and
            educational organizations.
          </p>
          <br />
          <p>
            While a B.Ed qualifies you for teaching positions, an M.Ed prepares
            you for senior-level responsibilities. This advanced degree delves
            deeper into educational theories and research methodologies,
            empowering you to tackle complex challenges in the field.
          </p>
          <br />
          <p>
            An M.Ed., coupled with your teaching experience and honed leadership
            abilities, can significantly accelerate your advancement in the
            education sector.
          </p>
        </motion.div>
      </div>

      <div className="w-[828] h-[60] space-y-5">
        <motion.p
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="font-catamaran text-[22px] sm:text-[28px] mt-6 underline underline-offset-1  text-sky-500 font-semibold"
        >
          Migrating Opportunities
        </motion.p>

        {/* new div */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="p-6 rounded-lg bg-gradient-to-r from-sky-400/30 via-Cyan-400/30 to-blue-400/30"
        >
          <p>
            A MEd might qualify you for doctor in education, which could be a
            route to student immigration. This would allow you to get a visa to
            study and potentially transition to work after graduation.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default MasterEducationContent;
