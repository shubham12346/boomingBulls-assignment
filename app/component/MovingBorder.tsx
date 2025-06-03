"use client";
import React from "react";
import "./moving.css";
export default function MovingBorder({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className: string;
}) {
  return <div className={`movingBorder ${className}`}>{children}</div>;
}
