import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourcesGallery from "../components/PhdDba/CourcesGallery";
import SubNavbar from "../components/SubNavbar";

function CourcesPage() {
  return (
    <div className="bg-gradient-to-r from-blue-900/30 via-sky-900/50 to-blue-900/30 ">
      <Navbar />
      <SubNavbar/>
      <CourcesGallery />
      <Footer />
    </div>
  );
}

export default CourcesPage;
