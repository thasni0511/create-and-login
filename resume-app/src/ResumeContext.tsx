import { createContext } from "react";

export interface UserInfo {
  FirstName: string;
  LastName: string;
  PhoneNumber: number | "";
  EmailID: string;
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
}

export interface ResumeContextType {
      user:UserInfo;

  education: Education[];
  experience: Experience[];
  setEducation: (newEdu: Education[]) => void;
  setExperience: (newExp: Experience[]) => void;
  setUser:(user: UserInfo) => void;
}

const ResumeContext = createContext<ResumeContextType>({
   user: {
    FirstName: "",
    LastName: "",
    PhoneNumber: "",
    EmailID: ""
  },
  education: [],
  experience: [],
  setEducation: () => {},
  setExperience: () => {},
   setUser: () => {},
});

export default ResumeContext;
