import { useState, useContext, ChangeEvent } from "react";
import ResumeContext from "./ResumeContext";

function EducationForm() {
  const { education, setEducation } = useContext(ResumeContext);
  const [institution, setInstitution] = useState<string>("");
  const [degree, setDegree] = useState<string>("");
  const [year, setYear] = useState<string>("");

  const handleChange = (setter: (val: string) => void) =>
    (e: ChangeEvent<HTMLInputElement>) => setter(e.target.value);

  const addEducation = () => {
    setEducation([...education, { institution, degree, year }]);
    setInstitution("");
    setDegree("");
    setYear("");
  };

  return (
    <div>
      <h2>Education</h2>
      <input placeholder="Institution" value={institution} onChange={handleChange(setInstitution)} />
      <input placeholder="Degree" value={degree} onChange={handleChange(setDegree)} />
      <input placeholder="Year" value={year} onChange={handleChange(setYear)} />
      <button onClick={addEducation}>Add</button>
    </div>
  );
}

export default EducationForm;
