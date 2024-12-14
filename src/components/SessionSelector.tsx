  import React from "react";
  import { Button } from "@mui/material";

  interface SessionSelectorProps {
    sessionType: "pomodoro" | "shortBreak" | "longBreak";
    changeSessionType: (type: "pomodoro" | "shortBreak" | "longBreak") => void;
  }

  const SessionSelector: React.FC<SessionSelectorProps> = ({ sessionType, changeSessionType }) => {
    const colors = {
      pomodoro: "#C15C5C",
      shortBreak: "#38858A",
      longBreak: "#397097",
    };

    return (
      <div style={{ display: "flex", gap: "8px" }}>
        <Button
          onClick={() => changeSessionType("pomodoro")}
          sx={{
            backgroundColor: sessionType === "pomodoro" ? colors.pomodoro : "inherit",
            color: "white",
            borderRadius: "8px", 
            border: "none",
            padding: "12px 24px",
            position: "relative", 
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(255, 255, 255, 0.2)", 
              display: sessionType === "pomodoro" ? "block" : "none", 
              pointerEvents: "none", 
              borderRadius: "8px", 
            },
          }}
        >
          Pomodoro
        </Button>
        <Button
          onClick={() => changeSessionType("shortBreak")}
          sx={{
            backgroundColor: sessionType === "shortBreak" ? colors.shortBreak : "inherit",
            color: "white",
            borderRadius: "8px",
            border: "none",
            padding: "12px 24px",
            position: "relative", 
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(255, 255, 255, 0.2)", 
              display: sessionType === "shortBreak" ? "block" : "none", 
              pointerEvents: "none", 
              borderRadius: "8px", 
            },
          }}
        >
          Short Break
        </Button>
        <Button
          onClick={() => changeSessionType("longBreak")}
          sx={{
            backgroundColor: sessionType === "longBreak" ? colors.longBreak : "inherit",
            color: "white",
            borderRadius: "8px", 
            border: "none",
            padding: "12px 24px",
            position: "relative", 
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(255, 255, 255, 0.2)", 
              display: sessionType === "longBreak" ? "block" : "none", 
              pointerEvents: "none",
              borderRadius: "8px", 
            },
          }}
        >
          Long Break
        </Button>
      </div>
    );
  };

  export default SessionSelector;
