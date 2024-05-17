import Navbar from "../components/Navbar";
import SubNavbar from "../components/SubNavbar";
import Footer from "../components/Footer";
import BlueBox from "../components/PhdDba/DOPBlueBox";
import DOPDetails from "../components/PhdDba/DOPDetails";

function DoctorOfPhilosophy() {
  return (
    <div className="bg-gradient-to-r from-blue-700/20 to-sky-700/20">
      <Navbar />
      <SubNavbar />
      <BlueBox/>
      <DOPDetails />
      <Footer />
    </div>
  );
}

export default DoctorOfPhilosophy;
