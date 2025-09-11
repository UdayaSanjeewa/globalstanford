import Hero from "../components/Hero";
import ProfileSection from "../components/ProfileSection";
import MarketSection from "../components/MarketSection";
import Navbar from "../components/Navbar";
import SubNavbar from "../components/SubNavbar";
import Footer from "../components/Footer";
import Gallery2024 from "../components/Gallery2024";

function Convocation24() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div>
        <Navbar />
        <SubNavbar />
      </div>
      <Hero />
      <ProfileSection />
      <MarketSection />
      <Gallery2024 />
      <Footer />
    </div>
  );
}

export default Convocation24;
