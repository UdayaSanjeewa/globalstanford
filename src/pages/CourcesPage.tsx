import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourcesGallery from "../components/PhdDba/CourcesGallery";
import SubNavbar from "../components/SubNavbar";

function CourcesPage() {
  return (
    <div className="bg-gradient-to-r from-blue-900/10  to-blue-900/10 ">
      <Navbar />
      <SubNavbar/>
      <CourcesGallery />
      <Footer />
    </div>
  );
}

export default CourcesPage;
