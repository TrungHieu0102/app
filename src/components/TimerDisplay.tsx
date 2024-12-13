import React from 'react';

interface TimerDisplayProps {
  timeLeft: number;
  isPomodoro: boolean;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ timeLeft }) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div style={{ 
      fontSize: '6rem', 
      fontWeight: 'bold', 
      marginBottom: '20px',
      color: 'white', 
    }}>
      {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
};

export default TimerDisplay;
