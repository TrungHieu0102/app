import React from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

interface ControlsProps {
  isRunning: boolean;
  startStopTimer: () => void;
  resetTimer: () => void;
  containerColor: string;
  skipToNextSession: () => void;
}

const Controls: React.FC<ControlsProps> = ({
  isRunning,
  startStopTimer,
  resetTimer,
  containerColor,
  skipToNextSession,
}) => {
  const buttonStyle = {
    "--button-primary-color": containerColor,
    "--button-primary-color-dark": containerColor,
    "--button-hover-pressure": "2",
    "--button-primary-color-active": containerColor, 
    "--button-raise-level": "10px",
    "--button-primary-color-hover": `${containerColor}`,
    "--button-border-radius": "8px",
    "--button-hover-color": "#fff",
    "--button-height": "60px",
    "--button-font-size": "1.2rem",
  } as React.CSSProperties;

  return (
    <div style={{ marginTop: 20, display: "flex", gap: "16px" }}>
      <AwesomeButton
        type="primary"
        onPress={startStopTimer}
        style={buttonStyle}
        size="small"
      >
        {isRunning ? "Pause" : "Start"}
      </AwesomeButton>

      <AwesomeButton
        size="small"
        type="primary"
        onPress={resetTimer}
        style={buttonStyle}
      >
        Reset
      </AwesomeButton>

      <AwesomeButton
        size="small"
        type="primary"
        onPress={skipToNextSession}
        style={buttonStyle}
      >
        Skip
      </AwesomeButton>
    </div>
  );
};

export default Controls;
