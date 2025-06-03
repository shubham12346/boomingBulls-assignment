import React, { useState } from "react";

const Button = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  return (
    <button
      className={`
            
          relative overflow-hidden
          px-8 py-4 rounded-md
          bg-gradient-to-r from-purple-600 to-purple-700
          hover:from-purple-500 hover:to-purple-600
          active:from-purple-700 active:to-purple-800
          text-white font-semibold text-lg
          transition-all duration-300 ease-out
          transform hover:scale-105 active:scale-95
          shadow-lg hover:shadow-xl
          border border-purple-500/20
          group
          ${isPressed ? "animate-pulse" : ""}
        `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onClick={() => {
        // Add your navigation logic here
        console.log("Opening free account...");
      }}
    >
      {/* Gradient overlay for extra shine effect */}
      <div
        className={`inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
            transform -skew-x-12 -translate-x-full group-hover:translate-x-full
            transition-transform duration-1000 ease-out`}
      />

      {/* Button content */}
      <div className="relative flex items-center gap-3 ">
        <span className="tracking-wide">Open FREE Account</span>

        {/* Arrow icon */}
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${
            isHovered ? "translate-x-1" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>

      {/* Glow effect */}
      <div
        className={`
          absolute inset-0 rounded-full
          bg-purple-400/20 blur-xl
          transition-opacity duration-300
          ${isHovered ? "opacity-100" : "opacity-0"}
        `}
        style={{ transform: "scale(1.2)" }}
      />
    </button>
  );
};

export default Button;
