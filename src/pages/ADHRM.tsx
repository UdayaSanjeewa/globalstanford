import Navbar from "../components/Navbar";
import SubNavbar from "../components/SubNavbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function ADHRM() {
  return (
    <div className="bg-gradient-to-r from-blue-900/10 to-blue-900/10">
      <Navbar />
      <SubNavbar />

      {/* HERO */}
      <div className="relative h-[420px]">
        <div className="absolute inset-0 bg-[#003478] opacity-90 flex items-center">
          <div className="ml-[6%] text-white max-w-4xl">
            <h1 className="text-[26px] sm:text-[40px] font-extrabold font-catamaran">
              Advanced Diploma in Human Resource Management (HRM)
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
            The Advanced Diploma in Human Resource Management is an intensive, career-focused program
            designed for school leavers and working professionals seeking high-level skills in HRM.
            The curriculum goes beyond foundational knowledge, exploring advanced theories, strategic
            applications, and emerging trends in HRM.
          </p>
          <p className="mt-4">
            Using a scaffolded learning model, students progressively build complexity and integrate
            knowledge across organizational, leadership, and HR domains.
          </p>
        </AnimatedBox>

        {/* Learning Outcomes */}
        <SectionTitle title="Program Learning Outcomes (PLOs)" />
        <AnimatedBox>
          <ul className="ml-6 space-y-3 list-decimal">
            <li>Analyze complex problems in HRM using advanced theoretical frameworks and research methodologies.</li>
            <li>Design and implement sophisticated HR strategies addressing real-world challenges.</li>
            <li>Evaluate ethical, social, and global implications of professional HR practices.</li>
            <li>Synthesize information from diverse sources to support decision-making.</li>
            <li>Communicate complex HR information effectively to specialist and non-specialist audiences.</li>
            <li>Lead and collaborate in virtual and cross-functional teams to achieve HR objectives.</li>
          </ul>
        </AnimatedBox>

        {/* Teaching Methodology */}
        <SectionTitle title="Teaching & Learning Methodology" />
        <AnimatedBox>
          <ul className="ml-6 space-y-3 list-disc">
            <li><b>LMS:</b> Canvas / Moodle / Blackboard</li>
            <li><b>Asynchronous:</b> Recorded lectures, curated readings, interactive simulations, discussion boards</li>
            <li><b>Synchronous:</b> Optional live virtual classes for Q&A, guest lectures, and collaborative work</li>
            <li>
              <b>Assessment:</b> Case studies, research papers, individual & group projects,
              professional presentations, portfolio artifacts, peer reviews
            </li>
          </ul>
        </AnimatedBox>

        {/* Student Support */}
        <SectionTitle title="Student Support Services" />
        <AnimatedBox>
          <ul className="ml-6 space-y-3 list-disc">
            <li>Dedicated Program Advisor</li>
            <li>Online tutoring & writing center support</li>
            <li>Technical support for LMS and access issues</li>
            <li>Online library & research resources</li>
            <li>Career services including workshops, resume reviews, and mock interviews</li>
            <li>Online student community for networking</li>
          </ul>
        </AnimatedBox>

        {/* Admission */}
        <SectionTitle title="Admission Requirements" />
        <AnimatedBox>
          <ul className="ml-6 space-y-3 list-disc">
            <li>Completed application form</li>
            <li>Current resume/CV</li>
            <li>Minimum 3 passes from GCE A/L</li>
            <li>OR earned diploma of SLQF Level 03 or equivalent (minimum 30 credits)</li>
          </ul>
        </AnimatedBox>

        {/* Curriculum */}
        <SectionTitle title="Detailed Curriculum" />
        <AnimatedBox>
          <Semester
            title="Semester 1 – Foundations of Business and HRM (15 Credits)"
            items={[
              "Management Process & Practices",
              "Communication & Decision Making",
              "Basic Principles of Business",
              "Introduction & Roles of HRM",
              "Fundamentals of Labor Laws",
            ]}
          />
          <Semester
            title="Semester 2 – Core HRM Practices and Business Functions (15 Credits)"
            items={[
              "Recruitment and Selection",
              "Consumer Behavior in Business",
              "Business Strategies",
              "Management Information System",
              "Motivation (Theory of Motivation)",
            ]}
          />
          <Semester
            title="Semester 3 – Advanced HRM and Strategic Management (15 Credits)"
            items={[
              "Managing Human Capital",
              "Data Analysis & Performance Evaluation",
              "Talent Management and Leadership",
              "Strategic Human Resource Management",
              "International Human Resource Management",
            ]}
          />
          <Semester
            title="Semester 4 – Specialization, Ethics, and Practical Application (15 Credits)"
            items={[
              "Organizational Development",
              "Change Management",
              "Business Ethics and Corporate Governance",
              "Research Project / Optional Subjects",
            ]}
          />
        </AnimatedBox>
      </div>

      <Footer />
    </div>
  );
}

export default ADHRM;

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

function Semester({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
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
