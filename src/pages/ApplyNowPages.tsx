import Navbar from "../components/Navbar";
import SubNavbar from "../components/SubNavbar";
import Footer from "../components/Footer";
import ApplyNowHeading from "../components/ApplyNow/ApplyNowHeading";
import ApplicationForm from "../components/ApplyNow/ApplyNow";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function ApplyNowPage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      <Navbar />
      <SubNavbar />
      <ApplyNowHeading />
      <ApplicationForm />
      <Footer />
    </>
  );
}

export default ApplyNowPage;
