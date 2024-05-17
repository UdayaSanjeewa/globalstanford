import uni from "../../assets/uni.jpg";
import { TypeAnimation } from "react-type-animation";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function AboutUsHeader() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="md:h-[90vh] h-[70vh] relative overflow-hidden">
      {/* Adding background image and blue overlay to the image */}
      <img src={uni} className="object-cover w-full h-full" alt="" />
      {/* overLay */}
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-sky-800/40 via-sky-800/30 to-sky-800/40">
        {/* content */}
        <MainText />
      </div>
    </div>
  );
}

const MainText = () => {
  return (
    <div className="relative flex flex-col justify-center w-[85%] max-w-[800px] h-full items-center mx-auto gap-5 text-center px-5">
      <h1 className="max-w-screen-sm text-white title">About US,</h1>

      <TypeAnimation
        sequence={["", 1000, "Global Stanford Campus"]}
        speed={20}
        repeat={Infinity}
        className="title"
      />
    </div>
  );
};

export default AboutUsHeader;
