import React, { useContext, useEffect, useState } from "react";
import FormContext from "./FormContext";

function Message() {
  const { name, email } = useContext(FormContext);
  const [fade, setFade] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFade(true), 1000);
    const hideTimer = setTimeout(() => setVisible(false), 2000); 

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <p className={`success-message ${fade ? "fade-out" : ""}`}>
      Thank you, <strong>{name}</strong>! Confirmation sent to <strong>{email}</strong>.
    </p>
  );
}

export default Message;
