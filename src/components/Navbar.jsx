import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* LEFT */}
        <div className="nav-left">
          <h2 className="logo">🔍 FindIt</h2>
        </div>

        {/* CENTER */}
        <div className="nav-center">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/lost" className="nav-link">
            Report Lost
          </NavLink>
          <NavLink to="/found" className="nav-link">
            Report Found
          </NavLink>
          <NavLink to="/matches" className="nav-link">
            Matches
          </NavLink>
        </div>

        {/* RIGHT */}
        <div className="nav-right">
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
