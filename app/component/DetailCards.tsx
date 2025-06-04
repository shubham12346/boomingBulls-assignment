"use client";
import React from "react";
import "./moving.css";

type accountType = {
  name: string;
  description: string;
  initialCapital: string;
  spreadAdvantage: string;
  tradingFees: string;
  leverageCapacity: string;
  minimumLotSize: string;
  tradeExecutionLimit: string;
  openPositionCapacity: string;
  marginCallActivation: string;
  swapPolicy: string;
  stopOutThreshold: string;
  riskExposure: string;
  assetOptions: string;
};
const TradingAccountsComparison = () => {
  const accounts: accountType[] = [
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
    },
  ];

  const menuItems = [
    "Who It's For",
    "Initial Capital Requirement",
    "Spread Advantage",
    "Trading Fees",
    "Leverage Capacity",
    "Minimum Lot Size",
    "Trade Execution Limit",
    "Open Position Capacity",
    "Stop Out Threshold",
    "Margin Call Activation",
    "Swap Policy",
    "Risk Exposure",
    "Asset Options",
  ];

  return (
    <div className=" min-h-[900px]   text-white p-8">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className=" text-white h-full w-[250px] p-6 ">
          <nav className="space-y-1">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`
              pt-2  px-4 rounded-lg cursor-pointer transition-all duration-200 ease-in-out
              border-b border-gray-800 last:border-b-0
              hover:bg-gray-800 hover:border-gray-700
            `}
              >
                <div className="text-gray-300 font-medium text-[14px] tracking-wide">
                  {item}
                </div>
              </div>
            ))}
          </nav>
        </div>
        <div className="flex flex-col lg:flex-row ">
          {accounts.map((account, index) => (
            <Details account={account} key={index} highLighted={index === 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TradingAccountsComparison;

const Details = ({
  account,
  highLighted = false,
}: {
  account: accountType;
  highLighted: boolean;
}) => {
  const specifications = [
    { key: "initialCapital" },
    { key: "spreadAdvantage" },
    { key: "tradingFees" },
    { key: "leverageCapacity" },
    { key: "minimumLotSize" },
    { key: "tradeExecutionLimit" },
    { key: "openPositionCapacity" },
    { key: "stopOutThreshold" },
    { key: "marginCallActivation" },
    { key: "swapPolicy" },
    { key: "riskExposure" },
    { key: "assetOptions" },
  ];

  return (
    <div
      className={` h-full w-[250px] ${
        highLighted
          ? "bg-gradient-to-b from-[#0f0c14] to-black movingBorder "
          : "bg-gradient-to-b from-[#2b2338] to-black"
      }  text-white  border border-[#3c2f4b] shadow-lg space-y-4 origin-top  rounded-xl  relative  `}
    >
      <div className="p-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">{account.name}</h2>
          <p className="text-gray-300 text-sm leading-relaxed w-[210px]">
            {account.description}
          </p>
        </div>
        <div className="space-y-4 mb-8">
          {specifications.map((spec, specIndex) => (
            <div
              key={specIndex}
              className="flex items-center justify-center flex-wrap"
            >
              <span className="text-white text-sm font-medium text-center text-wrap  ">
                {account[spec.key as keyof accountType]}
              </span>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            className={` py-1 px-2 rounded-lg  bg-purple-400 text-[14px]`}
          >
            Start Trading
          </button>
        </div>
      </div>
    </div>
  );
};
