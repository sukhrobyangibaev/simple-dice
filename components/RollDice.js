import React, { useState } from "react";
import Die from "./Die";
// import "./RollDice.css";

export default function RollDice() {
  const sides = ["one", "two", "three", "four", "five", "six"];

  const [die1, setDie1] = useState("one");
  const [die2, setDie2] = useState("one");
  const [rolling, setRolling] = useState(false);

  const roll = () => {
    setRolling(true);

    const newDie1 = sides[Math.floor(Math.random() * sides.length)];
    const newDie2 = sides[Math.floor(Math.random() * sides.length)];
    setDie1(newDie1);
    setDie2(newDie2);

    setTimeout(() => {
      setRolling(false);
    }, 1000);
  };
  return (
    <div className="RollDice">
      <div className="RollDice-container">
        <Die face={die1} rolling={rolling} />
        <Die face={die2} rolling={rolling} />
      </div>
      <button type="button" onClick={roll} disabled={rolling}>
        {rolling ? "Rolling..." : "Roll Dice!"}
      </button>
      <style jsx>{`
        .RollDice {
          display: flex;
          flex-flow: column nowrap;
          min-height: 100vh;
        }
        .RollDice-container {
          display: flex;
          justify-content: center;
          align-content: center;
        }
        .RollDice button {
          align-self: center;
          width: 15em;
          padding: 1.5em;
          font-size: 1em;
          border: 0px;
          border-radius: 10px;
          color: white;
          background-color: black;
          margin-top: 3em;
        }

        .RollDice button:hover {
          background-color: darkslateblue;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
