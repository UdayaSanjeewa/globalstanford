import paymentsImg from "../../assets/paymentsImage.jpg";

function PaymentsContent() {
  return (
    <div className="flex items-center justify-center py-[86px]">
      <div className="h-[400px] w-[300px] sm:h-[350px] sm:w-[600px] md:h-[400px] md:w-[700px] lg:h-[575px] lg:w-[900px] xl:h-[675px] xl:w-[1238px] rounded-[15px] bg-[#eaf4fc] flex">
        <div>
          <img
            src={paymentsImg}
            alt=""
            className="lg:h-[575px] xl:h-[675px] xl:w-[458px] rounded-[15px] hidden lg:block"
          />
        </div>
        <div className="flex flex-col items-center w-full">
          <h2 className="font-catamaran sm:text-[20px] md:text-[25px] font-[700] lg:text-[36px] mt-[32px]">
            Online Payments Portal
          </h2>
          
          <div className="md:mt-[20px] mt-[40px] lg:mt-[40px] hidden md:flex">
            <div className="flex flex-col items-center justify-center">
              <div className="rounded-full md:h-[30px] md:w-[30px] md:text-[20px] h-[64.67px] w-[64.67px] lg:h-[64.67px] lg:w-[64.67px] lg:text-[36px] border-[1px] border-black flex items-center justify-center font-catamaran font-[700] text-[36px]">
                1
              </div>
              <h4 className="font-catamaran font-[500] md:text-[14px] lg:text-[20px] md:mt-4 text-[20px] mt-8">
                Find the
              </h4>
              <h4 className="font-catamaran font-[500] md:text-[14px] lg:text-[20px]  text-[20px] md:mt-0 lg:mt-2 mt-2">
                Registration
              </h4>
            </div>
            
            <div className="w-[137.11px] h-[10px] lg:w-[137.11px]  lg:h-[10px]  md:w-[70px] md:h-[7px] md:mt-2 bg-[#D7D4D4] lg:mt-8 mt-8 rounded-full"></div>
            
            <div className="flex flex-col items-center justify-center">
              <div className="rounded-full md:h-[30px] md:w-[30px] md:text-[20px] h-[64.67px] w-[64.67px] lg:h-[64.67px] lg:w-[64.67px] lg:text-[36px] border-[1px] border-black flex items-center justify-center font-catamaran font-[700] text-[36px]">
                2
              </div>
              <h4 className="font-catamaran font-[500] md:text-[14px] lg:text-[20px] md:mt-4 text-[20px] mt-8">
                Select the
              </h4>
              <h4 className="font-catamaran font-[500] md:text-[14px] lg:text-[20px]  text-[20px] md:mt-0 lg:mt-2 mt-2">
                Fee Type
              </h4>
            </div>
           
            <div className="w-[137.11px] h-[10px] lg:w-[137.11px]  lg:h-[10px]  md:w-[70px] md:h-[7px] md:mt-2 bg-[#D7D4D4] lg:mt-8 mt-8 rounded-full"></div>
            
            <div className="flex flex-col items-center justify-center">
              <div className="rounded-full md:h-[30px] md:w-[30px] md:text-[20px] h-[64.67px] w-[64.67px] lg:h-[64.67px] lg:w-[64.67px] lg:text-[36px] border-[1px] border-black flex items-center justify-center font-catamaran font-[700] text-[36px]">
                3
              </div>
              <h4 className="font-catamaran font-[500] md:text-[14px] lg:text-[20px] md:mt-4 text-[20px] mt-8">
                Complete
              </h4>
              <h4 className="font-catamaran font-[500] md:text-[14px] lg:text-[20px]  text-[20px] md:mt-0 lg:mt-2 mt-2">
                The Payment
              </h4>
            </div>
          </div>
          
          
          <div className="h-[200px] w-[280px] sm:h-[250px] sm:mt-5 md:w-[350px] md:h-[180px] md:mt-[20px] lg:h-[200px] lg:w-[480px]  xl:h-[294px] xl:w-[547px] rounded-[10px] bg-[#FFFFFF] mt-[49px] xl:mt-[49px] lg:mt-[39px] flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <h3 className="font-catamaran font-[500] md:text-[18px] lg:text-[24px] text-[15px]">
                Student ID / Registration ID
              </h3>
              <input
                type="text"
                className="lg:h-[45.76px] h-[30px] w-[250px] md:w-[300px] lg:w-[358px] mt-4 px-2 border-[#807A7A] border rounded-[10px]"
                placeholder="Ex:  E100044 / 00046318"
              />
              <button className="h-[40px] w-[250px] md:h-[42px] md:w-[300px] lg:w-[358px] lg:h-[52px] bg-[#0808FBCC] rounded-[10px] mt-6 font-catamaran font-[700] text-[20px] text-[#FFFFFF]">
                CONTINUE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentsContent;
