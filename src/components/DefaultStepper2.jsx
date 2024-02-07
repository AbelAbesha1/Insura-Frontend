import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import RegisterStep1 from "./RegsterationForms/RegisterStep1";
import RegisterStep2 from "./RegsterationForms/RegisterStep2";
import RegisterStep3 from "./RegsterationForms/RegisterStep3";
import SideMenu from "./SideMenu";
import ProfilePage from "./ProfilePage";
import MyClaimsTable from "./MyClaimsTable";
import ClaimForm2 from "./ClaimForms/ClaimForm2";
import ClaimForm3 from "./ClaimForms/ClaimForm3";
import NavBar from "./NavBar";

export function DefaultStepper2() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const renderForm = () => {
    switch (activeStep) {
      case 0:
        return <ClaimForm2 />;
      case 1:
        return <ClaimForm3 />;

      default:
        return null;
    }
  };

  return (
    <div className=" flex">
      <div>
        <SideMenu />
      </div>
      <div className="w-full py-4 px-12 relative mt-4">
        <Stepper
          color="blue"
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
          className=" sticky top-0 z-[1000] bg-white"
        >
          <Step
            activeClassName=" bg-green-600"
            onClick={() => setActiveStep(0)}
          >
            1
          </Step>
          <Step
            className=" bg-blue-gray-100 "
            activeClassName=" bg-green-600"
            onClick={() => setActiveStep(1)}
          >
            2
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
