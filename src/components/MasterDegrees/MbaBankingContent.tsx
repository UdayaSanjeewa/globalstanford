import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

function MbaBankingContent() {
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
          className="p-6 font-semibold rounded-lg bg-gradient-to-r from-sky-400/30 via-Cyan-400/30 to-blue-400/30"
        >
          <p>
            The program is awarded by a U.G.C. Sri Lanka recognized university.
            This recognition
            ensures the program meets certain quality standards set by Sri
            Lanka's higher education authority.
          </p>
          <br />
          <p>
            This MBA program is unique in its delivery style. It focuses on
            assignments and a thesis, eliminating the stress of traditional
            exams. Assignments likely test your understanding of the course
            material through written work, case studies, or projects. The thesis
            provides an opportunity to delve deeper into a specific management
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

      <div className="w-[1030] h-[337] space-y-5">
        <h1
          className="font-catamaran  sm:text-[28px] mt-8  text-[19px]  uppercase animate-typing overflow-hidden 
                whitespace-nowrap  pr-5 text-5xl text-sky-900 font-bold"
        >
          Career Opportunities
        </h1>
        {/* new dev */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="p-6 rounded-lg bg-gradient-to-r from-sky-400/30 via-Cyan-400/30 to-blue-400/30"
        >
          <p>
            <span className="font-[700]">Strategic Decision Making:</span> An
            MBA hones your ability to analyze financial data, market trends, and
            regulatory changes. This allows you to make informed decisions on
            loan approvals, product development, and branch expansion – all
            crucial for a bank's success.
          </p>
          <br />
          <p>
            <span className="font-[700]">Leading Teams:</span> Effective
            communication, negotiation, and team motivation are essential for
            managing banking teams. An MBA program strengthens these skills,
            enabling you to inspire and guide colleagues towards achieving
            shared goals.
          </p>
          <br />
          <p>
            <span className="font-[700]">
              Organizational Change Management:
            </span>{" "}
            The banking industry is constantly evolving. MBA programs teach you
            to implement effective change management strategies to navigate
            mergers, acquisitions, and technological advancements.
          </p>
          <br />
          <p>
            <span className="font-[700]">MBA Specialization: </span>Consider
            specializing in finance or banking within your MBA program. This
            will provide a deeper understanding of banking-specific concepts and
            regulations. Many MBA programs offer strong alumni networks within
            the banking sector. Utilize these connections to gain insights and
            potentially land job opportunities.
          </p>
        </motion.div>

        <div className="w-[828] h-[90]">
          <p>
            Overall, an MBA combined with your existing knowledge of the banking
            sector can propel you to senior leadership positions. It equips you
            with the strategic thinking, problem-solving abilities, and
            management skills required to navigate the complexities of the
            Banking industry.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MbaBankingContent;
