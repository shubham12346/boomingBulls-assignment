"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PayoutSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const blur = useTransform(scrollYProgress, [0, 1], [10, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <section
      ref={ref}
      className="relative min-h-[800px] bg-black flex flex-col items-center justify-center text-white px-4 overflow-hidden"
    >
      {/* Top Button */}
      <motion.button
        className="border border-white/30 text-white py-2 px-6 rounded-full mb-6 text-sm relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Payouts
      </motion.button>

      {/* Animated Blurred Text */}
      <motion.div
        style={{ filter: blur, opacity }}
        className="text-center space-y-3 mb-6 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold">We ’ve Paid Out Over</h2>
        <h3 className="text-3xl md:text-5xl font-semibold text-white/90">
          $1M to Traders
        </h3>
        <p className="text-base text-white/70">
          Your Trust is Our Fuel—Power Up with Abcd
        </p>
      </motion.div>

      {/* Huge Animated Number */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-6xl md:text-[240px] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-purple-400 relative z-10"
      >
        $999,682+
      </motion.div>
      {/* Zoomed & Working Background Video */}
      <div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-[1.5] opacity-50 z-0"
          src="https://framerusercontent.com/assets/xECpz8zWZNwZhoPNVva63Z5xs.mp4"
          height={"200px"}
        />
      </div>

      {/* CTA Button */}
      <motion.a
        href="#"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-8 px-6 py-3 bg-black text-white rounded-full text-sm font-medium flex items-center gap-2 shadow-lg relative z-10"
      >
        Are you Next? <span className="text-xl">↗</span>
      </motion.a>
    </section>
  );
};

export default PayoutSection;
