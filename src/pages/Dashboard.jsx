import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h1 className="title">🔍 FindIt</h1>
      <p className="subtitle">Smart & Secure Lost-and-Found System</p>

      <div className="card-container">
        <div className="action-card" onClick={() => navigate("/lost")}>
          <h3>📤 Report Lost</h3>
          <p>Lost something? Report it here</p>
        </div>

        <div className="action-card" onClick={() => navigate("/found")}>
          <h3>📥 Report Found</h3>
          <p>Found an item? Help return it</p>
        </div>

        <div className="action-card" onClick={() => navigate("/matches")}>
          <h3>🤖 View Matches</h3>
          <p>See smart matching results</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
