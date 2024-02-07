import React from "react";
import { Select, Option } from "@material-tailwind/react";
import car from "../../assets/Group.png";
import { Input } from "@material-tailwind/react";

const ClaimForm2 = () => {
  return (
    <div className=" flex items-center gap-5 mt-9">
      <div className=" flex flex-wrap w-[600px] gap-6">
        <div>
          <p>
            Select Your Vehicle <span className=" text-red-400">*</span>
          </p>
          <div className="w-72">
            <Select label="Select Vehile ">
              <Option></Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
              <Option>Material Tailwind Angular</Option>
              <Option>Material Tailwind Svelte</Option>
            </Select>
          </div>
        </div>
        <div>
          <p>
            select Vehicle <span className=" text-red-400">*</span>
          </p>
          <div className="w-72">
            <Select label="Select Version">
              <Option>option 1</Option>
              <Option>option 2</Option>
              <Option>option 3</Option>
              <Option>option 4</Option>
              <Option>option 5</Option>
            </Select>
          </div>
        </div>
        <div>
          <p>
            Select Year <span className=" text-red-400">*</span>
          </p>
          <div className="w-72">
            <Select label="Select Version">
              <Option>option 1</Option>
              <Option>option 2</Option>
              <Option>option 3</Option>
              <Option>option 4</Option>
              <Option>option 5</Option>
            </Select>
          </div>
        </div>
        <div>
          <p>
            Insurance Type <span className=" text-red-400">*</span>
          </p>
          <div className="w-72">
            <Select label="Third party">
              <Option>option 1</Option>
              <Option>option 2</Option>
              <Option>option 3</Option>
              <Option>option 4</Option>
              <Option>option 5</Option>
            </Select>
          </div>
        </div>
        <div>
          <p>
            Registration Number <span className=" text-red-400">*</span>
          </p>
          <div className="w-72">
            <Input label="Registration.No" placeholder="cr/1236" />
          </div>
        </div>
        <div>
          <p>
            Expiry Date <span className=" text-red-400">*</span>
          </p>
          <div className="w-72">
            <Input label="date" type="date" />
          </div>
        </div>
      </div>
      <div className=" w-[300px]">
        <img src={car} alt="" />
      </div>
    </div>
  );
};

export default ClaimForm2;
