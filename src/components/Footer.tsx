import { Link } from "react-router-dom";

// react icons
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin, FaYoutube, FaMobileAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";

function Footer() {
  return (
    <div className="bg-[#003478]  flex  justify-center items-center">
      <div className="max-w-[1000px] text-white py-[20px] px-[45px] w-[90%] ">
        <h2 className="mb-4">Any Questions? Contact us</h2>
        <div className="grid md:grid-cols-4 grid-cols-2 text-[13px] gap-1 ">
          {/* programs */}
          <div>
            <div className="footer-item font-[700] md:text-xl">Programs</div>
            <Link to={"/bachelors-degree"}>
              <div className="footer-item">Bachelor’s Degrees</div>
            </Link>
            <Link to={"/master-degrees"}>
              <div className="footer-item">Master’s Degrees</div>
            </Link>
            <Link to={"/phd-dba"}>
              <div className="footer-item">PhD/ DBA</div>
            </Link>
          </div>

          {/* Quick links */}
          <div>
            <div className="footer-item font-[700] md:text-xl">Quick links</div>
            <Link to={"/"}>
              <div className="footer-item">Home</div>
            </Link>
            <div className="footer-item">Payments Policy</div>
            <Link
              to={
                "https://www.termsfeed.com/live/f7b1c143-7271-48aa-ba27-93ee017508b5"
              }
            >
              <div className="footer-item">Privacy Policy</div>
            </Link>
            <div className="footer-item">Quality Policy</div>
            <Link to={"/about-us"}>
              <div className="footer-item">About Us</div>
            </Link>
          </div>

          {/* ContactUs */}
          <div>
            <div className="footer-item  font-[700] md:text-xl">Contact Us</div>
            <div className="flex items-center gap-2 footer-item">
              <div className="hidden sm:block">
                <FaMobileAlt />
              </div>
              <span className="p-2 ">+94 70 747 7771</span>
            </div>
            <div className="flex items-center gap-2 footer-item">
              <div className="hidden sm:block">
                <TbDeviceLandlinePhone />
              </div>
              +94 11 445 5155
            </div>
            <div className="flex items-center gap-2 footer-item">
              <div className="hidden sm:block">
                <MdOutlineMailOutline />
              </div>
              info@globalstanfordcampus.com
            </div>
            <div className="flex items-start gap-2 footer-item">
              <div className="hidden sm:block">
                {" "}
                <IoHomeOutline className="mt-1" />
              </div>
              Global Stanford Campus,
              <br />
              191 High Level Rd,
              <br />
              Nugegoda, Sri Lanka
            </div>
          </div>
          <div>
            <div className="footer-item">Media Center</div>
            <div className="footer-item">Terms of Use</div>
            <div className="footer-item">Contact Us</div>
            <div></div>
          </div>

          {/* Icons */}
          <div className="hidden ml-8 sm:block md:flex md:gap-x-5">
            <Link
              to={"https://www.facebook.com/profile.php?id=100057587164421"}
              className="text-xl footer-item"
            >
              <FaFacebookF />
            </Link>
            <div className="text-xl footer-item">
              <IoLogoWhatsapp />
            </div>
            <div className="text-xl footer-item">
              <FaLinkedin />
            </div>
            <div className="text-xl footer-item">
              <FaYoutube />
            </div>
            <div className="text-xl footer-item">
              <AiFillInstagram />
            </div>
          </div>
        </div>

        <div className="mt-4 text-sm text-center text-gray-500">
          &copy; 2024 Global stanford campus. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
