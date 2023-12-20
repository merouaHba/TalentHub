import { FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer className="container mx-auto px-16 py-4 ">
      <div className="bg-gradient py-14 flex flex-col items-center gap-y-10">
        <h3 className="text-white text-center  uppercase text-3xl  font-bold">
          get update from anywhere
        </h3>
        <p className="text-[0.9375rem] font-normal leading-6 text-white text-center">
          Get notified with the latest news in real time, anywhere!
        </p>
        <div className="flex justify-between items-center w-full md:w-[90%] lg:w-1/2">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
                      className="text-white border-white-yellow border focus:outline-none
             border-[#767676] rounded-md bg-transparent py-4 px-10 w-3/5 placeholder:text-white placeholder:text-sm"
          />
          <div className="py-4 px-6 border border-[#767676] rounded-md text-sm  bg-white text-center m-0 flex justify-center items-center">
            <p className=" uppercase  text-[#222]">GET Started</p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-y-2 items-center">
        <div className=" w-1/6">
          <img src={logo} alt="logo" className="h-full w-full object-cover" />
        </div>
        <div className="flex justify-center items center w-1/6 ">
          <div className="flex justify-between items-center w-4/5 text-gradient">
            <CgFacebook color="linear-gradient(82deg, #842C91 24.78%, #3B55A5 89.57%)" />
            <AiOutlineTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
