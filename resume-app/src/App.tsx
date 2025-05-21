import { useState } from "react";
import ResumeContext, { Education, Experience ,UserInfo} from "./ResumeContext";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import ResumePreview from "./ResumePreview";
import UserForm from "./UserForm";
import "./App.css";

function App() {
  const [education, setEducation] = useState<Education[]>([]);
  const [experience, setExperience] = useState<Experience[]>([]);
  const [user, setUser] = useState<UserInfo>({
  FirstName: "",
  LastName: "",
  PhoneNumber: "",
  EmailID: ""
});

  return (
    <ResumeContext.Provider value={{user, setUser, education, experience, setEducation, setExperience }}>
         <div className="container">

      <h1> Resume Builder</h1>
  <div className="grid">
                <div className="form-section">
                    <UserForm/>

          <EducationForm />
          <ExperienceForm />
        </div>
                <div className="preview-section">

        <ResumePreview />
          </div>
      </div>
    </div>
    </ResumeContext.Provider>
  );
}

export default App;
