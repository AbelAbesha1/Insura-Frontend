import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import RegisterStep1 from "./RegsterationForms/RegisterStep1";
import RegisterStep2 from "./RegsterationForms/RegisterStep2";

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
      // Add cases for other steps as needed
      default:
        return null;
    }
  };

  return (
    <div className="w-full py-4 px-[100px] relative lg:ml-80 lg:mr-80">
      <Stepper
        color="blue"
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
        className=" sticky top-0 z-[1000]"
      >
        <Step activeClassName=" bg-green-600" onClick={() => setActiveStep(0)}>
          1
        </Step>
        <Step
          className=" bg-blue-gray-100"
          activeClassName=" bg-green-600"
          onClick={() => setActiveStep(1)}
        >
          2
        </Step>
        <Step activeClassName=" bg-green-600" onClick={() => setActiveStep(2)}>
          3
        </Step>
        <Step activeClassName=" bg-green-600" onClick={() => setActiveStep(2)}>
          4
        </Step>
        <Step activeClassName=" bg-green-600" onClick={() => setActiveStep(2)}>
          5
        </Step>
      </Stepper>
      {renderForm()}
      <div className="mt-16 flex justify-between">
        <Button onClick={handlePrev} className="" disabled={isFirstStep}>
          Prev
        </Button>
        <Button onClick={handleNext} disabled={isLastStep}>
          Next
        </Button>
      </div>
    </div>
  );
}
