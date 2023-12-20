import React, { useEffect, useState } from "react";
import data from "../database/data";
export default function Questions() {
  const [checked, setChecked] = useState(undefined);
  const question = data[0];
  useEffect(() => {
    console.log(question);
  });

  return (
    <div className="questions">
      <h2 className="text-light">{question.question}</h2>
      <ul key={question.id}>
        {question.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={checked}
              name="options"
              id={`q${i}-option`}
            />
            <label className="text-primary" htmlFor={`q${i}-option`}>
              {q}
            </label>
            <div className="check"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
