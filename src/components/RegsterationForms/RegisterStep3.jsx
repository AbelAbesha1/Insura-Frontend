import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import VehicleParkingForm from "./VehicleParkingForm";
const RegisterStep3 = () => {
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
    <div>
      <div className=" flex justify-between items-center">
        <div className="">
          <div className=" w-[500px] h-[220px] border-[1px] mt-5 p-3">
            <p className=" text-center">Please Indicate the Cover Required</p>
            <div className=" w-[350px] flex items-center mb-1  ml-2">
              <label htmlFor="gender" className="">
                Third Party Only
              </label>
              <div className=" flex gap-5">
                <Checkbox id="ripple-on" label="" ripple={isMale} />
              </div>
            </div>
            <div className=" w-[350px] flex items-center  mb-1 ml-2">
              <label htmlFor="gender" className="">
                Comprehensive
              </label>
              <div className=" flex gap-5">
                <Checkbox id="ripple-on" label="" ripple={isMale} />
              </div>
            </div>
            <div className=" w-[350px] flex items-center mb-1 ml-2 ">
              <label htmlFor="gender" className="">
                Third Party Fire and Theft
              </label>
              <div className=" flex gap-5">
                <Checkbox id="ripple-on" label="" ripple={isMale} />
              </div>
            </div>
            <div className=" w-[350px] flex items-center  mb-1 ml-2 ">
              <label htmlFor="gender" className="">
                Compulsory Motor Insurance
              </label>
              <div className=" flex gap-5">
                <Checkbox id="ripple-on" label="" ripple={isMale} />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className=" w-[300px] h-[220px] border-[1px] mt-5 p-3">
            <p className=" text-center">Please Indicate the Cover Required</p>
            <div className=" w-[350px] flex items-center mb-1  ml-2">
              <label htmlFor="gender" className="">
                Third Party Only
              </label>
              <div className=" flex gap-5">
                <Checkbox id="ripple-on" label="" ripple={isMale} />
              </div>
            </div>
            <div className=" w-[350px] flex items-center  mb-1 ml-2">
              <label htmlFor="gender" className="">
                Comprehensive
              </label>
              <div className=" flex gap-5">
                <Checkbox id="ripple-on" label="" ripple={isMale} />
              </div>
            </div>
            <div className=" w-[350px] flex items-center mb-1 ml-2 ">
              <label htmlFor="gender" className="">
                Third Party Fire and Theft
              </label>
              <div className=" flex gap-5">
                <Checkbox id="ripple-on" label="" ripple={isMale} />
              </div>
            </div>
            <div className=" w-[350px] flex items-center  mb-1 ml-2 ">
              <label htmlFor="gender" className="">
                Compulsory Motor Insurance
              </label>
              <div className=" flex gap-5">
                <Checkbox id="ripple-on" label="" ripple={isMale} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <VehicleParkingForm />
    </div>
  );
};

export default RegisterStep3;
