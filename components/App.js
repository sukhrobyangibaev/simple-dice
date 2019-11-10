import React from "react";
import RollDice from "./RollDice";
// import "./App.css";

export default function App() {
  return (
    <div className="App">
      <RollDice />
      <style jsx>{`
        .App {
          text-align: center;
          margin-top: 5rem;
        }

        .App-logo {
          animation: App-logo-spin infinite 20s linear;
          height: 40vmin;
        }

        .App-header {
          background-color: #282c34;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: calc(10px + 2vmin);
          color: white;
        }

        .App-link {
          color: #61dafb;
        }

        @keyframes App-logo-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
