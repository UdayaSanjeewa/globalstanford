import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

function EducationDetails() {
  return (
    <div className="ml-[6%] mb-[5%] mr-[10%] sm:mr[10%] ">
      <h1
        className="font-catamaran  sm:text-[28px] mt-8 mb-4  text-[22px]  uppercase animate-typing overflow-hidden 
        whitespace-nowrap  pr-5 text-5xl text-sky-900 font-bold"
      >
        ABOUT THE PROGRAMME
      </h1>
      {/* new div */}

      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: true, amount: 0.4}}
        className="p-6 font-semibold rounded-lg bg-gradient-to-r from-sky-400/30 via-Cyan-400/30 to-blue-400/30 shadow-custom"
      >
        <p className="text-[16px] sm:text-[18px] font-catamaran">
          The program is awarded by a U.G.C. Sri Lanka recognized university.
           This recognition ensures
          the program meets certain quality standards set by Sri Lanka's higher
          education authority.
        </p>

        <p className="text-[16px] sm:text-[18px] font-catamaran mt-5">
          This BED program is unique in its delivery style. It focuses on
          assignments and a thesis, eliminating the stress of traditional exams.
          Assignments likely test your understanding of the course material
          through written work, case studies, or projects. The thesis provides
          an opportunity to delve deeper into a specific education topic through
          research and writing.
        </p>

        <p className="text-[16px] sm:text-[18px] font-catamaran mt-5">
          World-class lecture panels: You'll have the chance to learn from
          experienced and qualified instructors. Affordable payment plans: Makes
          the program financially accessible to a wider range of students.
        </p>

        <p className="text-[16px] sm:text-[18px] font-catamaran mt-5">
          Guarantee of timely completion: This provides peace of mind, ensuring
          you graduate within the program's timeframe.
        </p>
      </motion.div>

      <h1
        className="font-catamaran  sm:text-[28px] mt-8  text-[22px]  uppercase animate-typing overflow-hidden 
                whitespace-nowrap  pr-5 text-5xl text-sky-900 font-bold"
      >
        Specialization
      </h1>
      {/* new div*/}
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.4 }}
        className="p-6 rounded-lg bg-gradient-to-r from-sky-400/30 via-Cyan-400/30 to-blue-400/30 shadow-custom"
      >
        <p className=" text-[16px] sm:text-[18px] font-semibold">
          We are offer the opportunity to specialize in a particular area like
          English Language, TESL, Science, Mathematics, Primary Education,
          Physical Education, IT, Engineering Technology or General. This can
          help you tailor your studies and career path
        </p>
      </motion.div>

      <h1
        className="font-catamaran  sm:text-[28px] mt-8  text-[22px]  uppercase animate-typing overflow-hidden 
                whitespace-nowrap  pr-5 text-5xl text-sky-900 font-bold"
      >
        Career Opportunities
      </h1>
      <motion.p
        variants={fadeIn("down", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.4 }}
        className="font-catamaran text-[20px] sm:text-[26px] mt-6  text-sky-500 font-semibold"
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
        <p className=" text-[16px] sm:text-[18px]">
          Bachelor of Education (B.Ed) degree can lead to senior-level positions
          in the education sector, both within schools and other educational
          organizations. Having a B.Ed equips you with the knowledge and skills
          needed for a career in education. This degree can open doors to
          positions with greater responsibility and leadership compared to
          entry-level teaching roles. To succeed in these senior positions,
          you'll need strong decision-making and research abilities,
        </p>
        <br />
        <p className="mt-5 text-[16px] sm:text-[18px]">
          Understanding and applying different educational theories will help
          you solve complex problems in the education field. A B.Ed. combined
          with experience and honed skills can pave the way for advancement in
          the education sector
        </p>
      </motion.div>

      <motion.p
        variants={fadeIn("down", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.4 }}
        className="font-catamaran text-[20px] sm:text-[26px] mt-6  text-sky-500 font-semibold"
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
          A B.Ed might qualify you for postgraduate studies in education, which
          could be a route to student immigration. This would allow you to get a
          visa to study and potentially transition to work after graduation
        </p>
      </motion.div>
    </div>
  );
}

export default EducationDetails;
