import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SubNavbar from "../components/SubNavbar";
import DiplomasGallery from "../components/PhdDba/DiplomasGallery";

function DiplomasPage() {
  return (
    <div className="bg-gradient-to-r from-blue-900/10 to-blue-900/10 ">
      <Navbar />
      <SubNavbar/>
      <DiplomasGallery />
      <Footer />
    </div>
  );
}

export default DiplomasPage;
