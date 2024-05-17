import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

function DOPDetails() {
  return (
    <div className="ml-[6%] mb-[5%] mr-[10%] sm:mr[10%]">
      <h1
        className="font-catamaran  sm:text-[28px] mt-8 mb-4  text-[22px]  uppercase animate-typing overflow-hidden 
                whitespace-nowrap  pr-5 text-5xl text-sky-900 font-bold"
      >
        ABOUT THE PROGRAMME
      </h1>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.4 }}
        className="p-6 font-semibold rounded-lg bg-gradient-to-r from-sky-400/30 via-Cyan-400/30 to-blue-400/30"
      >
        <p className="text-[16px] sm:text-[18px] font-catamaran ">
          The program is awarded by a U.G.C. Sri Lanka recognized university,
          the IIC University of Technology in Cambodia. This recognition ensures
          the program meets certain quality standards set by Sri Lanka's higher
          education authority.
        </p>

        <p className="text-[16px] sm:text-[18px] font-catamaran mt-5 ">
          This MBA program is unique in its delivery style. It focuses on
          assignments and a thesis, eliminating the stress of traditional exams.
          Assignments likely test your understanding of the course material
          through written work, case studies, or projects. The thesis provides
          an opportunity to delve deeper into a specific management topic
          through research and writing.
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
        className="font-catamaran  sm:text-[26px] mt-8  text-[20px]  uppercase animate-typing overflow-hidden 
                whitespace-nowrap  pr-5 text-5xl text-sky-900 font-bold mb-4"
      >
        Specialization and Deep Knowledge
      </h1>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="px-6 py-2 font-semibold rounded-lg bg-gradient-to-r from-sky-400/30 via-Cyan-400/30 to-blue-400/30"
      >
        <p className="text-[16px] sm:text-[18px] font-catamaran">
          While a love of wisdom is still important, today's Doctor of
          Philosophy applies to individuals who have pursued knowledge in a much
          more specialized field. Think of it this way: in the past, a
          philosopher was like a generalist scholar, broadly versed in many
          subjects. Today's PhD is a specialist who has delved deeply into a
          specific area of knowledge.
        </p>
      </motion.div>
      <h1
        className="font-catamaran  sm:text-[26px] mt-8  text-[20px]  uppercase animate-typing overflow-hidden 
                whitespace-nowrap  pr-5 text-5xl text-sky-900 font-bold mb-4"
      >
        Global Recognition and Original Research
      </h1>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.4 }}
        className="p-6 font-semibold rounded-lg bg-gradient-to-r from-sky-400/30 via-Cyan-400/30 to-blue-400/30"
      >
        <p className="text-[16px] sm:text-[18px]">
          A PhD is a prestigious qualification recognized worldwide.
          Universities and higher education institutions award it to candidates
          who have completed a rigorous program. The core requirement? Extensive
          and original research in their chosen field, culminating in a thesis
          or dissertation. This thesis is essentially a lengthy document
          presenting the candidate's research question, methodology, findings,
          and contribution to the existing body of knowledge.
        </p>
      </motion.div>

      <h1
        className="font-catamaran  sm:text-[26px] mt-8  text-[20px]  uppercase animate-typing overflow-hidden 
                whitespace-nowrap  pr-5 text-5xl text-sky-900 font-bold mb-4"
      >
        Years of Dedication
      </h1>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.4 }}
        className="p-6 font-semibold rounded-lg bg-gradient-to-r from-sky-400/30 via-Cyan-400/30 to-blue-400/30"
      >
        <p className="text-[16px] sm:text-[18px]">
          Traditionally, a PhD program is a significant time investment. It
          typically involves three to four years of full-time study, though it
          can take up to six years or more for part-time students. During this
          period, the student conducts their research, takes coursework, and
          eventually writes up their thesis or dissertation. This final document
          showcases their expertise and original contribution to their chosen
          field of study.
        </p>

        <p className="text-[16px] sm:text-[18px]">
          In essence, a PhD is a journey of deep exploration and knowledge
          creation within a specialized field. It signifies not just extensive
          knowledge but also the ability to conduct independent research and
          make original contributions to a particular area of study.
        </p>
      </motion.div>

      <h1
        className="font-catamaran  sm:text-[26px] mt-8  text-[20px]  uppercase animate-typing overflow-hidden 
                whitespace-nowrap  pr-5 text-5xl text-sky-900 font-bold mb-4"
      >
        Specialization
      </h1>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.4 }}
        className="p-6 font-semibold rounded-lg bg-gradient-to-r from-sky-400/30 via-Cyan-400/30 to-blue-400/30"
      >
        <p className="text-[16px] sm:text-[18px]">
          We are offer the opportunity to specialize in a particular area like
          Education and Management. This can help you tailor your studies and
          career path.
        </p>

      
      </motion.div>
    </div>

  );
}

export default DOPDetails;
