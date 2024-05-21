import Navbar from "../components/Navbar";
import SubNavbar from "../components/SubNavbar";
import Footer from "../components/Footer";
import BlueBox from "../components/PhdDba/DOPBlueBox";
import DOPDetails from "../components/PhdDba/DOPDetails";

function DoctorOfPhilosophy() {
  return (
    <div className="bg-gradient-to-r from-blue-900/30 via-sky-900/50 to-blue-900/30 ">
      <Navbar />
      <SubNavbar />
      <BlueBox/>
      <DOPDetails />
      <Footer />
    </div>
  );
}

export default DoctorOfPhilosophy;
