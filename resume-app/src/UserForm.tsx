import { useState, useContext, useEffect } from "react";
import ResumeContext from "./ResumeContext";

function UserForm() {
  const { user, setUser } = useContext(ResumeContext);
  const [FirstName, setFirstName] = useState(user.FirstName);
  const [LastName, setLastName] = useState(user.LastName);
  const [PhoneNumber, setPhone] = useState<number | "">(user.PhoneNumber);
  const [EmailID, setEmail] = useState(user.EmailID);

  useEffect(() => {
    setFirstName(user.FirstName);
    setLastName(user.LastName);
    setPhone(user.PhoneNumber);
    setEmail(user.EmailID);
  }, [user]);

  // const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  //   setPhone(value === "" ? "" : Number(value));
  // };

  const handleSave = () => {
    setUser({ FirstName, LastName, PhoneNumber, EmailID });
  };

  return (
    <div>
      <h2>Personal Information</h2>
      <input
        placeholder="First Name"
        value={FirstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        placeholder="Last Name"
        value={LastName}
        onChange={(e) => setLastName(e.target.value)}
      />
  <input
  type="number"
  placeholder="Phone Number"
  value={PhoneNumber}
  onChange={(e) =>
    setPhone(e.target.value === "" ? "" : Number(e.target.value))
  }
/>

      <input
        placeholder="Email ID"
        value={EmailID}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default UserForm;
