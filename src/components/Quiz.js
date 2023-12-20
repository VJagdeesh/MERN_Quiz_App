import React from "react";
import Questions from "./Questions";
export default function Quiz() {
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
      <Questions />
      <div className="grid">
        <button className="btn prev">Previous</button>
        <button className="btn next">Next</button>
      </div>
    </div>
  );
}
