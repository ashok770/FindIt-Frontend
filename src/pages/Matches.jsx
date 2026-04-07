import { useEffect, useState } from "react";
import axios from "axios";

function Matches() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("http://localhost:5000/api/match", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setMatches(res.data);
      } catch (err) {
        console.log("ERROR:", err.response?.data || err.message);
      }
    };

    fetchMatches();
  }, []);

  return (
    <div className="matches-page">
      <h2>🎯 Matching Results</h2>

      <div className="matches-grid">
        {matches.length === 0 ? (
          <p>No matches found. Report a lost item first!</p>
        ) : (
          matches.map((match, index) => (
            <div className="match-card" key={index}>
              <img
                src={match.foundItem.image || "https://via.placeholder.com/150"}
                alt="item"
                className="match-img"
              />

              <h3>{match.foundItem.itemName}</h3>

              <p>
                <b>Lost Item:</b> {match.lostItem.itemName}
              </p>
              <p>
                <b>Brand:</b> {match.foundItem.brand}
              </p>
              <p>
                <b>Color:</b> {match.foundItem.color}
              </p>
              <p>
                <b>Location:</b> {match.foundItem.locationFound}
              </p>

              <div className="score">Match Score: {match.matchScore}%</div>

              <button className="claim-btn">Claim Item</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Matches;
