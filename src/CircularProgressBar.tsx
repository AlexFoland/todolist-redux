import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface CircularProgressBarProps {
  value: number; // Процент выполнения
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ value }) => {
  return (
    <div style={{ width: "150px", height: "150px" }}>
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        strokeWidth={18}
        styles={buildStyles({
          strokeLinecap: "round",
          pathColor: value > 50 ? "#1976d2" : "#ebc934",
          textColor: "#0a2d52",
          trailColor: "#0a2d52",
        })}
      />
    </div>
  );
};

export default CircularProgressBar;
