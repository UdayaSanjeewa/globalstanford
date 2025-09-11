import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SubNavbar from "../components/SubNavbar";
import ProfileSection2025 from "../components/ProfileSection2025";
import MarketSection2025 from "../components/MarketSection2025";
import Hero2025 from "../components/Hero2025";
import Gallery2025 from "../components/Gallery2025";

function Convocation25() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div>
        <Navbar />
        <SubNavbar />
      </div>
      <Hero2025 />
      <ProfileSection2025 />
      <MarketSection2025 />
      <Gallery2025 />
      <Footer />
    </div>
  );
}

export default Convocation25;
