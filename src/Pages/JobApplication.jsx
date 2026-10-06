import { useState } from "react";
import PersonalInfo from "../components/PersonalInfo";
import ProfessionalInfo from "../components/ProfessionalInfo";
import ReviewApplication from "../components/ReviewApplication";

const JobApplication = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState(0);
  const [selectedRole, setSelectedRole] = useState("");

  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
  ];

  const clickNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const clickPrev = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <div>
      <div>
        {currentStep === 1 ? (
          <PersonalInfo
            onClickNext={clickNext}
            name={name}
            email={email}
            setName={setName}
            setEmail={setEmail}
          />
        ) : currentStep === 2 ? (
          <ProfessionalInfo
            onClickNext={clickNext}
            onClickPrev={clickPrev}
            experience={experience}
            setExperience={setExperience}
            roles={roles}
            selectedRole={selectedRole}
            setSelectedRole={setSelectedRole}
          />
        ) : (
          <ReviewApplication
            onClickPrev={clickPrev}
            name={name}
            email={email}
            experience={experience}
            selectedRole={selectedRole}
          />
        )}
      </div>
    </div>
  );
};

export default JobApplication;
