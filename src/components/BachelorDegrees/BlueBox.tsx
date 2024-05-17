import bgImage from "../../assets/lecture-hall.jpg";
import LeftBox from "./LeftBox";
import SmallBlueBox from "./SmallBlueBox";
import RightBelowBox from "./RightBelowBox";

function BlueBox() {
  return (
    <div className="relative h-[460px]">
      <img src={bgImage} alt="" className="inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-[#003478] opacity-75 ">
        <div className="flex-row md:flex gap-14">
          <LeftBox title="Bachelor of Science in Nursing">
            This program is specifically designed for individuals <br /> already
            working in the government hospital nurses. <br /> It caters to those
            who want to enhance their <br /> knowledge and skills without
            disrupting their <br /> current careers."
          </LeftBox>
          <div className="mt-5 sm:ml-[20%] sm:mt-14">
            <SmallBlueBox />
            <div className="mt-5">
              <RightBelowBox duration="02 year" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlueBox;
