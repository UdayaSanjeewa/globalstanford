import bgImage from "../../assets/lecture-hall.jpg";
import LeftBox from "./LeftBox";
import RightBelowBox from "./RightBelowBox";
import EducationUpperBox from "./EducationUpperBox";

function BlueBoxEducation() {
  return (
    <div className="relative h-[460px]">
      <img src={bgImage} alt="" className="inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-[#003478] opacity-75 ">
        <div className="flex-row md:flex gap-14">
          <LeftBox title="Bachelor of Education">
            This program is specifically designed for individuals <br /> already
            working in the education sector. It caters to <br /> those who want
            to enhance their knowledge and <br /> skills without disrupting
            their current careers.
          </LeftBox>
          <div className="mt-5 sm:ml-[20%] sm:mt-14">
            <EducationUpperBox />
            <div className="mt-5">
              <RightBelowBox duration="01 year" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlueBoxEducation;
