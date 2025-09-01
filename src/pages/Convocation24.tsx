import Hero from "../components/Hero";
import ProfileSection from "../components/ProfileSection";
import MarketSection from "../components/MarketSection";
import Gallery from "../components/Gallery";
import Navbar from "../components/Navbar";
import SubNavbar from "../components/SubNavbar";

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
      <Gallery />
    </div>
  );
}

export default Convocation24;
