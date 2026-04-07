import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Verify() {
  const { state } = useLocation();

  const [answers, setAnswers] = useState({
    answer1: "",
    answer2: "",
  });

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");

    await axios.post(
      "http://localhost:5000/api/claim",
      {
        lostItemId: state.lostItemId,
        foundItemId: state.foundItemId,
        answers: Object.values(answers),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    alert("Claim verified successfully ✅");
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2>🔐 Verify Ownership</h2>

        <input name="answer1" placeholder="Answer 1" onChange={handleChange} />
        <input name="answer2" placeholder="Answer 2" onChange={handleChange} />

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default Verify;
