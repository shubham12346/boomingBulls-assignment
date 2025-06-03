"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { id: 1, title: "Create your account", align: "left" },
  { id: 2, title: "Deposit your funds", align: "right" },
  { id: 3, title: "KYC", align: "left" },
  { id: 4, title: "Verification", align: "right" },
];

export default function ScrollProgressSteps() {
  const finalRef = useRef(null);
  const finalScroll = useScroll({
    target: finalRef,
    offset: ["start end", "end start"],
  });

  const finalScaleY = useTransform(finalScroll.scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="max-w-md mx-auto px-4 py-20">
      <div className="relative">
        {steps.map((step, index) => {
          const stepRef = useRef(null);

          const { scrollYProgress } = useScroll({
            target: stepRef,
            offset: ["start center", "center center"],
          });

          const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
          const color = useTransform(
            scrollYProgress,
            [0, 1],
            ["#6b7280", "#ffffff"]
          );

          return (
            <div key={step.id} ref={stepRef} className="relative">
              {/* Progress bar ABOVE the step (not for first step) */}
              {index !== 0 && (
                <div className="relative h-[200px] flex justify-center">
                  <div className="w-[2px] bg-gray-700 h-full relative z-0">
                    <motion.div
                      className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-200 to-purple-400 origin-top"
                      style={{ height: "100%", scaleY }}
                    />
                  </div>
                </div>
              )}

              {/* Step content */}
              <div className="relative flex items-center py-10">
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <motion.div style={{ color }} className="font-bold text-lg">
                    {step.id.toString().padStart(2, "0")}
                  </motion.div>
                </div>

                <div
                  className={`absolute top-1/2 transform -translate-y-1/2 ${
                    step.align === "left"
                      ? "left-8 text-left"
                      : "right-8 text-right"
                  }`}
                >
                  <p className="text-sm text-gray-400">Step {step.id}</p>
                  <p className="text-white font-semibold">{step.title}</p>
                </div>
              </div>
            </div>
          );
        })}

        {/* Final progress bar after last step */}
        <div ref={finalRef} className="relative h-[200px] flex justify-center">
          <div className="w-[2px] bg-gray-700 h-full relative z-0">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-200 to-purple-400 origin-top"
              style={{ height: "100%", scaleY: finalScaleY }}
            />
          </div>
        </div>

        {/* Spacer to allow final animation to complete */}
        <div style={{ height: "100vh" }} />
      </div>
    </div>
  );
}
