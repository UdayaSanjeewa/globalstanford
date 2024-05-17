import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

function MbaManagementContent() {
  return (
    <div className="font-catamaran font-[500] text-[18px] mt-10 ml-10 mr-10 mb-10 md:mt-20 md:mb-32 md:ml-32 md:mr-44 space-y-10">
      <div className="w-[1091] h-[360] space-y-5">
        <h1
          className="font-catamaran  sm:text-[28px] mt-8  text-[19px]  uppercase animate-typing overflow-hidden 
                whitespace-nowrap  pr-5 text-5xl text-sky-900 font-bold"
        >
          ABOUT THE PROGRAMME
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
            material through
          </p>
          <br />
          <p>
            written work, case studies, or projects. The thesis provides an
            opportunity to delve deeper into a specific management topic through
            research and writing.
          </p>
          <br />
          <p>
            <span className="font-[700]">World-class lecture panels:</span>{" "}
            You'll have the chance to learn from experienced and qualified
            instructors.
          </p>
          <br />
          <p>
            <span className="font-[700]">Affordable payment plans:</span> Makes
            the program financially accessible to a wider range of students.
          </p>
          <br />
          <p>
            <span className="font-[700]">Guarantee of timely completion:</span>{" "}
            This provides peace of mind, ensuring you graduate within the
            program's timeframe.
          </p>
        </motion.div>
      </div>

      <div className="w-[1030] h-[337] space-y-5">
        <h1
          className="font-catamaran  sm:text-[28px] mt-8  text-[19px]   uppercase animate-typing overflow-hidden 
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
            MBA program strengthens analytical abilities and teaches frameworks
            for evaluating complex business situations. This allows graduates to
            make data-driven decisions that align with the organization's
            long-term goals. Senior leadership roles require this kind of
            strategic thinking.
          </p>
          <br />
          <p>
            <span className="font-[700]">Industry Expertise:</span> Many MBA
            programs offer concentrations in specific sectors like finance,
            healthcare, or technology. These specializations provide in-depth
            knowledge of the industry's challenges and opportunities. Having
            this industry-specific acumen makes MBA graduates strong candidates
            for senior positions within their field.
          </p>
          <br />
          <p>
            <span className="font-[700]">Leadership and Communication: </span>{" "}
            MBA programs hone leadership skills like team management, conflict
            resolution, and delegation. Effective communication is also
            emphasized, as senior leaders need to inspire, motivate, and clearly
            articulate their vision to colleagues.
          </p>
        </motion.div>
      </div>

      <div className="w-[903] h-[263] space-y-5">
        <h1
          className="font-catamaran  sm:text-[28px] mt-8  text-[19px]  uppercase animate-typing overflow-hidden 
                whitespace-nowrap  pr-5 text-5xl text-sky-900 font-bold"
        >
          Internal vs. External Opportunities
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
            <span className="font-[700]">Internal Promotions: </span>An MBA can
            signal to current employers that a graduate is ready for greater
            responsibility. The additional skills and knowledge can make them
            strong contenders for internal promotions to senior management
            positions.
          </p>
          <p>
            <span className="font-[700]">Market: </span>The broader skillset and
            industry expertise gained through an MBA make graduates attractive
            to a wider range of employers. This opens doors to senior-level
            opportunities outside their current organization, perhaps in a
            different industry or company size.
          </p>
        </motion.div>
      </div>

      <div className="w-[828] h-[120]">
        <p>
          In conclusion, an MBA equips graduates with the strategic thinking,
          industry knowledge, leadership skills, and problem-solving abilities
          required for senior-level positions. This allows them to pursue career
          advancement within their current organization or leverage their
          newfound expertise to find senior opportunities elsewhere.
        </p>
      </div>
    </div>
  );
}

export default MbaManagementContent;
