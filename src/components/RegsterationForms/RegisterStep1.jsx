import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";

const RegisterStep1 = () => {
  const [isMale, setIsMale] = useState(false);
  const [isFemale, setIsFemale] = useState(false);

  const handleMaleToggle = () => {
    setIsMale(true);
    setIsFemale(false);
  };

  const handleFemaleToggle = () => {
    setIsMale(false);
    setIsFemale(true);
  };
  return (
    <div className="">
      <h1 className=" text-center mt-5 font-bold text-blue-300 text-2xl">
        Personal Details
      </h1>
      <div className=" flex justify-between items-center">
        <div className=" flex flex-col">
          <div className=" w-[350px] flex flex-col gap-3 m-2">
            <label htmlFor="first-Name" className="">
              First Name <span className=" text-red-500">*</span>
            </label>
            <Input label="Firstname" id="first-Name" className="" />
          </div>
          <div className=" w-[350px] flex flex-col gap-3 m-2 ">
            <label htmlFor="last-Name" className="">
              last Name <span className=" text-red-500">*</span>
            </label>
            <Input label="Lastname" id="last-Name" className="" />
          </div>
        </div>
        <div className=" flex flex-col">
          <div className=" w-[350px] flex flex-col gap-3 m-2">
            <label htmlFor="first-Name" className="">
              Date of brith <span className=" text-red-500">*</span>
            </label>
            <Input
              label="date of birth"
              type="date"
              id="last-Name"
              className=""
            />
          </div>
          <div className=" w-[350px] flex flex-col gap-1 m-2 ">
            <label htmlFor="gender" className="">
              Gender <span className=" text-red-500">*</span>
            </label>
            <div className=" flex gap-5">
              <Checkbox
                id="ripple-on"
                label="Male"
                ripple={isMale}
                onChange={handleMaleToggle}
                checked={isMale}
              />
              <Checkbox
                id="ripple-off"
                label="Female"
                ripple={isFemale}
                onChange={handleFemaleToggle}
                checked={isFemale}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-between">
        <div className=" w-[350px] mt-4">
          <h1 className=" mb-3">
            Residential Address <span className=" text-red-500">*</span>
          </h1>
          <div className=" ml-10">
            <div className=" flex flex-col">
              <label htmlFor="sub-city" className="">
                SubCity
              </label>
              <Input
                label="sub-city"
                id="sub-city"
                placeholder="Nifas silk lafto"
                className=""
              />
            </div>
            <div className="flex flex-col mt-3 justify-between">
              <label htmlFor="kebele">Kebele</label>
              <Input label="kebele" placeholder="03" id="kebele" className="" />
            </div>
            <div className=" flex flex-col  mt-3 justify-between">
              <label htmlFor="house-number">House.no</label>
              <Input
                label="House-number"
                placeholder="126"
                id="house-number"
                className=""
              />
            </div>
          </div>
        </div>
        <div className=" w-[350px] mt-4">
          <h1 className=" mb-3">
            Business Address <span className=" text-red-500">*</span>
          </h1>
          <div className=" ml-10">
            <div className=" flex flex-col">
              <label htmlFor="sub-city" className="">
                SubCity
              </label>
              <Input
                label="sub-city"
                id="sub-city"
                placeholder="Nifas silk lafto"
                className=""
              />
            </div>
            <div className="flex flex-col mt-3 justify-between">
              <label htmlFor="kebele">Kebele</label>
              <Input label="kebele" placeholder="03" id="kebele" className="" />
            </div>
            <div className=" flex flex-col  mt-3 justify-between">
              <label htmlFor="house-number">House.no</label>
              <Input
                label="House-number"
                placeholder="126"
                id="house-number"
                className=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-6">
        <div className=" flex justify-between">
          <div className=" w-[350px] flex flex-col gap-3 m-2">
            <label htmlFor="email" className="">
              Email <span className=" text-red-500">*</span>
            </label>
            <Input
              label="Email"
              type="email"
              placeholder="insuraflow@gmail.com"
              id="first-Name"
              className=""
            />
          </div>
          <div className=" w-[350px] flex flex-col gap-3 m-2">
            <label htmlFor="ocuppation" className="">
              Ocuppation <span className=" text-red-500">*</span>
            </label>
            <Input
              label="Ocuppation"
              placeholder=" web developer"
              id="ocuppation"
              className=""
            />
          </div>
        </div>
        <div>
          <div className=" w-[350px] flex flex-col gap-3 m-2">
            <label htmlFor="Phone" className="">
              Phone Number <span className=" text-red-500">*</span>
            </label>
            <Input
              label="Phone.no"
              type=""
              placeholder="+2519111111"
              id="first-Name"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterStep1;
