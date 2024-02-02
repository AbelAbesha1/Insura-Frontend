import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import Uploader from "../UI/Uploader";

const RegisterStep2 = () => {
  return (
    <div className="">
      <div className=" flex sm:flex-col justify-between">
        <div>
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
        </div>

        <div>
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
