import { useLocation } from "react-router-dom";
import MainHeading from "./MastersMainHeading";
import MastersGallery from "./MastersPageGallery";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

function MasterDegreeMain() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 210, behavior: "smooth" });
  }, [pathname]);

  return (
    <motion.div
      variants={fadeIn("up", 0.6)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
    >
      {/* Masters degree page components */}
      <MainHeading />
      <MastersGallery />
    </motion.div>
  );
}

export default MasterDegreeMain;
