import Navbar from "../components/Navbar";
import SubNavbar from "../components/SubNavbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

/* Images */
import backgroundImg from "../../public/diplomas/background.jpeg";

function ADTH() {
  return (
    <div className="bg-gradient-to-r from-blue-900/10 to-blue-900/10">
      <Navbar />
      <SubNavbar />

      {/* HERO */}
      {/* <div className="relative h-[420px]">
        <div className="absolute inset-0 bg-[#003478] opacity-90 flex items-center">
          <div className="ml-[6%] text-white max-w-4xl">
            <h1 className="text-[26px] sm:text-[40px] font-extrabold font-catamaran">
              Advanced Diploma in Tourism and Hospitality
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
        {/* Blue hospitality gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#003478]/95 to-[#003478]/70 flex items-center">
          <div className="ml-[6%] text-white max-w-4xl">
            <h1 className="text-[26px] sm:text-[40px] font-extrabold font-catamaran">
              Advanced Diploma in Tourism and Hospitality
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
            The Advanced Diploma in Tourism and Hospitality is an intensive,
            career-focused program designed for school leavers and working
            professionals seeking specialized, high-level skills in tourism and
            hospitality.
          </p>
          <p className="mt-4">
            The program advances beyond foundational knowledge, emphasizing
            strategic applications, emerging industry trends, and integrated
            professional practice through a scaffolded learning model.
          </p>
        </AnimatedBox>

        {/* Learning Outcomes */}
        <SectionTitle title="Program Learning Outcomes (PLOs)" />
        <AnimatedBox>
          <ul className="ml-6 space-y-3 list-decimal">
            <li>Analyze complex challenges in tourism and hospitality.</li>
            <li>Design and implement effective industry solutions.</li>
            <li>Evaluate ethical, social, and global implications.</li>
            <li>Synthesize information for innovative decision-making.</li>
            <li>Communicate professionally across diverse audiences.</li>
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
            <li>Online tutoring & writing support</li>
            <li>Technical & LMS assistance</li>
            <li>Digital library & research databases</li>
            <li>Career guidance & student communities</li>
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
            title="Semester 1 – Foundations of Business Management (15 Credits)"
            items={[
              "Management Process & Practices",
              "Communication & Decision Making",
              "Basic Principles of Business",
              "Economics for Business",
              "Principles of Marketing",
            ]}
          />

          <Semester
            title="Semester 2 – Core Business & Service Practices (15 Credits)"
            items={[
              "Brand & Service Management",
              "Consumer Behavior in Business",
              "Business Strategies",
              "Management Information Systems",
            ]}
          />

          <Semester
            title="Semester 3 – Advanced Marketing & Management (15 Credits)"
            items={[
              "Marketing Management",
              "Managing Human Capital",
              "Research & Product Development",
              "Data Analysis",
              "Financial Analysis",
            ]}
          />

          <Semester
            title="Semester 4 – Integration & Application (15 Credits)"
            items={[
              "Business Strategy & Strategic Marketing",
              "Risk Management",
              "Change Management & Front Office Management",
              "Research Project / Optional Subjects",
            ]}
          />
        </AnimatedBox>
      </div>

      <Footer />
    </div>
  );
}

export default ADTH;

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
