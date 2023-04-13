import React from "react";
import { useSelector } from "react-redux";

export const ScoreCard = () => {
  const score = useSelector((state) => state.currScore);
  return (
    <div className="scorecard">
      <span>Score : </span>
      <span className="scoreno">{score}/100</span>
    </div>
  );
};
