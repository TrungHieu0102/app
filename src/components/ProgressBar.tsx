import React from "react";
import { LinearProgress } from "@mui/material";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <LinearProgress
      variant="determinate"
      value={progress}
      sx={{
        width: "100%",
        maxWidth: 600,
        marginTop: 2,
        marginBottom: 2,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        "& .MuiLinearProgress-bar": {
          backgroundColor: "#ffffff", 
        },
      }}
    />
  );
};

export default ProgressBar;
