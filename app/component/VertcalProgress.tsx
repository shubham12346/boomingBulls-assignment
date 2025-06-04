"use client";
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "./Button";

const steps = [
  { id: 1, title: "Create your account", align: "right" },
  { id: 2, title: "Deposit your funds", align: "left" },
  { id: 3, title: "KYC", align: "right" },
  { id: 4, title: "Verification", align: "left" },
];

const ScrollProgressSteps = () => {
  const finalRef = useRef(null);
  const finalScroll = useScroll({
    target: finalRef,
    offset: ["start end", "end start"],
  });

  // const finalScaleY = useTransform(finalScroll.scrollYProgress, [0, 1], [0, 1]);

  // Create refs and transforms outside the map
  const stepRefs = steps.map(() => useRef(null));
  const scrolls = stepRefs.map((ref) =>
    useScroll({ target: ref, offset: ["start center", "center center"] })
  );
  const scaleYs = scrolls.map((s) =>
    useTransform(s.scrollYProgress, [0, 1], [0, 1])
  );
  const colors = scrolls.map((s) =>
    useTransform(s.scrollYProgress, [0, 1], ["#6b7280", "#ffffff"])
  );

  const finalScaleY = useTransform(finalScroll.scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative">
      <div className="w-[600px] mx-auto px-4 py-20 items-center text-center">
        <div className="relative">
          {steps.map((step, index) => {
            return (
              <div key={step.id} ref={stepRefs[index]} className="relative">
                {/* Progress bar ABOVE the step (not for first step) */}
                {index !== 0 && (
                  <div className="relative h-[200px] flex justify-center">
                    <div className="w-[2px] bg-gray-700 h-full relative z-0">
                      <motion.div
                        className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-200 to-purple-400 origin-top"
                        style={{ height: "100%", scaleY: scaleYs[index] }}
                      />
                    </div>
                  </div>
                )}

                {/* Step content */}
                <div className="relative flex items-center py-10">
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                    <motion.div
                      style={{ color: colors[index] }}
                      className="font-bold text-[42px]"
                    >
                      {step.id.toString().padStart(2, "0")}
                    </motion.div>
                  </div>

                  <div
                    className={`absolute ${
                      step.align === "left"
                        ? "left-[30px] text-right"
                        : "left-[340px] text-left"
                    }`}
                  >
                    <p className="text-sm text-gray-400">Step {step.id}</p>
                    <p className="text-white font-semibold text-[22px]">
                      {step.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Final progress bar after last step */}
          <div
            ref={finalRef}
            className="relative h-[200px] flex justify-center"
          >
            <div className="w-[2px] bg-gray-700 h-full relative z-0">
              <motion.div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-200 to-purple-400 origin-top"
                style={{ height: "100%", scaleY: finalScaleY }}
              />
            </div>
          </div>
        </div>
        <div className="mt-16">
          <Button />
        </div>
      </div>

      {/* Next.js warning fix: avoid <img> */}
      <div className="absolute top-100 w-full h-[500px] bg-cover overflow-hidden">
        <img
          decoding="async"
          srcSet="https://framerusercontent.com/images/DluJryXGyTqDXiRnDpJdmkoSbOU.png?scale-down-to=512 512w, https://framerusercontent.com/images/DluJryXGyTqDXiRnDpJdmkoSbOU.png 850w"
          src="https://framerusercontent.com/images/DluJryXGyTqDXiRnDpJdmkoSbOU.png"
          alt=""
          className="object-cover object-center block scale-[2] h-full opacity-[0.4]"
        />
      </div>
    </section>
  );
};

export default ScrollProgressSteps;
