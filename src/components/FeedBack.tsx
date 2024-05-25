import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/8.jpg";
import img2 from "../assets/9.jpg";
import img3 from "../assets/10.jpg";
import img4 from "../assets/11.jpg";
import img5 from "../assets/12.jpg";

function FeedBack() {
  return (
    <>
      {/* First div - visible on small screens only */}
      <div className="flex md:hidden flex-col my-2 py-2 mx-4 md:gap-6 pb-10">
      <div className="md:w-[52%] w-full text-center md:text-left md:pt-1 pt-[10px] px-10 md:items-center md:pr-5 md:pb-5 md:pl-5">
      <h2 className="pb-3 text-[1.14rem] md:text-[2.0rem] leading-[1.1] font-semibold tracking-wide text-[#003478] animate-typing overflow-hidden 
  whitespace-nowrap pr-5 font-serif">Student FeedBacks </h2></div>
        <div>
          <img
            className="object-cover w-full h-full shadow-custom rounded-2xl my-2"
            src={img1}
          />
        </div>
        <div>
          <img
            className="object-cover w-full h-full shadow-custom rounded-2xl my-2"
            src={img2}
          />
        </div>
        <div>
          <img
            className="object-cover w-full h-full shadow-custom rounded-2xl my-2"
            src={img3}
          />
        </div>
        <div>
          <img
            className="object-cover w-full h-full shadow-custom rounded-2xl my-2"
            src={img4}
          />
        </div>
        <div>
          <img
            className="object-cover w-full h-full shadow-custom rounded-2xl my-2"
            src={img5}
          />
        </div>
      </div>

      {/* Second div - visible on medium screens and above */}
      <div className="hidden md:flex flex-row-reverse justify-between max-w-[1100px] gap-3 mx-auto items-center md:mt-10 md:justify-center">
        <div className="md:w-[52%] w-full text-center md:text-left md:pt-1 pt-10 px-10 md:items-center md:pr-5 md:pb-5 md:pl-5">
          <h2
            className="pb-3 text-[1.24rem] md:text-[2.0rem] leading-[1.1] font-semibold tracking-wide text-[#003478] animate-typing overflow-hidden 
          whitespace-nowrap pr-5 font-serif"
          >
            Student FeedBacks{" "}
          </h2>
          <br />
          <p className="subtitle">
            <span className="">Explore the</span> <br />
            <span className="font-bold font-mono">
              Global Stanford Campus
            </span>{" "}
            <br />
            <br />
            <span className="font-mono">
              Join us for the ultimate adventure of a lifetime.
            </span>
            <br />
            <br />
            <span className="text-rose-900 font-serif mt-4">
              We offer UGC-recognized diplomas and degree programs that are
              internationally certified!
            </span>
          </p>
        </div>
        <div className="relative md:w-[48%] w-full">
          <Carousel>
            <div className="md:mt-4">
              <img className="object-cover w-full h-full" src={img1} />
            </div>
            <div>
              <img className="object-cover w-full h-full" src={img2} />
            </div>
            <div>
              <img className="object-cover w-full h-full" src={img3} />
            </div>
            <div>
              <img className="object-cover w-full h-full" src={img4} />
            </div>
            <div>
              <img className="object-cover w-full h-full" src={img5} />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default FeedBack;
