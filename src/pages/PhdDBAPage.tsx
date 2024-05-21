import Navbar from "../components/Navbar";
import SubNavbar from "../components/SubNavbar";
import Footer from "../components/Footer";
import PhdDBAGallery from "../components/PhdDba/PhdDBAGallery";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import BachelorsDegreeHeading from "../components/BachelorDegrees/BachelorsDegreeHeading";

function PhdDBAPage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 210, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="flex flex-col overflow-hidden bg-gradient-to-r from-blue-900/40 to-sky-900/40">
      <Navbar />
      <SubNavbar/>
      <BachelorsDegreeHeading title="Phd/DBA"/>
      <PhdDBAGallery />
      <Footer />
    </div>
  );
}

export default PhdDBAPage;
