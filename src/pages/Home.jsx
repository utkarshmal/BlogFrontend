import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Our Blog</h1>
      <p>Please login or signup to continue</p>
      <Link to="/signup">
        <button style={{ marginRight: "10px" }}>Signup</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}
