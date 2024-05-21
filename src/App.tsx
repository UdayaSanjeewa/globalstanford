import "./App.css";
import Footer from "./components/Footer";
import ImageGrallery from "./components/ImageGrallery";
import Navbar from "./components/Navbar";
import SubNavbar from "./components/SubNavbar";
import Welcome from "./components/Welcome";
import Map from "../src/components/googlemap/Map";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SectionFAQ from "./components/FAQ";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="flex flex-col overflow-hidden bg-gradient-to-r from-blue-900/40 to-sky-900/40 ">
      <div>
        <Navbar />
        <SubNavbar />
      </div>
      <div>
        <Welcome />
      </div>
      <div className="gray-border">
        <ImageGrallery />
      </div>
      <div className="gray-border">
        <Map />
      </div>
      {/* Added FaQ segment as a proposal */}
      <div className="gray-border">
        <SectionFAQ/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
