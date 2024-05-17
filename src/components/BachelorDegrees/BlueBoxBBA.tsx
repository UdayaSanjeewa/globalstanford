import bgImage from "../../assets/lecture-hall.jpg";
import LeftBox from "./LeftBox";
import BBAUpperBox from "./BBAUpperBox";
import BBARightBelowBox from "./BBARightBelow";

function BlueBoxBBA() {
  return (
    <div className="relative h-[490px]">
      <img src={bgImage} alt="" className="inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-[#003478] opacity-75 ">
        <div className="flex-row md:flex gap-14">
          <LeftBox title="BBA in Management">
            This program is specifically designed for individuals <br /> already
            working in the management field. It caters <br /> to those who want
            to enhance their knowledge and <br /> skills without disrupting
            their current careers.
          </LeftBox>
          <div className="mt-5 sm:ml-[20%] sm:mt-14">
            <BBAUpperBox />
            <div className="mt-5">
              <BBARightBelowBox duration="01 year" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlueBoxBBA;
