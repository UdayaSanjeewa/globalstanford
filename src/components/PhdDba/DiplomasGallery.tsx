import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

/* Images */
import imgTest from "../../assets/PhD.jpg";

const diplomas = [
  {
    title: "Advanced Diploma in Information System",
    img: imgTest,
    link: "/adis",
  },
  {
    title: "Advanced Diploma in Logistic & Supply Management",
    img: imgTest,
    link: "/adlsm",
  },
  {
    title: "Advanced Diploma in Microfinance",
    img: imgTest,
    link: "/admf",
  },
  {
    title: "Advanced Diploma in Tourism and Hospitality",
    img: imgTest,
    link: "/adth",
  },
  {
    title: "Advanced Diploma in Accounting & Finance",
    img: imgTest,
    link: "/adaf",
  },
  {
    title: "Advanced Diploma in Business Management",
    img: imgTest,
    link: "/adbm",
  },
  {
    title: "Advanced Diploma in English",
    img: imgTest,
    link: "/ade",
  },
  {
    title: "Advanced Diploma in Human Resource Management (HRM)",
    img: imgTest,
    link: "/adhrm",
  },
  {
    title: "Advanced Diploma in ICT",
    img: imgTest,
    link: "/adic",
  },
];

function DiplomasGallery() {
  return (
    <motion.div className="grid grid-cols-1 gap-8 px-6 my-20 sm:grid-cols-2 md:grid-cols-3 md:px-20">
      {diplomas.map((diploma, idx) => (
        <motion.div
          key={idx}
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Link to={diploma.link}>
            <div className="overflow-hidden transition-transform duration-300 cursor-pointer shadow-custom rounded-2xl hover:scale-105">
              <img
                src={diploma.img}
                alt={diploma.title}
                className="object-cover w-full h-56"
              />
              <div className="h-20 bg-[#007FFF] flex items-center justify-center">
                <h1 className="px-2 font-mono text-sm font-extrabold leading-tight text-center text-white sm:text-base">
                  {diploma.title}
                </h1>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default DiplomasGallery;
