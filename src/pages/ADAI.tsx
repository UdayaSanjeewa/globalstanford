import Navbar from "../components/Navbar";
import SubNavbar from "../components/SubNavbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

/* Images */
import backgroundImg from "../../public/diplomas/background.jpeg";

function ADAI() {
  return (
    <div className="bg-gradient-to-r from-purple-900/10 to-purple-900/10">
      <Navbar />
      <SubNavbar />

      {/* HERO */}
      {/* <div className="relative h-[420px]">
        <div className="absolute inset-0 bg-[#5A2D82] opacity-90 flex items-center">
          <div className="ml-[6%] text-white max-w-4xl">
            <h1 className="text-[26px] sm:text-[40px] font-extrabold font-catamaran">
              Advanced Diploma in Artificial Intelligence (AI)
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
        {/* Purple AI gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#5A2D82]/95 to-[#5A2D82]/70 flex items-center">
          <div className="ml-[6%] text-white max-w-4xl">
            <h1 className="text-[26px] sm:text-[40px] font-extrabold font-catamaran">
              Advanced Diploma in Artificial Intelligence (AI)
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
            The Advanced Diploma in Artificial Intelligence is an intensive,
            career-focused program designed for school leavers and working
            professionals seeking high-level skills in AI. It moves beyond
            foundational knowledge, exploring advanced theories, strategic
            applications, and emerging AI trends.
          </p>
          <p className="mt-4">
            The scaffolded curriculum ensures students progressively build
            complexity, integrating knowledge across AI algorithms, deep
            learning, machine learning, and theoretical frameworks.
          </p>
        </AnimatedBox>

        {/* Learning Outcomes */}
        <SectionTitle title="Program Learning Outcomes (PLOs)" />
        <AnimatedBox>
          <ul className="ml-6 space-y-3 list-decimal">
            <li>
              Analyze complex AI problems using advanced theoretical frameworks
              and research methodologies.
            </li>
            <li>
              Design and implement sophisticated AI solutions for real-world
              challenges.
            </li>
            <li>
              Evaluate ethical, social, and global implications of AI practices.
            </li>
            <li>
              Synthesize information from diverse sources to support innovative
              AI decision-making.
            </li>
            <li>
              Communicate complex AI information effectively to specialist and
              non-specialist audiences.
            </li>
            <li>
              Lead and collaborate in virtual and cross-functional teams to
              achieve AI project objectives.
            </li>
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
              <b>Asynchronous:</b> Recorded lectures, curated readings,
              interactive simulations, discussion boards
            </li>
            <li>
              <b>Synchronous:</b> Optional live virtual classes for Q&A, guest
              lectures, and collaborative projects
            </li>
            <li>
              <b>Assessment:</b> Case studies, research papers, individual &
              group projects, professional presentations, portfolio artifacts,
              peer reviews
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
            <li>
              Career services including workshops, resume reviews, and mock
              interviews
            </li>
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
            <li>
              OR earned diploma of SLQF Level 03 or equivalent (minimum 30
              credits)
            </li>
          </ul>
        </AnimatedBox>

        {/* Curriculum */}
        <SectionTitle title="Detailed Curriculum" />
        <AnimatedBox>
          <Semester
            title="Semester 1 (15 credits)"
            items={[
              "Mathematical Foundations for AI (4 credits)",
              "History & Philosophical Foundations of AI (3 credits)",
              "Classical AI & Symbolic Reasoning (4 credits)",
              "Computational Statistics for Data Analysis (4 credits)",
            ]}
          />
          <Semester
            title="Semester 2 (15 credits)"
            items={[
              "Theoretical Foundations of Machine Learning (4 credits)",
              "Advanced Machine Learning Algorithms (4 credits)",
              "Introduction to Neural Networks & Deep Learning (4 credits)",
              "AI for Sequential Decision Making (3 credits)",
            ]}
          />
          <Semester
            title="Semester 3 (15 credits)"
            items={[
              "Deep Learning Theory & Architectures (4 credits)",
              "Natural Language Processing: Theory & Models (4 credits)",
              "AI Ethics, Governance, and Society (3 credits)",
              "Advanced Reinforcement Learning (4 credits)",
            ]}
          />
          <Semester
            title="Semester 4 (15 credits)"
            items={[
              "Generative AI & Diffusion Models (4 credits)",
              "AI Systems & Scalability (3 credits)",
              "Neurosymbolic AI (4 credits)",
              "Capstone Dissertation (Theoretical) (4 credits)",
            ]}
          />
        </AnimatedBox>
      </div>

      <Footer />
    </div>
  );
}

export default ADAI;

/* ----------------- REUSABLE HELPERS ----------------- */

function SectionTitle({ title }: { title: string }) {
  return (
    <h1 className="font-catamaran sm:text-[28px] mt-10 mb-4 text-[22px] uppercase text-purple-900 font-bold">
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
      className="p-6 rounded-lg bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-purple-500/30 shadow-custom text-[16px] sm:text-[18px] font-catamaran"
    >
      {children}
    </motion.div>
  );
}

function Semester({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-6">
      <h3 className="mb-2 font-bold text-purple-700">{title}</h3>
      <ul className="ml-6 space-y-1 list-disc">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
