import React, { useState } from "react";
import {
  Container,
  CssBaseline,
  Paper,
  CircularProgress,
  Box,
} from "@mui/material";
import TimerDisplay from "./components/TimerDisplay";
import Controls from "./components/Controls";
import SessionSelector from "./components/SessionSelector";
import Header from "./components/Header";
import SessionCount from "./components/SessionCount";
import useTimer from "./hooks/useTimer";

const App: React.FC = () => {
  const [timeSettings, setTimeSettings] = useState({
    pomodoro: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60,
  });

  const {
    timeLeft,
    sessionType,
    isRunning,
    startStopTimer,
    resetTimer,
    changeSessionType,
    skipToNextSession,
    pomodoroCount,
    shortBreakCount,
    longBreakCount,
  } = useTimer(timeSettings);

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

  const totalTime = timeSettings[sessionType];
  const progress = ((totalTime - timeLeft) / totalTime) * 100;

  const handleSettingsChange = (newSettings: {
    pomodoro: number;
    shortBreak: number;
    longBreak: number;
  }) => {
    setTimeSettings(newSettings);
  };

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
        <Header
          containerColor={containerColor}
          onSettingsChange={handleSettingsChange}
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
            position: "relative",
            overflow: "hidden",
            paddingBottom: 5,
            textAlign: "center",
          }}
        >
          <SessionSelector
            sessionType={sessionType}
            changeSessionType={changeSessionType}
          />
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 350,
              height: 350,
              borderRadius: "50%",
              zIndex: 1,
              marginBottom: 3,
              marginTop: 3,
            }}
          >
            <CircularProgress
              variant="determinate"
              value={100}
              size={350}
              sx={{
                color: "rgba(255, 255, 255, 0.2)",
                position: "absolute",
                zIndex: 0,
                thickness: 1,
              }}
            />

            <CircularProgress
              variant="determinate"
              value={progress}
              size={350}
              sx={{
                color: "#ffffff",
                position: "absolute",
                zIndex: 1,
                thickness: 1,
              }}
            />

            <TimerDisplay
              timeLeft={timeLeft}
              isPomodoro={sessionType === "pomodoro"}
            />
          </Box>

          <Controls
            isRunning={isRunning}
            startStopTimer={startStopTimer}
            resetTimer={resetTimer}
            containerColor={containerColor}
            skipToNextSession={skipToNextSession}
          />
        </Paper>

        <SessionCount
          pomodoroCount={pomodoroCount}
          shortBreakCount={shortBreakCount}
          longBreakCount={longBreakCount}
        />
      </Container>
    </>
  );
};

export default App;
