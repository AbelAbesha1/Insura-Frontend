import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import Uploader from "../UI/Uploader";

const RegisterStep2 = () => {
  return (
    <div className="">
      <div className=" flex justify-between">
        <div>
          <div className=" flex flex-col">
            <div className=" w-[350px] flex flex-col gap-3 m-2">
              <label htmlFor="first-Name" className="">
                Plate No. <span className=" text-red-500">*</span>
              </label>
              <Input
                label="Plate No."
                id="first-Name"
                className=""
                placeholder="A53489"
                type="number"
              />
            </div>
            <div className=" w-[350px] flex flex-col gap-3 m-2 ">
              <label htmlFor="last-Name" className="">
                Engine No <span className=" text-red-500">*</span>
              </label>
              <Input
                label="  Engine No"
                id="last-Name"
                className=""
                placeholder="A53489"
                type="number"
              />
            </div>
          </div>
          <div className=" flex flex-col">
            <div className=" w-[350px] flex flex-col gap-3 m-2">
              <label htmlFor="first-Name" className="">
                Type of Body <span className=" text-red-500">*</span>
              </label>
              <Input
                label="Type of Body"
                id="first-Name"
                className=""
                placeholder="suv"
              />
            </div>
            <div className=" w-[350px] flex flex-col gap-3 m-2 ">
              <label htmlFor="last-Name" className="">
                Year of Purchase <span className=" text-red-500">*</span>
              </label>
              <Input
                label="Year of Purchase"
                id="last-Name"
                className=""
                placeholder="2024"
                type="number"
              />
            </div>
          </div>
          <div className=" flex flex-col">
            <div className=" w-[350px] flex flex-col gap-3 m-2">
              <label htmlFor="first-Name" className="">
                Chasis No <span className=" text-red-500">*</span>
              </label>
              <Input
                label="Chasis No "
                id="first-Name"
                className=""
                placeholder="138113"
              />
            </div>
            <div className=" w-[350px] flex flex-col gap-3 m-2 ">
              <label htmlFor="last-Name" className="">
                Make and Model <span className=" text-red-500">*</span>
              </label>
              <Input
                label="Model"
                id="last-Name"
                className=""
                placeholder="Toyota Rav-4"
              />
            </div>
          </div>
        </div>

        <div>
          <div className=" flex flex-col">
            <div className=" w-[350px] flex flex-col gap-3 m-2">
              <label htmlFor="first-Name" className="">
                Duty Paid Value <span className=" text-red-500">*</span>
              </label>
              <Input
                label="Duty Paid Value"
                id="first-Name"
                className=""
                placeholder="4000000"
              />
            </div>
            <div className=" w-[350px] flex flex-col gap-3 m-2 ">
              <label htmlFor="last-Name" className="">
                Horse Power<span className=" text-red-500">*</span>
              </label>
              <Input
                label="Horse Power"
                id="last-Name"
                className=""
                placeholder="450"
              />
            </div>
          </div>
          <div>
            <p className=" font-bold text-1xl mb-3">caring capacity</p>
            <div className=" flex gap-2 items-center justify-between">
              <label htmlFor="goods">Goods</label>
              <Input
                label="goods"
                id="goods"
                placeholder="5 goods"
                className=""
              />
            </div>
            <div className=" flex gap-2 items-center mt-4 justify-between">
              <label htmlFor="goods">Passengers</label>
              <Input
                label="passengers"
                id="goods"
                placeholder="5 peoples"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>Images Of the Vehicle</p>
        <div className=" flex justify-between flex-wrap">
          <div className=" flex items-center gap-2">
            <p>Front side</p>
            <Uploader />
          </div>
          <div className=" flex items-center gap-2">
            <p>Back side</p>
            <Uploader />
          </div>
          <div className=" flex items-center gap-2">
            <p>left side</p>
            <Uploader />
          </div>
          <div className=" flex items-center gap-2">
            <p>right side</p>
            <Uploader />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterStep2;
