// App.tsx
import { useState, useEffect } from 'react';
import './App.css';
import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

function Card({ children }: CardProps) { //Functional Components 
  return <div className="card">{children}</div>; //props.children
}

interface WelcomeProps {
  username: string;
  onLogout: () => void;
}

class Welcome extends React.Component<WelcomeProps> { //Class Component
  render() {
    return (
      <Card>
        <h2>Welcome, {this.props.username}!</h2>
        <button onClick={this.props.onLogout}>Log Out</button>
      </Card>
    );
  }
}

function App() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [showVerification, setShowVerification] = useState<boolean>(false);
  const [verificationCode, setVerificationCode] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const VALID_USERNAME = 'sarah';
  const VALID_PASSWORD = '123';
  const REGISTERED_EMAIL = 'sarah123@gmail.com'; 
  const VALID_CODE = '145';

  const handleLogin = () => {
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {

      setShowVerification(true);
      setMessage(`Verification code sent to ${REGISTERED_EMAIL}.`);
    } else {
      alert('Invalid username or password.');
    }
  };

  const handleVerify = () => {
    if (verificationCode === VALID_CODE) {
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('username', username);
      setIsLoggedIn(true);
    } else {
      alert('Incorrect verification code.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setVerificationCode('');
    setShowVerification(false);
    setMessage('');
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    const storedUser = localStorage.getItem('username');
    if (loggedIn === 'true' && storedUser) {
      setUsername(storedUser);
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="login-container">
      {!isLoggedIn ? (
        <Card>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={handleLogin}>Login</button>

          {showVerification && (
            <>
              <p style={{ color: 'green' }}>{message}</p>
              <input
                type="text"
                placeholder="Enter verification code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />
              <br />
              <button onClick={handleVerify}>Verify</button>
            </>
          )}
        </Card>
      ) : (
        <Welcome username={username} onLogout={handleLogout} />
      )}
    </div>
  );
}


export default App;
