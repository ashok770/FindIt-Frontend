import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>FindIt Dashboard</h1>

      <Link to="/login">Login</Link>
      <br />
      <Link to="/register">Register</Link>

      <br />
      <br />

      <button>Report Lost Item</button>
      <button>Report Found Item</button>
      <button>View Matches</button>
    </div>
  );
}

export default Dashboard;
