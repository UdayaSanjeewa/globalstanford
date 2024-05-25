import Card from "../components/BachelorDegrees/Card";
import Navbar from "../components/Navbar";
import SubNavbar from "../components/SubNavbar";
import Footer from "../components/Footer";
import BachelorsDegreeHeading from "../components/BachelorDegrees/BachelorsDegreeHeading";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function BachelorsDegrees() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 210, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="bg-gradient-to-r from-blue-900/10 to-blue-900/10 ">
      <Navbar />
      <SubNavbar/>
      <BachelorsDegreeHeading title="Bachelor’s Degrees" />
      <Card />
      <Footer />
    </div>
  );
}

export default BachelorsDegrees;
