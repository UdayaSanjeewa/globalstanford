import Navbar from "../components/Navbar";
import SubNavbar from "../components/SubNavbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

/* Images */
import backgroundImg from "../../public/diplomas/background.jpeg";

function ADIS() {
  return (
    <div className="bg-gradient-to-r from-blue-900/10 to-blue-900/10">
      <Navbar />
      <SubNavbar />

      {/* HERO SECTION */}
      {/* <div className="relative h-[420px]">
        <div className="absolute inset-0 bg-[#003478] opacity-90 flex items-center">
          <div className="ml-[6%] text-white max-w-4xl">
            <h1 className="text-[26px] sm:text-[40px] font-extrabold font-catamaran">
              Advanced Diploma in Information Systems
            </h1>
            <p className="mt-4 text-[16px] sm:text-[18px]">
              SLQF Level 04 • 4 Semesters • 60 Credits • Online / Blended
            </p>
          </div>
        </div>
      </div> */}
      {/* HERO SECTION */}
      <div
        className="relative h-[420px] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        {/* Blue overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#003478]/95 to-[#003478]/70 flex items-center">
          <div className="ml-[6%] text-white max-w-4xl">
            <h1 className="text-[26px] sm:text-[40px] font-extrabold font-catamaran">
              Advanced Diploma in Information Systems
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
            The Advanced Diploma in Information Systems is an intensive,
            career-focused program designed for school leavers and working
            professionals seeking advanced skills in Information Technology.
          </p>
          <p className="mt-4">
            The curriculum moves beyond foundational knowledge and focuses on
            advanced theories, strategic applications, and emerging trends using
            a scaffolded learning model.
          </p>
        </AnimatedBox>

        {/* Learning Outcomes */}
        <SectionTitle title="Program Learning Outcomes (PLOs)" />
        <AnimatedBox>
          <ul className="ml-6 space-y-3 list-decimal">
            <li>
              Analyze complex problems using advanced theoretical frameworks.
            </li>
            <li>Design and implement real-world solutions.</li>
            <li>Evaluate ethical, social, and global implications.</li>
            <li>Synthesize information to support decision-making.</li>
            <li>Communicate effectively with diverse audiences.</li>
            <li>Lead and collaborate in cross-functional teams.</li>
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
              <b>Assessment:</b> Case studies, projects, portfolios,
              presentations
            </li>
          </ul>
        </AnimatedBox>

        {/* Student Support */}
        <SectionTitle title="Student Support Services" />
        <AnimatedBox>
          <ul className="ml-6 space-y-3 list-disc">
            <li>Dedicated Program Advisor</li>
            <li>Online tutoring & writing center</li>
            <li>Technical & LMS support</li>
            <li>Digital library & research databases</li>
            <li>Career services & student communities</li>
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
            title="Semester 1"
            items={[
              "Management Principles",
              "Business Communication",
              "Introduction to Management Information Systems",
              "Financial Accounting",
              "Business Analytics",
            ]}
          />

          <Semester
            title="Semester 2"
            items={[
              "Business Process Management",
              "Data Management & Database Systems",
              "Information Systems Development",
              "Economics for Business Managers",
              "Marketing Management",
            ]}
          />

          <Semester
            title="Semester 3"
            items={[
              "Enterprise Architecture & Digital Innovation",
              "Data & Application Security",
              "Operations Management",
              "Human-Centred Design & UX",
              "Business Research Methods",
            ]}
          />

          <Semester
            title="Semester 4"
            items={[
              "Research Project / Capstone",
              "Strategic Management & IS",
              "Management of Human Capital",
              "Legal & Ethical Aspects of IS",
              "Business Practicum",
            ]}
          />
        </AnimatedBox>
      </div>

      <Footer />
    </div>
  );
}

export default ADIS;

/* ----------------- REUSABLE COMPONENTS ----------------- */

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
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
