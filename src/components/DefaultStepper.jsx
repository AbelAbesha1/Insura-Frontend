import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import RegisterStep1 from "./RegsterationForms/RegisterStep1";
import RegisterStep2 from "./RegsterationForms/RegisterStep2";
import RegisterStep3 from "./RegsterationForms/RegisterStep3";
import SideMenu from "./SideMenu";
import ProfilePage from "./ProfilePage";
import MyClaimsTable from "./MyClaimsTable";

export function DefaultStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const renderForm = () => {
    switch (activeStep) {
      case 0:
        return <RegisterStep1 />;
      case 1:
        return <RegisterStep2 />;
      case 2:
        return <RegisterStep3 />;
      case 3:
        return <MyClaimsTable />;
      // Add cases for other steps as needed
      default:
        return null;
    }
  };

  return (
    <div className=" flex">
      <div>
        <SideMenu />
      </div>
      <div className="w-full bg-white z-50 py-4 px-12 relative">
        <Stepper
          color="blue"
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
          className=" sticky bg-white top-0 z-[1000]"
        >
          <Step
            activeClassName=" bg-green-600"
            onClick={() => setActiveStep(0)}
          >
            1
          </Step>
          <Step
            className=" bg-blue-gray-100"
            activeClassName=" bg-green-600"
            onClick={() => setActiveStep(1)}
          >
            2
          </Step>
          <Step
            activeClassName=" bg-green-600"
            onClick={() => setActiveStep(2)}
          >
            3
          </Step>
        </Stepper>
        {renderForm()}
        <div className="mt-16 flex justify-between">
          <Button onClick={handlePrev} className="" disabled={isFirstStep}>
            Prev
          </Button>
          <Button onClick={handleNext} disabled={isLastStep} type="submit">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
