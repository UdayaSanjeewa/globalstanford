import Navbar from "../components/Navbar";
import SubNavbar from "../components/SubNavbar";
import Footer from "../components/Footer";
import BlueBox from "../components/BachelorDegrees/BlueBox";
import DegreeDetails from "../components/BachelorDegrees/DegreeDetails";

function BachelorsOfScienceInNursing() {
  return (
    <div className="bg-gradient-to-r from-blue-900/10  to-blue-900/10  ">
      <Navbar />
      <SubNavbar/>
      <BlueBox />
      <DegreeDetails />
      <Footer />
    </div>
  );
}

export default BachelorsOfScienceInNursing;
