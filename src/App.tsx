// App.tsx
import React from "react";
import { Container, CssBaseline, Paper, LinearProgress } from "@mui/material";
import TimerDisplay from "./components/TimerDisplay";
import Controls from "./components/Controls";
import SessionSelector from "./components/SessionSelector";
import Header from "./components/Header";
import useTimer from "./hooks/useTimer";

const App: React.FC = () => {
  const TIME_SETTINGS = {
    pomodoro: 25 * 600,
    shortBreak: 5 * 60,
    longBreak: 15 * 60,
  };

  const { timeLeft, sessionType, isRunning, startStopTimer, resetTimer, changeSessionType } = useTimer(TIME_SETTINGS);

  const containerColors = {
    pomodoro: "#BA4949",
    shortBreak: "#4C9196",
    longBreak: "#4D7FA2",
  };

  const paperColors = {
    pomodoro: "#C15C5C",
    shortBreak: "#38858A",
    longBreak: "#397097",
  };

  const containerColor = containerColors[sessionType];
  const paperColor = paperColors[sessionType];

  const totalTime = TIME_SETTINGS[sessionType];
  const progress = ((totalTime - timeLeft) / totalTime) * 100;

  return (
    <>
      <CssBaseline />
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
          height: "100%",
          backgroundColor: containerColor,
          transition: "background-color 0.5s ease",
        }}
      >
        <Header containerColor={containerColor} />
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
        <Paper
          elevation={0}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: paperColor,
            transition: "background-color 0.5s ease",
            width: "100%",
            maxWidth: 500,
          }}
        >
          <SessionSelector
            sessionType={sessionType}
            changeSessionType={changeSessionType}
          />
          <TimerDisplay
            timeLeft={timeLeft}
            isPomodoro={sessionType === "pomodoro"}
          />
          <Controls
            isRunning={isRunning}
            startStopTimer={startStopTimer}
            resetTimer={resetTimer}
            containerColor={containerColor}
          />
        </Paper>
      </Container>
    </>
  );
};

export default App;
