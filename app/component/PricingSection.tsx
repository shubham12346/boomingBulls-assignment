// components/PricingSection.jsx
import { motion } from "framer-motion";

const plans = [
  {
    title: "Abcd Vintage",
    description:
      "Perfect for balanced, all-level traders looking for consistency and solid growth.",
    capital: "$100",
    spread: "from 0.2 pips",
    commission: "No Commission",
    risk: "Moderate",
  },
  {
    title: "Abcd Cent",
    description:
      "Designed for beginners ready to step into the trading world with minimal risk.",
    capital: "$10",
    spread: "from 0.3 pips",
    commission: "Zero Commission",
    risk: "Low",
  },
  {
    title: "Abcd Pro",
    description:
      "Ideal for experienced traders seeking precision, speed, and high-stakes performance.",
    capital: "$500",
    spread: "from 0.1 pips",
    commission: "No Commission",
    risk: "High",
  },
];

const borderAnim = {
  rest: { scale: 1, borderColor: "transparent" },
  hover: {
    scale: 1.03,
    borderColor: "#8b5cf6",
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

export default function PricingSection() {
  return (
    <div className="bg-black text-white py-20 px-6 md:px-20">
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-12">
        Flexible Deposits for Every Trader
      </h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={borderAnim}
            className="relative rounded-xl border-2 border-transparent p-6 bg-gradient-to-b from-[#181825] to-[#12121b] hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{plan.description}</p>
            <ul className="text-sm space-y-1 mb-4">
              <li>
                <strong>Initial Capital Requirement:</strong> {plan.capital}
              </li>
              <li>
                <strong>Spread Advantage:</strong> {plan.spread}
              </li>
              <li>
                <strong>Trading Fees:</strong> {plan.commission}
              </li>
              <li>
                <strong>Leverage Capacity:</strong> 1-Unlimited
              </li>
              <li>
                <strong>Minimum Lot Size:</strong> 0.01
              </li>
              <li>
                <strong>Trade Execution Limit:</strong> 200 trades during peak
                hours
              </li>
              <li>
                <strong>Open Position Capacity:</strong> Unlimited
              </li>
              <li>
                <strong>Stop Out Threshold:</strong> 0%
              </li>
              <li>
                <strong>Margin Call Activation:</strong> 30%
              </li>
              <li>
                <strong>Swap Policy:</strong> 0%
              </li>
              <li>
                <strong>Risk Exposure:</strong> {plan.risk}
              </li>
              <li>
                <strong>Asset Options:</strong> Forex, Crypto, Stocks,
                Commodities, Indices
              </li>
            </ul>
            <button className="mt-auto bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm transition-colors">
              Start Trading
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
