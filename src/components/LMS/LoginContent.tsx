import { Link } from "react-router-dom";
import gscLogo from "../../assets/gcs-logo.png";

function LoginContent() {
  return (
    <div className="flex items-center justify-center py-[5%] sm:py-[75px]">
      <div className="h-[500px] w-[500px] sm:h-[583px] sm:w-[1069px] bg-[#EAF4FC] rounded-[20px] p-8">
        <div className="flex-row sm:flex sm:justify-between">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <img src={gscLogo} className="h-[50px] sm:h-[77px] sm:w-[70px]" alt="" />
            <div className="font-merriweather text-[12px] sm:text-[14px] font-[700] sm:pt-2">
              <h2>Global</h2>
              <h2>Stanford</h2>
              <h2 className="text-red-600">CAMPUS</h2>
            </div>
          </div>
          {/* Heading */}
          <h2 className="font-catamaran font-[700] sm:text-[36px] text-[18px] text-center pt-4">
            Learning Management System
          </h2>
        </div>
        <div className="flex sm:items-center sm:justify-center">
          <div className="flex flex-col items-center justify-center mt-[15px] sm:mt-[80px] bg-[#FFFFFF] h-[297px] w-[520px] rounded-[10px] drop-shadow-md">
            <input
              type="text"
              className="w-[290px] h-[30px] sm:h-[45.76px] sm:w-[358px] px-2 border-[#807A7A] border rounded-[8px] sm:rounded-[10px]"
              placeholder="Username"
            />
            <input
              type="text"
              className="w-[290px] h-[30px] sm:h-[45.76px] sm:w-[358px] px-2 border-[#807A7A] border rounded-[8px] sm:rounded-[10px] mt-6"
              placeholder="Password"
            />
            <Link 
            className="h-[40px] w-[130px] sm:h-[52px] sm:w-[358px] bg-[#0808FBCC] rounded-[10px] mt-12 font-catamaran font-[700] text-[20px] text-[#FFFFFF] flex items-center justify-center"
            to={"https://docs.google.com/forms/d/e/1FAIpQLSdeTamtLnS5AsNovaX19BxqlVCfOb-5R7xp5dhHkiZNvzb-hg/viewform?usp=sf_link"}
            >
              LOG IN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginContent;
