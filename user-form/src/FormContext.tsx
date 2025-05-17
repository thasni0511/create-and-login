import { createContext } from "react";

interface FormContextInterface  {
  name: string;
  email: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
};

const FormContext = createContext<FormContextInterface>({
  name: "",
  email: "",
  setName: () => {},
  setEmail: () => {},
});

export default FormContext;
