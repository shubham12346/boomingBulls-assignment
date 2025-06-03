"use client";
import React from "react";
import "./moving.css";
export default function MovingBorder({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="movingBorder">{children}</div>;
}
