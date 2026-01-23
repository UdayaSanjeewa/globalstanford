import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

/* Images */
import img01 from "../../../public/diplomas/1.png";
import img02 from "../../../public/diplomas/2.png";
import img03 from "../../../public/diplomas/3.png";
import img04 from "../../../public/diplomas/4.png";
import img06 from "../../../public/diplomas/6.png";
import img07 from "../../../public/diplomas/7.png";
import img09 from "../../../public/diplomas/9.png";
import img10 from "../../../public/diplomas/10.png";
import img12 from "../../../public/diplomas/12.png";

const diplomas = [
  {
    title: "Advanced Diploma in Information System",
    img: img01,
    link: "/adis",
  },
  {
    title: "Advanced Diploma in Logistic & Supply Management",
    img: img02,
    link: "/adlsm",
  },
  {
    title: "Advanced Diploma in Microfinance",
    img: img03,
    link: "/admf",
  },
  {
    title: "Advanced Diploma in Tourism and Hospitality",
    img: img04,
    link: "/adth",
  },
  {
    title: "Advanced Diploma in Accounting & Finance",
    img: img10,
    link: "/adaf",
  },
  {
    title: "Advanced Diploma in Business Management",
    img: img06,
    link: "/adbm",
  },
  {
    title: "Advanced Diploma in English",
    img: img07,
    link: "/ade",
  },
  {
    title: "Advanced Diploma in Human Resource Management (HRM)",
    img: img12,
    link: "/adhrm",
  },
  {
    title: "Advanced Diploma in ICT",
    img: img09,
    link: "/adict",
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
