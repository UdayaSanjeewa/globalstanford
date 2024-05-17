import Navbar from "../components/Navbar";
import SubNavbar from "../components/SubNavbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function MasterDegrees() {
  return (
    <div className="bg-gradient-to-r from-blue-700/20  to-sky-700/20">
      <Navbar />

      <SubNavbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MasterDegrees;
