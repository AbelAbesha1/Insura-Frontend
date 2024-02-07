import { useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import {
  LiaFacebookF,
  LiaTwitter,
  LiaGoogle,
  LiaLinkedinIn,
  LiaYoutube,
  LiaInstagram,
} from "react-icons/lia";
import { FaThumbsUp, FaLock } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { IoIosClock } from "react-icons/io";

const Footer = () => {
  // eslint-disable-next-line no-undef
  const [email, setEmail] = useState("");
  const onChange = ({ target }) => setEmail(target.value);
  return (
    <div className=" mt-20 !max-w-full ">
      <div className=" bg-white">
        <div className=" mx-20 bg-white grid grid-cols-4 gap-10 py-4   ">
          <div className="  gap-3 flex flex-col justify-center items-center">
            <FaLock size={40} className=" text-[#546D89]" />
            <div className=" text-[20px] font-medium text-[#0c2f54] text-center">
              100% Secure Payments
            </div>
            <div className=" text-[14px] font-[400] text-[#252b33] text-center flex justify-center items-center">
              Moving your card details to a much more secured place.
            </div>
          </div>
          <div className=" w-full gap-3 flex flex-col justify-center items-center">
            <FaThumbsUp size={40} className=" text-[#546D89]" />
            <div className=" text-[20px] font-medium text-[#0c2f54] text-center">
              Trust pay
            </div>
            <div className=" text-[14px] font-[400] text-[#252b33] text-center flex justify-center items-center">
              100% Payment Protection. Easy Return Policy.
            </div>
          </div>
          <div className="  w-full gap-3 flex flex-col justify-center items-center">
            <HiSpeakerphone size={40} className=" text-[#546D89]" />
            <div className=" text-[20px] font-medium text-[#0c2f54] text-center">
              Refer & Earn
            </div>
            <div className=" text-[14px] font-[400] text-[#252b33] text-center flex justify-center items-center">
              Invite a friend to sign up and earn up to $100.
            </div>
          </div>
          <div className="  w-full gap-3 flex flex-col justify-center items-center">
            <IoIosClock size={40} className=" text-[#546D89]" />
            <div className=" text-[20px] font-medium text-[#0c2f54] text-center">
              24X7 Support
            </div>
            <div className=" text-[14px] font-[400] text-[#252b33] text-center flex justify-center items-center">
              We are here to help. Have a query and need help ? Click here
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" mx-20 grid grid-cols-3 py-7 gap-7">
          <div></div>
          <div className=" flex flex-col gap-5">
            <p>Subscribe</p>
            <div className="relative flex w-full max-w-[24rem]">
              <Input
                type="email"
                label="Email Address"
                value={email}
                onChange={onChange}
                className="pr-20"
                containerProps={{
                  className: "min-w-0",
                }}
              />
              <Button
                size="sm"
                color={email ? "gray" : "blue-gray"}
                className="!absolute flex justify-center items-center right-0 h-full rounded-r-lg rounded-l-none "
              >
                Subscribe
              </Button>
            </div>
          </div>
          <div className=" text-sm flex flex-col items-center gap-5  ">
            <p className=" flex justify-end">keep in touch</p>
            <div className="flex gap-4 justify-end text-sm">
              <IconButton
                size="sm"
                className="rounded-full  bg-[#d4d4d4] hover:bg-[#1877F2]"
              >
                <LiaFacebookF size={16} />
              </IconButton>
              <IconButton
                size="sm"
                className="rounded-full bg-[#d4d4d4] hover:bg-[#1DA1F2] "
              >
                <LiaTwitter size={16} />
              </IconButton>
              <IconButton
                size="sm"
                className="rounded-full bg-[#d4d4d4] hover:bg-[#DB4437]"
              >
                <LiaGoogle size={16} />
              </IconButton>
              <IconButton
                size="sm"
                className="rounded-full bg-[#d4d4d4]  hover:bg-[#0072b1]"
              >
                <LiaLinkedinIn size={16} />
              </IconButton>
              <IconButton
                size="sm"
                className="rounded-full bg-[#d4d4d4]  hover:bg-[#FF0000]"
              >
                <LiaYoutube size={16} />
              </IconButton>
              <IconButton
                size="sm"
                className="rounded-full bg-[#d4d4d4]  hover:bg-[#0072b1]"
              >
                <LiaInstagram />
              </IconButton>
            </div>
          </div>
        </div>
        <div className=" mx-20 border-t-[1px] flex flex-col gap-5 justify-center items-center p-8 ">
          <div>
            <ul className=" flex gap-5 items-center">
              <li className=" text-[14px] font-[400] cursor-pointer  hover:text-[#0071cc]">
                About us
              </li>
              <li className=" text-[14px] font-[400] cursor-pointer hover:text-[#0071cc]">
                Faq
              </li>
              <li className=" text-[14px] font-[400] cursor-pointer hover:text-[#0071cc]">
                Contact
              </li>
              <li className=" text-[14px] font-[400] cursor-pointer hover:text-[#0071cc]">
                Support
              </li>
              <li className=" text-[14px] font-[400] cursor-pointer hover:text-[#0071cc]">
                Terms & use
              </li>
              <li className=" text-[14px] font-[400] cursor-pointer hover:text-[#0071cc]">
                Privacy Policy
              </li>
            </ul>
          </div>
          <div>
            <p className=" text-[14px] font-[400] text-[#67727c]">
              Copyright © 2021{" "}
              <span className="text-[#0071cc] hover:text-[#252b33] cursor-pointer">
                {" "}
                Dalloltech.
              </span>{" "}
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
