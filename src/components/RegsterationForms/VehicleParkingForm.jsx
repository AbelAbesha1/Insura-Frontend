import React, { useState } from "react";

function VehicleParkingForm() {
  const [garageChecked, setGarageChecked] = useState(false);
  const [openPremisesChecked, setOpenPremisesChecked] = useState(false);
  const [elsewhereChecked, setElsewhereChecked] = useState(false);

  const [isOwner, setIsOwner] = useState(true);
  const [ownerName, setOwnerName] = useState("");
  const [ownerAddress, setOwnerAddress] = useState("");

  const handleOwnershipChange = (e) => {
    setIsOwner(e.target.value === "yes");
  };
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    switch (name) {
      case "garage":
        setGarageChecked(checked);
        break;
      case "open-premises":
        setOpenPremisesChecked(checked);
        break;
      case "elsewhere":
        setElsewhereChecked(checked);
        break;
      default:
        break;
    }
  };

  return (
    <div className=" flex justify-between items-center">
      <div className="max-w-md bg-white rounded mt-4 p-6 shadow-md">
        <h2 className="text-lg font-semibold mb-4">
          Where is the vehicle usually left overnight?
        </h2>
        <form>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label htmlFor="garage" className="ml-2">
                In a Garage
              </label>
              <input
                type="checkbox"
                id="garage"
                name="garage"
                checked={garageChecked}
                onChange={handleCheckboxChange}
                className="h-5 w-5 text-indigo-600"
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="open-premises" className="ml-2">
                In the open but on your premises
              </label>
              <input
                type="checkbox"
                id="open-premises"
                name="open-premises"
                checked={openPremisesChecked}
                onChange={handleCheckboxChange}
                className="h-5 w-5 text-indigo-600"
              />
            </div>
            <div className="flex items-center justify-between ">
              <label htmlFor="elsewhere" className="ml-2">
                Elsewhere
              </label>
              <input
                type="checkbox"
                id="elsewhere"
                name="elsewhere"
                checked={elsewhereChecked}
                onChange={handleCheckboxChange}
                className="h-5 w-5 text-indigo-600"
              />
            </div>
          </div>
        </form>
      </div>
      <div className=" bg-white rounded p-6 shadow-md">
        <h2 className="text-lg font-semibold mb-4">Vehicle Ownership</h2>
        <form>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="owner-yes"
                name="owner"
                value="yes"
                checked={isOwner}
                onChange={handleOwnershipChange}
                className="h-5 w-5 text-indigo-600"
              />
              <label htmlFor="owner-yes" className="ml-2">
                Yes
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="owner-no"
                name="owner"
                value="no"
                checked={!isOwner}
                onChange={handleOwnershipChange}
                className="h-5 w-5 text-indigo-600"
              />
              <label htmlFor="owner-no" className="ml-2">
                No
              </label>
            </div>
          </div>

          {!isOwner && (
            <>
              <div className="mt-4">
                <label
                  htmlFor="owner-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="owner-name"
                  name="owner-name"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="owner-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <textarea
                  id="owner-address"
                  name="owner-address"
                  value={ownerAddress}
                  onChange={(e) => setOwnerAddress(e.target.value)}
                  rows={3}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default VehicleParkingForm;
