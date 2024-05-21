import { useLocation } from "react-router-dom";
import MainHeading from "./MastersMainHeading";
import MastersGallery from "./MastersPageGallery";
import { useEffect } from "react";
import { motion } from "framer-motion";


function MasterDegreeMain() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 210, behavior: "smooth" });
  }, [pathname]);

  return (
    <motion.div
      
    >
      {/* Masters degree page components */}
      <MainHeading />
      <MastersGallery />
    </motion.div>
  );
}

export default MasterDegreeMain;
