import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

function BBADetails() {
  return (
    <div className="ml-[6%] mb-[5%] mr-[10%] sm:mr[10%]">
      <h1
        className="font-serif  sm:text-[28px] mt-8 mb-4  text-[22px]  uppercase animate-typing overflow-hidden 
                whitespace-nowrap  pr-5 text-5xl text-sky-900 font-bold"
      >
        ABOUT THE PROGRAMME
      </h1>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.4 }}
        className="p-6 font-semibold rounded-lg bg-gradient-to-r from-sky-400/30 via-Cyan-400/30 to-blue-400/30 shadow-custom"
      >
        <p className="text-[16px] sm:text-[18px] font-catamaran ">
          The program is awarded by a U.G.C. Sri Lanka recognized university.
           This recognition ensures
          the program meets certain quality standards set by Sri Lanka's higher
          education authority.
        </p>

        <p className="text-[16px] sm:text-[18px] font-catamaran mt-5 ">
          This BBA program is unique in its delivery style. It focuses on
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
        className="font-serif  sm:text-[28px] mt-8  text-[22px]  uppercase animate-typing overflow-hidden 
                whitespace-nowrap  pr-5 text-5xl text-sky-900 font-bold mb-4"
      >
        Career Opportunities
      </h1>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="px-6 py-2 font-semibold rounded-lg bg-gradient-to-r from-sky-400/30 via-Cyan-400/30 to-blue-400/30 shadow-custom"
      >
        <p className="text-[16px] sm:text-[18px] font-catamaran">
          A BBA in Management opens doors to a variety of exciting career paths.
        </p>
      </motion.div>
      <motion.p
        variants={fadeIn("down", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className=" text-[20px] sm:text-[26px] mt-6  text-sky-500 font-semibold font-serif"
      >
        Senior Level Management Positions
      </motion.p>

      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.4 }}
        className="p-6 font-semibold rounded-lg bg-gradient-to-r from-sky-400/30 via-Cyan-400/30 to-blue-400/30 shadow-custom"
      >
        <p className="text-[16px] sm:text-[18px] ">
          <strong>Strategic Decision-Making: </strong>The BBA curriculum covers
          strategic management courses that hone your ability to analyze complex
          business situations, assess risks and opportunities, and make
          well-informed decisions that drive organizational growth.
        </p>

        <p className="mt-5 text-[16px] sm:text-[18px]">
          <strong>Problem-Solving with Management Theories: </strong>You'll be
          exposed to various management theories throughout the program. You'll
          learn to apply these frameworks to real-world scenarios, identify root
          causes of problems, and develop effective solutions.
        </p>

        <p className="mt-5 text-[16px] sm:text-[18px]">
          <strong>Leadership and Communication: </strong>BBA programs often have
          courses on leadership principles and communication effectiveness.
          You'll gain the ability to motivate and inspire teams, clearly
          articulate your vision, and effectively delegate tasks.
        </p>
        <p className="mt-5 text-[16px] sm:text-[18px]">
          While a BBA provides a strong foundation, gaining relevant experience
          is crucial for senior roles.
        </p>
        <p className="mt-5 text-[16px] sm:text-[18px]">
          Remember, a BBA in Management equips you with the skills and knowledge
          to excel in your career and climb the management ladder. With
          dedication, experience, and continuous learning, you can reach
          senior-level positions and have a significant impact on an
          organization's success.
        </p>
      </motion.div>

      <motion.p
        variants={fadeIn("down", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="font-serif text-[22px] sm:text-[28px] mt-6 mb-3  underline-offset-1  text-sky-500 font-semibold"
      >
        Management Consultants
      </motion.p>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="p-4 mb-2 font-semibold rounded-lg bg-gradient-to-r from-sky-400/30 via-Cyan-400/30 to-blue-400/30 shadow-custom"
      >
        <p className="text-[16px] sm:text-[18px]">
          A BBA in Management equips you with the skills to become a valuable
          asset in the consulting world, supporting both public and private
          organizations.
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.4 }}
        className="p-6 font-semibold rounded-lg bg-gradient-to-r from-sky-400/30 via-Cyan-400/30 to-blue-400/30 shadow-custom"
      >
        <p className="text-[16px] sm:text-[18px]">
          This program provides a strong foundation in core business areas like
          finance, accounting, marketing, operations, and human resources. This
          holistic knowledge allows you to grasp the complexities of an
          organization and identify areas for improvement. You'll develop strong
          analytical skills through courses in data analysis, statistics, and
          research methods. These skills are crucial for dissecting complex
          business problems, identifying root causes, and evaluating potential
          solutions. With your BBA and honed skillset, you can pursue consulting
          opportunities in various specializations:
        </p>
        <p className="mt-5 text-[16px] sm:text-[18px]">
          <strong>Strategy Consulting: </strong>Advise on long-term plans,
          mergers and acquisitions, and market expansion.
        </p>
        <p className="mt-5 text-[16px] sm:text-[18px]">
          <strong>Operations Consulting: </strong>Improve efficiency, streamline
          processes, and optimize resource utilization.
        </p>
        <p className="mt-5 text-[16px] sm:text-[18px]">
          <strong>Human Capital Consulting: </strong>Assist with talent
          management, leadership development, and organizational change.
        </p>
        <p className="mt-5 text-[16px] sm:text-[18px]">
          <strong>IT Consulting: </strong>Help organizations leverage technology
          to achieve business goals
        </p>
      </motion.div>
    </div>
  );
}

export default BBADetails;
