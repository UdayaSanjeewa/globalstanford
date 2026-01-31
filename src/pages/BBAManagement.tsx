import BBADetails from "../components/BachelorDegrees/BBADetails";
import BlueBoxBBA from "../components/BachelorDegrees/BlueBoxBBA";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SubNavbar from "../components/SubNavbar";

function BBAManagement() {
  return (
    <div className="overflow-hidden bg-gradient-to-r from-blue-900/10 to-blue-900/10">
      <Navbar />
      <SubNavbar/>
      <BlueBoxBBA />
      <BBADetails />
      <Footer />
    </div>
  );
}

export default BBAManagement;
