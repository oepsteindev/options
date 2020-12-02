import React, { useState, useEffect } from "react";
// import axios from "axios";

function FairValue({ todo, index, editTodo }) {
  const [cash, setCash] = useState("");
  const [R, setR] = useState("");
  const [X, setX] = useState("");
  const [dividends, setDividends] = useState("");
  const [CalcFairValue, setCalcFairValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // setCash("");
    // setR("");
    // setX("");
    // setDividends("");
    // setCalcFairValue("");

    let bracketOperand = 1 + R * (X / 360);
    let equation = cash * bracketOperand - dividends;
    setCalcFairValue(equation.toFixed(2));
  };

  function clearAll() {
    setCash("");
    setR("");
    setX("");
    setDividends("");
    setCalcFairValue("");
  }

  return (
    <div className="todo">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          name="name"
          value={cash}
          placeholder="Cash"
          onChange={(e) => setCash(e.target.value)}
        />
        <br></br>
        <input
          type="text"
          className="input"
          name="R"
          value={R}
          placeholder="R value"
          onChange={(e) => setR(e.target.value)}
        />
        <br></br>
        <input
          type="text"
          className="input"
          name="X"
          value={X}
          placeholder="X value"
          onChange={(e) => setX(e.target.value)}
        />
        <br></br>
        <input
          type="text"
          className="input"
          name="dividends"
          value={dividends}
          placeholder="Dividends"
          onChange={(e) => setDividends(e.target.value)}
        />
        <button className="btn btn-success">Calculate Fair Value</button>
        &nbsp;&nbsp;&nbsp;
        <button className="btn btn-success" onClick={clearAll}>
          Clear Form
        </button>
      </form>
      <br></br>
      <br></br>
      
      Fair Value: {CalcFairValue} = {cash} x (1 + {R}( {X} % 360) - {dividends}
    </div>
  );
}

export default FairValue;
