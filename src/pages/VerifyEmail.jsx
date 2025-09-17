import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { verifyOtp } from "../services/api"; // API call function

export default function VerifyEmail() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email; // email passed from signup page

  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await verifyOtp({ email, otp }); // call backend
      alert("Email verified successfully!");
      navigate("/blogs"); // redirect to blogs
    } catch (err) {
      setMessage(err.response?.data?.message || err.message);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Verify Your Email</h2>
      <p>We sent an OTP to your email: <strong>{email}</strong></p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <button type="submit">Verify</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
