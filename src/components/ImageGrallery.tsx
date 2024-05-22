import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/Untitled-1.jpg";
import img2 from "../assets/Untitled-2.jpg";
import img3 from "../assets/Untitled-3.jpg";
import img4 from "../assets/Untitled-4.jpg";
import img5 from "../assets/Untitled-5.jpg";

function ImageGrallery() {
  return (
    <div className="flex md:flex-row flex-col justify-between max-w-[1100px] gap-3 mx-auto items-center md:mt-10 md:justify-center  ">
      <div className="md:w-[52%] w-full text-center md:text-left md:pt-1 pt-10 px-10 md:items-center md:pr-5 md:pb-5 md:pl-5  ">
        <h1 className="pb-3 title2 ">Start your Journey! </h1><br />
        <p className="subtitle ">
        <span className="">Explore the</span> <br /><span className="font-bold font-mono">
        Global Stanford Campus 
        </span> <br /><br />
       <span className="font-mono"> Join us for the ultimate adventure of a lifetime.</span>
        <br/>
        <br />
        <span className=" text-rose-900 font-serif mt-4 ">
        We offer UGC-recognized diplomas and degree programs that are internationally certified!
        </span>
        </p>
      </div>
      <div className="relative md:w-[48%] w-full ">
        <Carousel>
          <div className="md:mt-4">
            <img
              className="object-cover w-full h-full "
              src={img1}
            />
          </div>
          <div>
            <img
              className="object-cover  w-full h-full"
              src={img2}
            />
          </div>
          <div>
            <img
              className="object-cover  w-full h-full "
              src={img3}
              
            />
          </div>
          <div>
            <img
              className="object-cover  w-full h-full"
              src={img4}
            />
          </div>
          <div>
            <img
              className="object-cover  w-full h-full "
              src={img5}
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default ImageGrallery;
