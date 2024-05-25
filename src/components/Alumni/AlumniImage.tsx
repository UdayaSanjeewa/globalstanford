import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/AlumniImages/1.jpg";
import img2 from "../../assets/AlumniImages/2.jpg";
import img3 from "../../assets/AlumniImages/3.jpg";
import img4 from "../../assets/AlumniImages/4.jpg";
import img5 from "../../assets/AlumniImages/5.jpg";
import img6 from "../../assets/AlumniImages/6.jpeg";
import img7 from "../../assets/AlumniImages/7.jpg";


function AlumniImage() {
  return (
    <div className="flex flex-col ml-[1%] mb-[5%] mr-[1%] sm:mr[10%] justify-items-center sm:px-[10%]">
      {/* Apply Carousel to Alumni Page */}
      <Carousel className="sm:h-[518] sm:w-[778]">
        <div>
          <img className="object-cover " src={img1} />
        </div>
        <div>
          <img className="object-cover " src={img2} />
        </div>
        <div>
          <img className="object-cover " src={img3} />
        </div>
        <div>
          <img className="object-cover " src={img4} />
        </div>
        <div>
          <img className="object-cover " src={img5} />
        </div>
        <div>
          <img className="object-cover " src={img6} />
        </div>
        <div>
          <img className="object-cover " src={img7} />
        </div>             
      </Carousel>
    </div>
  );
}

export default AlumniImage;
