import Navbar from "../components/Navbar";
import SubNavbar from "../components/SubNavbar";
import Footer from "../components/Footer";
import BlueBox from "../components/PhdDba/DOPBlueBox";
import DOPDetails from "../components/PhdDba/DOPDetails";

function DoctorOfPhilosophy() {
  return (
    <div className="bg-gradient-to-r  from-blue-900/10  to-blue-900/10  overflow-hidden ">
      <Navbar />
      <SubNavbar />
      <BlueBox/>
      <DOPDetails />
      <Footer />
    </div>
  );
}

export default DoctorOfPhilosophy;
