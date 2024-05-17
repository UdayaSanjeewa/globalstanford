import bgImage from "../../assets/lecture-hall.jpg";
import LeftBox from "./LeftBox";
import UpperBox from "./DOPUpperBox";
import RightBox from "./DOPRightBox";

function BlueBox() {
  return (
    <div className="relative h-[460px]">
      <img src={bgImage} alt="" className="inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-[#003478] opacity-75 ">
        <div className="flex-row md:flex gap-14">
          <LeftBox title="Doctor of philosophy  ">
            PhD stands for Doctor of Philosophy, but its meaning goes
            deeper than just a title. The word "philosophy" itself comes
            from ancient Greece, literally translating to "love of wisdom"
            (φιλοσοφία - Philosophia). Originally, a philosopher wasn't
            just someone with a doctorate; it referred to someone who
            had achieved a well-rounded education encompassing the
            fundamental issues of their time.
          </LeftBox>
          <div className="mt-5 sm:ml-[20%] sm:mt-14">
            <UpperBox />
            <div className="mt-5">
              <RightBox duration="18 months" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlueBox;
