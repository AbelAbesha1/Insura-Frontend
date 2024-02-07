import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Input } from "@material-tailwind/react";
import { ImLocation, ImRoad } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { LiaDollarSignSolid } from "react-icons/lia";
import { TiDeleteOutline } from "react-icons/ti";
import { BsSortDownAlt, BsFillSuitHeartFill } from "react-icons/bs";
import { Button } from "@material-tailwind/react";
import { Carousel } from "@material-tailwind/react";
import { IoCarOutline } from "react-icons/io5";
import Car from "../assets/car2 1.png";

const Home = () => {
  return (
    <div className="bg-[#F6F7F8]">
      <NavBar />

      <div className=" mx-16 my-3 overflow-hidden bg-white grid grid-cols-4">
        <div className=" w-full flex flex-col   gap-5 col-span-2 ">
          <div>
            {" "}
            <p class="text-3xl py-4 m-4 text-center">
              Only Pay For What You Need
            </p>
            <p className=" text-[#353535] text-[30px] text-center  ">
              Keep your valuable <br /> assets protected !
            </p>
          </div>
          <div className=" w-full px-10 py-3 flex items-center justify-center gap-16 ">
            <Button
              type="submit"
              className=" w-24 h-24 text-center flex flex-col items-center justify-center gap-1 bg-blue-400"
            >
              <IoCarOutline size={46} />
              <p>auto</p>
            </Button>
            <Button
              type="submit"
              className=" w-24 h-24 text-center flex flex-col items-center justify-center gap-1 bg-blue-400"
            >
              <IoCarOutline size={46} />
              <p>auto</p>
            </Button>
            <Button
              type="submit"
              className=" w-24 h-24 text-center flex flex-col items-center justify-center gap-1 bg-blue-400"
            >
              <IoCarOutline size={46} />
              <p>auto</p>
            </Button>
          </div>
        </div>
        <div className=" col-span-2 ">
          <img src={Car} alt="" width={400} height={500} className=" my-3" />
        </div>
      </div>

      <div className=" mx-16 mt-16">
        <div className=" flex justify-center items-center flex-col text-[36px] font-[600] text-[#0c2f54] leading-10">
          Why Choose Car Insurance with InsuraFlow
          <span className=" text-[18px] font-[300] text-[#535b61] ">
            Manage Your Car Insurance Hassle-Free. Save Time and Money!
          </span>
        </div>
        <div className=" grid grid-cols-3 gap-7 mt-16">
          <div className=" flex-1">
            <div className=" flex gap-3">
              <div>
                <LiaDollarSignSolid size={36} className="text-[#0071CC]" />
              </div>
              <div className=" text-[14px] font-[400] text-[#535b61] leading-7 flex flex-col">
                <span className=" text-[20px] font-medium text-[#0c2f54]">
                  No Hidden Fees
                </span>
                Forget about hidden charges and payment fees. With InsuraFlow,
                you'll enjoy transparent pricing
              </div>
            </div>
            <div className=" flex flex-col gap-4"></div>
          </div>
          <div className=" flex-1">
            <div className=" flex gap-3">
              <div>
                <FaSearch size={36} className=" text-[#0071CC]" />
              </div>
              <div className=" text-[14px] font-[400] text-[#535b61] leading-7 flex flex-col">
                <span className=" text-[20px] font-medium text-[#0c2f54]">
                  Simple and Quick Search
                </span>
                We make finding the right car insurance policy easy and quick.
                Our platform searches through a wide range of insurance
                providers
              </div>
            </div>
            <div className=" flex flex-col gap-4"></div>
          </div>
          <div className=" flex-1">
            <div className=" flex gap-3">
              <div>
                <BsSortDownAlt size={36} className=" text-[#0071CC]" />
              </div>
              <div className=" text-[14px] font-[400] text-[#535b61] leading-7 flex flex-col">
                <span className=" text-[20px] font-medium text-[#0c2f54]">
                  Best Rates Guaranteed
                </span>
                At InsuraFlow, we guarantee the best rates in the industry.
              </div>
            </div>
            <div className=" flex flex-col gap-4"></div>
          </div>
          <div className=" flex-1">
            <div className=" flex gap-3">
              <div>
                <ImRoad size={36} className="text-[#0071CC]" />
              </div>
              <div className=" text-[14px] font-[400] text-[#535b61] leading-7 flex flex-col">
                <span className=" text-[20px] font-medium text-[#0c2f54]">
                  Wide Range of Coverage Options
                </span>
                From basic coverage to comprehensive plans, InsuraFlow offers a
                variety of coverage options to suit your specific needs and
                budget.
              </div>
            </div>
            <div className=" flex flex-col gap-4"></div>
          </div>
          <div className=" flex-1">
            <div className=" flex gap-3">
              <div>
                <TiDeleteOutline size={36} className="text-[#0071CC]" />
              </div>
              <div className=" text-[14px] font-[400] text-[#535b61] leading-7 flex flex-col">
                <span className=" text-[20px] font-medium text-[#0c2f54]">
                  Easy Cancellation & Refunds
                </span>
                Need to make changes to your policy? No problem. With
                InsuraFlow, enjoy hassle-free cancellation and quick refunds,
              </div>
            </div>
            <div className=" flex flex-col gap-4"></div>
          </div>
          <div className=" flex-1">
            <div className=" flex gap-3">
              <div>
                <BsFillSuitHeartFill size={36} className="text-[#0071CC]" />
              </div>
              <div className=" text-[14px] font-[400] text-[#535b61] leading-7 flex flex-col">
                <span className=" text-[20px] font-medium text-[#0c2f54]">
                  Accessible Anytime, Anywhere
                </span>
                Your journey with InsuraFlow doesn't end with purchasing a
                policy. Our dedicated team is here to assist you every step of
                the way
              </div>
            </div>
            <div className=" flex flex-col gap-4"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
