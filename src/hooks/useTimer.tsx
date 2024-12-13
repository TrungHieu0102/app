// hooks/useTimer.tsx
import { useState, useEffect, useMemo } from "react";

type TimeSettings = Record<string, number>;  

const useTimer = (TIME_SETTINGS: TimeSettings) => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(TIME_SETTINGS.shortBreak);
  const [sessionType, setSessionType] = useState<"pomodoro" | "shortBreak" | "longBreak">("shortBreak");

  const alarmSound = useMemo(() => new Audio("/alarm.mp3"), []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft <= 0) {
            clearInterval(interval!);
            alarmSound.play();
            if (Notification.permission === "granted") {
              new Notification(`Session ended`, {
                body: `Time for a break!`,
                icon: "/icon.png",
              });
            }

            switch (sessionType) {
              case "pomodoro":
                setSessionType("shortBreak");
                setTimeLeft(TIME_SETTINGS.shortBreak);
                break;
              case "shortBreak":
                setSessionType("pomodoro");
                setTimeLeft(TIME_SETTINGS.pomodoro);
                break;
              case "longBreak":
                setSessionType("pomodoro");
                setTimeLeft(TIME_SETTINGS.pomodoro);
                break;
            }
            return 0;
          }
          return prevTimeLeft - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, sessionType, alarmSound, TIME_SETTINGS]);

  const startStopTimer = () => setIsRunning(!isRunning);

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(TIME_SETTINGS[sessionType]);
  };

  const changeSessionType = (type: "pomodoro" | "shortBreak" | "longBreak") => {
    setSessionType(type);
    setIsRunning(false);
    setTimeLeft(TIME_SETTINGS[type]);
  };

  return { timeLeft, sessionType, isRunning, startStopTimer, resetTimer, changeSessionType };
};

export default useTimer;
