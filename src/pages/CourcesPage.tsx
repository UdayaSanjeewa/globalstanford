import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourcesGallery from "../components/PhdDba/CourcesGallery";

function CourcesPage() {
  return (
    <div className="bg-gradient-to-r from-blue-700/20 to-sky-700/20">
      <Navbar />
      <CourcesGallery />
      <Footer />
    </div>
  );
}

export default CourcesPage;
