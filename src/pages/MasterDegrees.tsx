import Navbar from "../components/Navbar";
import SubNavbar from "../components/SubNavbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function MasterDegrees() {
  return (
    <div className="bg-gradient-to-r from-blue-900/30 via-sky-900/50 to-blue-900/30 ">
      <Navbar />

      <SubNavbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MasterDegrees;
