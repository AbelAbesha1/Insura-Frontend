import React, { useState } from "react";
import Uploader from "../UI/Uploader";

const ClaimForm3 = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleCheckboxChange = (option) => {
    setSelectedOption(option);
  };
  return (
    <div>
      <p>Select Incident</p>
      <div>
        <div className="container mx-auto mt-8">
          <h2 className="text-2xl font-bold mb-4">
            What type of incident occurred?
          </h2>
          <div className=" flex gap-3">
            <div className="flex items-center">
              <label
                htmlFor="flooding"
                className=" border-[1px] p-2 rounded-md cursor-pointer"
              >
                Flooding
              </label>
              <input
                type="checkbox"
                id="flooding"
                className="ml-3 "
                checked={selectedOption === "flooding"}
                onChange={() => handleCheckboxChange("flooding")}
              />
            </div>
            <div className="flex items-center">
              <label
                className=" border-[1px] p-2 rounded-md cursor-pointer"
                htmlFor="naturalDisaster"
              >
                Natural Disaster
              </label>
              <input
                type="checkbox"
                id="naturalDisaster"
                className="ml-3"
                checked={selectedOption === "naturalDisaster"}
                onChange={() => handleCheckboxChange("naturalDisaster")}
              />
            </div>
            <div className="flex items-center">
              <label
                className=" border-[1px] p-2 w-24 text-center rounded-md cursor-pointer"
                htmlFor="theft"
              >
                Theft
              </label>
              <input
                type="checkbox"
                id="theft"
                className="ml-3"
                checked={selectedOption === "theft"}
                onChange={() => handleCheckboxChange("theft")}
              />
            </div>
            <div className="flex items-center">
              <label
                className=" border-[1px] p-2 w-24 text-center rounded-md cursor-pointer"
                htmlFor="flooding"
              >
                Fire
              </label>
              <input
                type="checkbox"
                id="fire"
                className="ml-3"
                checked={selectedOption === "fire"}
                onChange={() => handleCheckboxChange("fire")}
              />
            </div>
            <div className="flex items-center">
              <label
                className=" border-[1px] p-2 w-24 text-center rounded-md cursor-pointer"
                htmlFor="flooding"
              >
                Accident
              </label>
              <input
                type="checkbox"
                id="Accident"
                className="ml-3"
                checked={selectedOption === "Accident"}
                onChange={() => handleCheckboxChange("Accident")}
              />
            </div>
            <div className="flex items-center">
              <label
                className=" border-[1px] p-2 w-24 text-center rounded-md cursor-pointer"
                htmlFor="flooding"
              >
                Riot
              </label>
              <input
                type="checkbox"
                id="riot"
                className="ml-3"
                checked={selectedOption === "riot"}
                onChange={() => handleCheckboxChange("riot")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" text-center  m-8 ">
        <p className=" text-2xl">Upload Image</p>
        <Uploader />
      </div>
    </div>
  );
};

export default ClaimForm3;
