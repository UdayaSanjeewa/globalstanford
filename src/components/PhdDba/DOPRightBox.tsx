interface DOPRightBoxProps {
  duration: string;
  // Add other expected props here
}

function DOPRightBox(props: DOPRightBoxProps) {
  return (
    <div className="bg-[#011C3F]  text-white font-catamaran rounded-[8px] ml-5 mr-2">
      <div className="flex flex-row pt-5 py-1 ml-[3%] sm:text-[16px] text-[12px]">
        <p className="font-bold ">Duration :</p>&nbsp;
        <p className="font-regular">{props.duration}</p>
      </div>

      <div className="flex flex-row ml-[3%] py-1 sm:text-[16px] text-[12px]">
        <p className="font-bold">Credits :</p>&nbsp;
        <p className=" font-regular">60 credits (Equivalent to 3 Years)</p>
      </div>

      <div className="flex flex-row ml-[3%] py-1 sm:text-[16px] text-[12px]">
        <p className="font-bold">Intakes :</p>&nbsp;
        <p className=" font-regular">
          Call us at 070 747 7771 / 070 747 7772 for intake information.
        </p>
      </div>

      <div className="flex flex-row ml-[3%] py-1 pb-2 sm:text-[16px] text-[12px]">
        <p className="font-bold">Fees :</p>&nbsp;
        <p className=" font-regular">
          Call us at 070 747 7771 / 070 747 7772 for For fees and <br /> payment information
        </p>
      </div>
    </div>
  );
}

export default DOPRightBox;
