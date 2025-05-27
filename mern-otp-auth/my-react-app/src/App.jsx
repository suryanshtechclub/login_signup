import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState('');
  const [token, setToken] = useState('');

  const sendOtp = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/send-otp', { email });
      setMessage(res.data.message);
      setStep(2);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error sending OTP');
    }
  };

  const verifyOtp = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/verify-otp', { email, otp });
      setMessage(res.data.message);
      setToken(res.data.token);
      setStep(3);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error verifying OTP');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <h2>Email & OTP Authentication</h2>

      {step === 1 && (
        <>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ width: '100%', padding: 10, marginBottom: 10 }}
          />
          <button onClick={sendOtp} style={{ width: '100%', padding: 10 }}>Send OTP</button>
        </>
      )}

      {step === 2 && (
        <>
          <p>OTP sent to {email}</p>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={e => setOtp(e.target.value)}
            style={{ width: '100%', padding: 10, marginBottom: 10 }}
          />
          <button onClick={verifyOtp} style={{ width: '100%', padding: 10 }}>Verify OTP</button>
        </>
      )}

      {step === 3 && (
        <>
          <p>{message}</p>
          <p>Your Token: <code>{token}</code></p>
        </>
      )}

      {message && <p style={{ color: 'red' }}>{message}</p>}
    </div>
  );
}

export default App;
