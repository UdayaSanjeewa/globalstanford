import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import img1 from "../assets/8.jpg";
import img2 from "../assets/9.jpg";
import img3 from "../assets/10.jpg";
import img4 from "../assets/11.jpg";
import img5 from "../assets/12.jpg";

function FeedBack() {
  return (
  
     
      <div className="flex md:flex-row flex-col my-2 py-12 mx-auto">
     
          <div>
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
       
      </div>
 
  );
}

export default FeedBack;
