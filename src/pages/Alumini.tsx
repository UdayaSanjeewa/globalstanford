import Navbar from "../components/Navbar";
import SubNavbar from "../components/SubNavbar";
import Footer from "../components/Footer";
import AlumniDetails from "../components/Alumni/AluminiDetails";

function Alumni() {
  return (
    <div className="bg-gradient-to-r from-blue-700/20 to-sky-700/20">
      <Navbar />
      <SubNavbar />
      <AlumniDetails />
      <Footer />
    </div>
  );
}

export default Alumni;
