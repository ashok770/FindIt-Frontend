import { useState } from "react";
import axios from "axios";

function Lost() {
  const [form, setForm] = useState({
    itemName: "",
    brand: "",
    color: "",
    locationLost: "",
    dateLost: "",
    description: "",
  });

  const [questions, setQuestions] = useState([{ question: "", answer: "" }]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleQuestionChange = (index, field, value) => {
    const updated = [...questions];
    updated[index][field] = value;
    setQuestions(updated);
  };

  const addQuestion = () => {
    setQuestions([...questions, { question: "", answer: "" }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    await axios.post(
      "http://localhost:5000/api/lost",
      { ...form, secretQuestions: questions },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    alert("Lost item reported ✅");
  };

  return (
    <div className="lost-page">
      <div className="lost-container">
        <h2>📤 Report Lost Item</h2>

        <form onSubmit={handleSubmit} className="lost-form">
          {/* LEFT SIDE */}
          <div className="form-left">
            <input
              name="itemName"
              placeholder="Item Name"
              onChange={handleChange}
            />
            <input name="brand" placeholder="Brand" onChange={handleChange} />
            <input name="color" placeholder="Color" onChange={handleChange} />
            <input
              name="locationLost"
              placeholder="Location Lost"
              onChange={handleChange}
            />
            <input type="date" name="dateLost" onChange={handleChange} />
          </div>

          {/* RIGHT SIDE */}
          <div className="form-right">
            <textarea
              name="description"
              placeholder="Description"
              onChange={handleChange}
            />

            <input
              name="image"
              placeholder="Image URL (optional)"
              onChange={handleChange}
            />

            <div className="secret-box">
              <h3>🔐 Secret Questions</h3>

              {questions.map((q, index) => (
                <div key={index} className="question-block">
                  <input
                    placeholder="Question"
                    onChange={(e) =>
                      handleQuestionChange(index, "question", e.target.value)
                    }
                  />
                  <input
                    placeholder="Answer"
                    onChange={(e) =>
                      handleQuestionChange(index, "answer", e.target.value)
                    }
                  />
                </div>
              ))}

              <button type="button" onClick={addQuestion}>
                + Add Question
              </button>
            </div>
          </div>

          {/* SUBMIT */}
          <button type="submit" className="submit-btn">
            Submit Report
          </button>
        </form>
      </div>
    </div>
  );
}

export default Lost;
