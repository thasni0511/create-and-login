import { useState, useContext, ChangeEvent } from "react";
import ResumeContext from "./ResumeContext";

function ExperienceForm() {
  const { experience, setExperience } = useContext(ResumeContext);
  const [company, setCompany] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [duration, setDuration] = useState<string>("");

  const handleChange = (setter: (val: string) => void) =>
    (e: ChangeEvent<HTMLInputElement>) => setter(e.target.value);

  const addExperience = () => {
    setExperience([...experience, { company, role, duration }]);
    setCompany("");
    setRole("");
    setDuration("");
  };

  return (
    <div>
      <h2>Experience</h2>
      <input placeholder="Company" value={company} onChange={handleChange(setCompany)} />
      <input placeholder="Role" value={role} onChange={handleChange(setRole)} />
      <input placeholder="Duration" value={duration} onChange={handleChange(setDuration)} />
      <button onClick={addExperience}>Add</button>
    </div>
  );
}

export default ExperienceForm;
