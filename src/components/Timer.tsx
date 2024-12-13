import React, { useEffect, useRef } from 'react';
import { Typography } from '@mui/material';

interface TimerProps {
  timeLeft: number;
  isPomodoro: boolean;
}

const Timer: React.FC<TimerProps> = ({ timeLeft, isPomodoro }) => {
  const alarmSound = useRef(new Audio("/alarm.mp3"));

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  useEffect(() => {
    if (timeLeft === 0) {
      alarmSound.current.play();
    }
  }, [timeLeft]);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h6" style={{ fontSize: '2rem', color: 'white' }}>
        {isPomodoro ? 'Pomodoro' : 'Break'}
      </Typography>
      <Typography variant="h3" component="h2" style={{ fontSize: '6rem', fontWeight: 'bold', color: '#FFFFFF' }}>
        {formatTime(timeLeft)}
      </Typography>
    </div>
  );
};

export default Timer;
