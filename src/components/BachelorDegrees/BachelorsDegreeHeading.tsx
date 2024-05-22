function BachelorsDegreeHeading(props: any) {
  return (
    //heading of Bachelors Degree
    <div className="w-full ">
      <div className="h-[60px] w-full top-[208px] bg-[#000061] ">
        <h1 className="absolute left-[45px] sm:left-[100px] my-[14px] text-[22px] text-[white] font-mono leading-[1.3] tracking-wide font-[600]">
          {props.title}
        </h1>{" "}
      </div>
    </div>
  );
}

export default BachelorsDegreeHeading;
