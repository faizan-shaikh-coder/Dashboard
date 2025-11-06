import React, { useState } from "react";
import scholarships from "../data/scholarshipData";

const MatchMeForm = () => {
  const [form, setForm] = useState({
    country: "",
    grade: "",
    eligibility: "",
  });
  const [matches, setMatches] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleMatch = () => {
    const scored = scholarships.map((s) => {
      let score = 0;
      if (s.country === form.country) score += 2;
      if (s.grade === form.grade) score += 2;
      if (s.eligibility === form.eligibility) score += 3;
      return { ...s, score };
    });

    const ranked = scored
      .filter((s) => s.score > 0)
      .sort((a, b) => b.score - a.score);

    setMatches(ranked);
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-2xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">🎯 Match Me</h2>

      <div className="flex flex-wrap gap-3 mb-4">
        <select
          name="country"
          onChange={handleChange}
          className="p-2 border rounded-md focus:ring-2 focus:ring-green-400"
        >
          <option value="">Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>

        <select
          name="grade"
          onChange={handleChange}
          className="p-2 border rounded-md focus:ring-2 focus:ring-green-400"
        >
          <option value="">Grade</option>
          <option value="Undergraduate">Undergraduate</option>
          <option value="Postgraduate">Postgraduate</option>
        </select>

        <select
          name="eligibility"
          onChange={handleChange}
          className="p-2 border rounded-md focus:ring-2 focus:ring-green-400"
        >
          <option value="">Eligibility</option>
          <option value="Financial Need">Financial Need</option>
          <option value="Female Students">Female Students</option>
          <option value="Environmental Studies">Environmental Studies</option>
          <option value="STEM Background">STEM Background</option>
        </select>

        <button
          onClick={handleMatch}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
        >
          Find My Matches
        </button>
      </div>

      {matches.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold text-lg mb-2">Top Matches:</h3>
          <ul className="space-y-2">
            {matches.map((m) => (
              <li
                key={m.id}
                className="border p-3 rounded-md bg-gray-50 flex flex-col sm:flex-row sm:justify-between"
              >
                <span>{m.name}</span>
                <span className="text-sm text-gray-600">
                  {m.country} — Score: <strong>{m.score}</strong>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MatchMeForm;
