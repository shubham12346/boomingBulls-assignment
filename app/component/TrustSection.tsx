"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TradeAILanding = () => {
  const containerRef = useRef(null);

  // Hook into scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Animate the X position from 0 to -50% (adjust this as needed)
  const xTitle = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  return (
    <div
      className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center "
      ref={containerRef}
    >
      {/* Main content */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="w-full overflow-hidden">
          <motion.div
            style={{ x: xTitle, lineHeight: "200px" }}
            className="whitespace-nowrap text-nowrap overflow-hidden text-[140px]  md:text-8xl font-bold tracking-tight px-4 flex"
          >
            {/* <div className="w-[4000px] h-[100px] border-1 border-white"></div> */}
            <span className="ml-[200px] text-white">Trade Anytime, </span>
            <span
              style={{
                background:
                  "linear-gradient(135deg, #a855f7, #ec4899, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Anywhere
            </span>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-25 z-10 text-center px-4">
        {/* Main title with split animation */}
        <div className="relative flex items-center justify-center mb-12 h-32">
          {/* Sticky full screen section */}

          {/* Central div with enhanced pop-in effect - centered with highest z-index */}
          <motion.div
            animate={{ scale: 1, rotate: 0, opacity: 1 }} // Pops in to normal size and orientation
            whileHover={{ scale: 1.2 }} // Slightly reduced hover scale for larger element
            transition={{
              type: "spring", // Use spring for a more dynamic pop
              stiffness: 120,
              damping: 10,
              delay: 0.2,
            }}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer
                       w-[200px] h-[200px] bg-gray-800 rounded-2xl flex items-center justify-center text-white text-2xl font-bold
                        box-shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] p-3 "
          >
            <img
              decoding="async"
              loading="lazy"
              width="1000"
              height="1000"
              sizes="226px"
              srcSet="https://framerusercontent.com/images/wPXXd95jZIk3zRQtU2enBhy2g8.png?scale-down-to=512 512w,https://framerusercontent.com/images/wPXXd95jZIk3zRQtU2enBhy2g8.png 1000w"
              src="https://framerusercontent.com/images/wPXXd95jZIk3zRQtU2enBhy2g8.png?scale-down-to=512"
              alt=""
              className="w-[100%] h-[100%]  object-center  object-cover bg-white text-white rounded-2xl "
            ></img>
          </motion.div>
          <div
            className={`w-[200px] h-[200px] bg-gray-500 blur-2xl absolute left-1/2 top-1/2 
              transform -translate-x-1/2 -translate-y-1/2 z-10 `}
          ></div>
        </div>

        {/* App store buttons */}
        <div className="flex flex-col  items-center justify-center gap-1">
          <div className=" backdrop-blur-sm rounded-xl p-2 flex items-center gap-3 cursor-pointer transition-colors duration-300 ">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-black">
                <path
                  fill="currentColor"
                  d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"
                />
              </svg>
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-400">Available on the</div>
              <div className="text-white font-semibold">App Store</div>
            </div>
          </div>

          <div className=" backdrop-blur-sm rounded-xl p-2 flex items-center gap-3 cursor-pointer  transition-colors duration-300 ">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600 rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white">
                <path
                  fill="currentColor"
                  d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"
                />
              </svg>
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-400">GET IT ON</div>
              <div className="text-white font-semibold">Google Play</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeAILanding;
