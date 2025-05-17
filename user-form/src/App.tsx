import { useState, useRef, useEffect } from "react";
import confetti from "canvas-confetti";
import FormContext from "./FormContext";
import Message from "./Message";
import SubscriberDetails from "./SubscriberDetails";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    const isValid =
      nameRef.current?.value &&
      emailRef.current?.value &&
      emailRef.current.value.includes("@");

    if (isValid) {
      setSubmitted(true);
      // setShowButton(false); 

      confetti({
        particleCount: 150,
        angle: 60,
        spread: 100,
        origin: { x: 0.5, y: 0.6 },
        colors: ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#845EC2'],
      });

      setTimeout(() => {
        setShowButton(true); 
      }, 500);

      if (nameRef.current) nameRef.current.value = "";
      if (emailRef.current) emailRef.current.value = "";
    } else {
      alert("Please enter a valid name and email.");
    }
  };

  useEffect(() => {
    if (submitted) {
      console.log("Form submitted:", name, email);
    }
  }, [submitted]);
  

  return (
    <FormContext.Provider value={{ name, email, setName, setEmail }}>
      <div className="form-container">
        <h2>Join the Mailing List</h2>

        {!showDetails && (
          <>
            <input
              ref={nameRef}
              type="text"
              placeholder="Your name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              ref={emailRef}
              type="email"
              placeholder="Your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>

            {submitted && (
              <>
                <Message />
                {showButton && (
                  <button
                    className="details-button"
                    onClick={() => {
                      setShowDetails(true);
                      setSubmitted(false);
                    }}
                  >
                    View Subscriber Details
                  </button>
                )}
              </>
            )}
          </>
        )}

        {showDetails && <SubscriberDetails />}
      </div>
    </FormContext.Provider>
  );
}

export default App;
