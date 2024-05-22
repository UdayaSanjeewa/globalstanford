import Navbar from "../components/Navbar";
import SubNavbar from "../components/SubNavbar";
import Footer from "../components/Footer";
import AboutUsHeader from "../components/AboutUs/AboutUsHeader";
import AboutUsContent from "../components/AboutUs/AboutUsContent";

function AboutUs() {
  return (
    <div className=" bg-gradient-to-r  from-blue-900/10  to-blue-900/10  overflow-hidden">
      <Navbar />
      <SubNavbar />
      <AboutUsHeader />
      <AboutUsContent />
      <Footer />
    </div>
  );
}

export default AboutUs;
