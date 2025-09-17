import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>My Blog</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/create">Create</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}
