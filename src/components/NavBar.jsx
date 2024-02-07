import Logo from "../assets/gold.png";
import { HiOutlinePhone } from "react-icons/hi2";
import { FaLanguage, FaUserCircle } from "react-icons/fa";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
import { Signup } from "./Signup";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className=" sticky w-full top-0 z-1000 pb-[100px]">
      <div className=" bg-[#0C2F55] px-[100px] fixed  w-full top-0">
        <div className="flex  justify-between items-center w-full">
          <Link to="/profile">
            {" "}
            <img src={Logo} alt="" width={300} height={400} className=" my-3" />
          </Link>

          <div className=" flex gap-10">
            <div className=" flex gap-3 text-white justify-center items-center">
              <HiOutlinePhone size={15} className=" text-white" />
              <p>7575</p>
            </div>
            <div className=" flex gap-3 text-white justify-center items-center">
              <FaLanguage size={15} className=" text-white" />
              <p>English</p>
            </div>
            <div className=" flex gap-3 text-white justify-center items-center">
              <Popover
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <PopoverHandler>
                  <Button>Login/Signup</Button>
                </PopoverHandler>
                <PopoverContent>
                  <Signup />
                </PopoverContent>
              </Popover>
              <Link to="/claims">
                <FaUserCircle size={32} className=" text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
