import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"; // ✅ make sure this is here

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {" "}
        {/* 🔥 THIS WAS MISSING */}
        <h2 className="logo">🔍 FindIt</h2>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/lost">Report Lost</Link>
          <Link to="/found">Report Found</Link>
          <Link to="/matches">Matches</Link>

          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
