import React from "react";
// import "./Die.css";

export default function Die({ face, rolling }) {
  return (
    <div>
      <i className={`Die fas fa-dice-${face} ${rolling && "shaking"}`} />
      <style jsx>{`
        .Die {
          font-size: 10em;
          padding: 0.25em;
          color: slateblue;
        }

        .shaking {
          animation-name: wobble;
          animation-duration: 1s;
        }

        @keyframes wobble {
          from {
            transform: translate3d(0, 0, 0);
          }

          15% {
            transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
          }

          30% {
            transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
          }

          45% {
            transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
          }

          60% {
            transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
          }

          75% {
            transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
          }

          to {
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </div>
  );
}