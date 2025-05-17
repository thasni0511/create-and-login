import React, { useContext } from "react";
import FormContext from "./FormContext";

const SubscriberDetails = () => {
  const { name, email } = useContext(FormContext);

  return (
    <div className="subscriber-details">
      <h2>Subscriber Details</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
};

export default SubscriberDetails;