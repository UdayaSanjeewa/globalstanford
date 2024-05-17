import BBADetails from "../components/BachelorDegrees/BBADetails";
import BlueBoxBBA from "../components/BachelorDegrees/BlueBoxBBA";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SubNavbar from "../components/SubNavbar";

function BBAManagement() {
  return (
    <div className="bg-gradient-to-r from-blue-700/20 to-sky-700/20">
      <Navbar />
      <SubNavbar/>
      <BlueBoxBBA />
      <BBADetails />
      <Footer />
    </div>
  );
}

export default BBAManagement;
