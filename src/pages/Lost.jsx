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
    <div className="form-container">
      <div className="form-card">
        <h2>📤 Report Lost Item</h2>

        <form onSubmit={handleSubmit}>
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
          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
          />

          <h3>🔐 Secret Questions</h3>

          {questions.map((q, index) => (
            <div key={index}>
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

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Lost;
