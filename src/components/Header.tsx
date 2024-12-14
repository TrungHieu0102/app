import React, { useState } from "react";
import { Typography, Box, IconButton, Modal, TextField, Button } from "@mui/material";
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
interface HeaderProps {
  containerColor: string;
  onSettingsChange: (newSettings: { pomodoro: number; shortBreak: number; longBreak: number }) => void;
}

const Header: React.FC<HeaderProps> = ({ containerColor, onSettingsChange }) => {
  const [open, setOpen] = useState(false);
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSaveSettings = () => {
    onSettingsChange({
      pomodoro: pomodoro * 60, // Chuyển sang giây
      shortBreak: shortBreak * 60,
      longBreak: longBreak * 60,
    });
    handleClose();
  };

  return (
    <Box
      sx={{
        width: "100%",
        padding: "20px",
        backgroundColor: containerColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "background-color 0.5s ease",
        gap:"200px"
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "white",
        }}
      >
        Pomofocus
      </Typography>
      <IconButton color="inherit" onClick={handleOpen}>
      <SettingsSuggestIcon 
      sx={{ 
        color: 'white',  
        fontSize: 40,   
      }} 
    />
      </IconButton>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: 4,
            borderRadius: 2,
            boxShadow: 24,
            width: 300,
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Cập nhật thời gian
          </Typography>
          <TextField
            label="Pomodoro (phút)"
            type="number"
            value={pomodoro}
            onChange={(e) => setPomodoro(Number(e.target.value))}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Short Break (phút)"
            type="number"
            value={shortBreak}
            onChange={(e) => setShortBreak(Number(e.target.value))}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Long Break (phút)"
            type="number"
            value={longBreak}
            onChange={(e) => setLongBreak(Number(e.target.value))}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
            onClick={handleSaveSettings}
          >
            Lưu
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Header;
