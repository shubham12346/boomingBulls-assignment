import React from "react";
import MovingBorder from "./MovingBorder";

const TradingAccountsComparison = () => {
  const accounts = [
    {
      name: "Abcd Vintage",
      description:
        "Perfect for balanced, all-level traders looking for consistency and solid growth.",
      initialCapital: "$10k",
      spreadAdvantage: "from 0.2 pips",
      tradingFees: "No Commission",
      leverageCapacity: "1:Unlimited",
      minimumLotSize: "0.01",
      tradeExecutionLimit: "200 trades during peak hours",
      openPositionCapacity: "Unlimited",
      stopOutThreshold: "0%",
      marginCallActivation: "30%",
      swapPolicy: "0%",
      riskExposure: "Moderate",
      assetOptions: "Forex, Crypto, Stocks, Commodities, Indices",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
    },
    {
      name: "Abcd Cent",
      description:
        "Designed for beginners ready to step into the trading world with minimal risk.",
      initialCapital: "$10",
      spreadAdvantage: "from 0.3 pips",
      tradingFees: "Zero Commission",
      leverageCapacity: "1:Unlimited",
      minimumLotSize: "Same",
      tradeExecutionLimit: "200 trades during peak hours",
      openPositionCapacity: "Unlimited",
      stopOutThreshold: "0%",
      marginCallActivation: "30%",
      swapPolicy: "0%",
      riskExposure: "Low",
      assetOptions: "Forex, Crypto, Stocks, Commodities, Indices",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      highlighted: true,
    },
    {
      name: "Abcd Pro",
      description:
        "Ideal for experienced traders seeking precision, speed, and high-stakes performance.",
      initialCapital: "$500",
      spreadAdvantage: "from 0.1 pips",
      tradingFees: "No Commission",
      leverageCapacity: "1:Unlimited",
      minimumLotSize: "Same",
      tradeExecutionLimit: "200 trades during peak hours",
      openPositionCapacity: "Unlimited",
      stopOutThreshold: "0%",
      marginCallActivation: "30%",
      swapPolicy: "0%",
      riskExposure: "High",
      assetOptions: "Forex, Crypto, Stocks, Commodities, Indices",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {accounts.map((account, index) =>
            index == 1 ? (
              <>
                <MovingBorder key={index}>
                  <Details account={account} />
                </MovingBorder>
              </>
            ) : (
              <Details account={account} key={index} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TradingAccountsComparison;

const Details = ({ account }: any) => {
  const specifications = [
    { label: "Who It's For", key: "description" },
    { label: "Initial Capital Requirement", key: "initialCapital" },
    { label: "Spread Advantage", key: "spreadAdvantage" },
    { label: "Trading Fees", key: "tradingFees" },
    { label: "Leverage Capacity", key: "leverageCapacity" },
    { label: "Minimum Lot Size", key: "minimumLotSize" },
    { label: "Trade Execution Limit", key: "tradeExecutionLimit" },
    { label: "Open Position Capacity", key: "openPositionCapacity" },
    { label: "Stop Out Threshold", key: "stopOutThreshold" },
    { label: "Margin Call Activation", key: "marginCallActivation" },
    { label: "Swap Policy", key: "swapPolicy" },
    { label: "Risk Exposure", key: "riskExposure" },
    { label: "Asset Options", key: "assetOptions" },
  ];

  return (
    <div className={`bg-gray-800 rounded-xl p-6 relative`}>
      {/* Account Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">{account.name}</h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          {account.description}
        </p>
      </div>

      {/* Specifications */}
      <div className="space-y-4 mb-8">
        {specifications.map((spec, specIndex) => (
          <div key={specIndex} className="flex justify-between items-start">
            <span className="text-gray-400 text-sm flex-1 pr-4">
              {spec.label}
            </span>
            <span className="text-white text-sm font-medium text-right flex-1">
              {spec.key === "description" ? (
                <span className="text-xs">{account[spec.key]}</span>
              ) : (
                account[spec.key]
              )}
            </span>
          </div>
        ))}
      </div>

      {/* Start Trading Button */}
      <button
        className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${account.buttonColor}`}
      >
        Start Trading
      </button>
    </div>
  );
};
