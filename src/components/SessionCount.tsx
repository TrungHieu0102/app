import React from "react";
import { Box, Typography } from "@mui/material";

interface SessionCountProps {
  pomodoroCount: number;
  shortBreakCount: number;
  longBreakCount: number;
}

const SessionCount: React.FC<SessionCountProps> = ({
  pomodoroCount,
  shortBreakCount,
  longBreakCount,
}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
      <Box>
        <Typography variant="h6" sx={{ color: "white" }}>
          Pomodoro: {pomodoroCount}
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" sx={{ color: "white" }}>
          Short Break: {shortBreakCount}
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" sx={{ color: "white" }}>
          Long Break: {longBreakCount}
        </Typography>
      </Box>
    </Box>
  );
};

export default SessionCount;
