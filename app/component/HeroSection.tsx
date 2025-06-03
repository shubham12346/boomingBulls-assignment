"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import StatusDisplay from "./VertcalProgress";

const steps = [
  { id: 1, title: "Register your account" },
  { id: 2, title: "KYC" },
  { id: 3, title: "Deposit Funds" },
  { id: 4, title: "Start Trading & Earn Profits" },
];

export default function HeroSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section ref={ref} className="py-16 ">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mt-8 flex flex-col items-center justify-center">
          <p className=" font-[600] text-[14px]  mb-4 bg-gradient-to-r from-purple-200 to-purple-300 text-transparent bg-clip-text inline-block">
            Our Process
          </p>
          <p className="text-5xl">
            Become a <span className="text-[rgb(163,92,162)]">ABcd Pro </span>
            in sec...
          </p>

          <p className="flex text-[rgba(255,255,255,0.75)]">
            🚀 Sign up. Fund.Trade.
          </p>
        </div>

        <div className="relative ">
          <StatusDisplay />
        </div>

        <div className="h-[500px] w-[200px]">bottom</div>
      </div>
    </section>
  );
}
