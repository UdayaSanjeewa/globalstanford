import Navbar from "../components/Navbar";
import SubNavbar from "../components/SubNavbar";
import Footer from "../components/Footer";
import AlumniDetails from "../components/Alumni/AluminiDetails";

function Alumni() {
  return (
    <div className="bg-gradient-to-r from-blue-900/10  to-blue-900/10 ">
      <Navbar />
      <SubNavbar />
      <AlumniDetails />
      <Footer />
    </div>
  );
}

export default Alumni;
