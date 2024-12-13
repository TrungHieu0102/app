import React from "react";
import { Button } from "@mui/material";

interface ControlsProps {
  isRunning: boolean;
  startStopTimer: () => void;
  resetTimer: () => void;
  containerColor: string;
}

const Controls: React.FC<ControlsProps> = ({
  isRunning,
  startStopTimer,
  resetTimer,
  containerColor,
}) => {
  return (
    <div style={{ marginTop: 20, display: "flex", gap: "8px" }}>
      <Button
        onClick={startStopTimer}
        sx={{
          border: `2px solid ${containerColor}`,
          backgroundColor: "white",
          color: containerColor,
          boxShadow: "none",
          padding: "12px 24px",
          fontSize: "1.2rem",
          borderRadius: "8px",
          "&:hover": {
            backgroundColor: "white",
            color: containerColor,
            border: `2px solid ${containerColor}`,
          },
          "&:active": {
            backgroundColor: "white",
            color: containerColor,
            border: `2px solid ${containerColor}`,
          },
        }}
      >
        {isRunning ? "Pause" : "Start"}
      </Button>
      <Button
        onClick={resetTimer}
        sx={{
          border: `2px solid ${containerColor}`,
          backgroundColor: "white",
          color: containerColor,
          boxShadow: "none",
          padding: "12px 24px",
          fontSize: "1.2rem",
          borderRadius: "8px",

          "&:hover": {
            backgroundColor: "white",
            color: containerColor,
            border: `2px solid ${containerColor}`,
          },
          "&:active": {
            backgroundColor: "white",
            color: containerColor,
            border: `2px solid ${containerColor}`,
          },
        }}
      >
        Reset
      </Button>
    </div>
  );
};

export default Controls;
