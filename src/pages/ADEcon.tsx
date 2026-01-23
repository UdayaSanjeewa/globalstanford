import Navbar from "../components/Navbar";
import SubNavbar from "../components/SubNavbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

/* Images */
import backgroundImg from "../../public/diplomas/background.jpeg";

function ADEcon() {
  return (
    <div className="bg-gradient-to-r from-blue-900/10 to-blue-900/10">
      <Navbar />
      <SubNavbar />

      {/* HERO */}
      {/* <div className="relative h-[420px]">
        <div className="absolute inset-0 bg-[#003478] opacity-90 flex items-center">
          <div className="ml-[6%] text-white max-w-4xl">
            <h1 className="text-[26px] sm:text-[40px] font-extrabold font-catamaran">
              Advanced Diploma in Economics
            </h1>
            <p className="mt-4 text-[16px] sm:text-[18px]">
              SLQF Level 04 • 4 Semesters • 60 Credits • Online / Blended
            </p>
          </div>
        </div>
      </div> */}
      <div
        className="relative h-[420px] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        {/* Blue economics gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#003478]/95 to-[#003478]/70 flex items-center">
          <div className="ml-[6%] text-white max-w-4xl">
            <h1 className="text-[26px] sm:text-[40px] font-extrabold font-catamaran">
              Advanced Diploma in Economics
            </h1>
            <p className="mt-4 text-[16px] sm:text-[18px]">
              SLQF Level 04 • 4 Semesters • 60 Credits • Online / Blended
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="ml-[6%] mr-[10%] mb-[6%]">
        {/* Programme Overview */}
        <SectionTitle title="Programme Overview" />
        <AnimatedBox>
          <p>
            The Advanced Diploma in Economics is an intensive, career-focused
            program designed for school leavers and working professionals
            seeking high-level skills in Economics.
          </p>
          <p className="mt-4">
            The program delves into advanced economic theories, strategic
            applications, and emerging global trends. The curriculum is
            scaffolded to progressively build complexity and integrate knowledge
            across business and economic domains.
          </p>
        </AnimatedBox>

        {/* Learning Outcomes */}
        <SectionTitle title="Program Learning Outcomes (PLOs)" />
        <AnimatedBox>
          <ul className="ml-6 space-y-3 list-decimal">
            <li>
              Analyze complex economic and business problems using advanced
              frameworks.
            </li>
            <li>
              Design and implement sophisticated economic strategies and
              solutions.
            </li>
            <li>
              Evaluate ethical, social, and global implications in professional
              practice.
            </li>
            <li>
              Synthesize information from multiple sources to support
              decision-making.
            </li>
            <li>
              Communicate complex economic concepts effectively to diverse
              audiences.
            </li>
            <li>Lead and collaborate in cross-functional and virtual teams.</li>
          </ul>
        </AnimatedBox>

        {/* Teaching Methodology */}
        <SectionTitle title="Teaching & Learning Methodology" />
        <AnimatedBox>
          <ul className="ml-6 space-y-3 list-disc">
            <li>
              <b>LMS:</b> Canvas / Moodle / Blackboard
            </li>
            <li>
              <b>Asynchronous:</b> Recorded lectures, readings, simulations
            </li>
            <li>
              <b>Synchronous:</b> Live Zoom / Teams sessions
            </li>
            <li>
              <b>Assessment:</b> Case studies, research papers, projects,
              presentations, portfolios, peer reviews
            </li>
          </ul>
        </AnimatedBox>

        {/* Student Support */}
        <SectionTitle title="Student Support Services" />
        <AnimatedBox>
          <ul className="ml-6 space-y-3 list-disc">
            <li>Dedicated Program Advisor</li>
            <li>Online tutoring & academic writing support</li>
            <li>Technical & LMS support</li>
            <li>Digital library & research resources</li>
            <li>Career services, CV reviews & mock interviews</li>
          </ul>
        </AnimatedBox>

        {/* Admission */}
        <SectionTitle title="Admission Requirements" />
        <AnimatedBox>
          <ul className="ml-6 space-y-3 list-disc">
            <li>Completed application form</li>
            <li>Current CV / Resume</li>
            <li>Minimum 3 passes in GCE A/L</li>
            <li>OR SLQF Level 03 Diploma (minimum 30 credits)</li>
          </ul>
        </AnimatedBox>

        {/* Curriculum */}
        <SectionTitle title="Detailed Curriculum" />
        <AnimatedBox>
          <Semester
            title="Semester 1 – Foundations of Business and Economics (15 Credits)"
            items={[
              "Management Process & Practices",
              "Communication & Decision Making",
              "Basic Principles of Business",
              "Economics for Business",
              "Operations Management",
            ]}
          />
          <Semester
            title="Semester 2 – Core Business Management & Microeconomic Analysis (15 Credits)"
            items={[
              "Consumer Behavior in Business",
              "Business Strategies",
              "Management Information Systems",
              "Warehouse Management",
              "Transportation and Distribution Management",
            ]}
          />
          <Semester
            title="Semester 3 – Macroeconomics & Strategic Business Management (15 Credits)"
            items={[
              "Managing Human Capital",
              "Sustainable Supply Chain Management",
              "Research & Product Development",
              "Data Analysis",
              "Financial Analysis",
            ]}
          />
          <Semester
            title="Semester 4 – Advanced Topics, Research & Application (15 Credits)"
            items={[
              "Risk Management",
              "International Business and Trade Economics",
              "Basic Concept of HRM",
              "Research Project / Optional Subjects",
            ]}
          />
        </AnimatedBox>
      </div>

      <Footer />
    </div>
  );
}

export default ADEcon;

/* ----------------- REUSABLE HELPERS ----------------- */

function SectionTitle({ title }: { title: string }) {
  return (
    <h1 className="font-catamaran sm:text-[28px] mt-10 mb-4 text-[22px] uppercase text-sky-900 font-bold">
      {title}
    </h1>
  );
}

function AnimatedBox({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={fadeIn("up", 0.6)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="p-6 rounded-lg bg-gradient-to-r from-sky-400/30 via-cyan-400/30 to-blue-400/30 shadow-custom text-[16px] sm:text-[18px] font-catamaran"
    >
      {children}
    </motion.div>
  );
}

function Semester({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-6">
      <h3 className="mb-2 font-bold text-sky-700">{title}</h3>
      <ul className="ml-6 space-y-1 list-disc">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
