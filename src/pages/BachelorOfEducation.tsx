import Navbar from "../components/Navbar";
import SubNavbar from "../components/SubNavbar";
import Footer from "../components/Footer";
import BlueBoxEducation from "../components/BachelorDegrees/BlueBoxEducation";
import EducationDetails from "../components/BachelorDegrees/EducationDetails";

function BachelorsOfEducation() {
  return (
    <div className="bg-gradient-to-r from-blue-900/30 via-sky-900/50 to-blue-900/30 ">
      <Navbar />
      <SubNavbar />
      <BlueBoxEducation />
      <EducationDetails />
      <Footer />
    </div>
  );
}

export default BachelorsOfEducation;
