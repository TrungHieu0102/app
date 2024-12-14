import React, { useState } from "react";
import { Typography, Box, IconButton, Modal, TextField, useMediaQuery } from "@mui/material";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

interface HeaderProps {
  containerColor: string;
  onSettingsChange: (newSettings: {
    pomodoro: number;
    shortBreak: number;
    longBreak: number;
  }) => void;
}

const Header: React.FC<HeaderProps> = ({
  containerColor,
  onSettingsChange,
}) => {
  const [open, setOpen] = useState(false);
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSaveSettings = () => {
    onSettingsChange({
      pomodoro: pomodoro * 60,
      shortBreak: shortBreak * 60,
      longBreak: longBreak * 60,
    });
    handleClose();
  };

  // Responsive styling using useMediaQuery
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
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
    "--button-font-size": isMobile ? "1rem" : "1.2rem", // Adjust button size for mobile
  } as React.CSSProperties;

  return (
    <Box
      sx={{
        width: "100%",
        padding: "20px",
        backgroundColor: containerColor,
        display: "flex",
        justifyContent: isMobile ? "space-between" : "center",  // Adjust alignment for mobile
        alignItems: "center",
        transition: "background-color 0.5s ease",
        gap: isMobile ? "10px" : "200px",  // Adjust gap for mobile
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "white",
          padding: "10px 20px",
          fontSize: isMobile ? "1.5rem" : "2rem",  // Adjust font size for mobile
        }}
      >
        POMOFOCUS
      </Typography>

      <IconButton
        color="inherit"
        onClick={handleOpen}
        sx={{
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
          },
        }}
      >
        <SettingsSuggestIcon
          sx={{
            color: "white",
            fontSize: isMobile ? 30 : 40,  // Adjust icon size for mobile
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
            width: isMobile ? "80%" : 350,
            transition: "background-color 0.3s ease",
            overflow: "hidden",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              marginBottom: 2,
              fontWeight: "bold",
              color: containerColor,
            }}
          >
            Change time{" "}
          </Typography>
          <TextField
            label="Pomodoro (minute)"
            type="number"
            value={pomodoro}
            onChange={(e) => setPomodoro(Number(e.target.value))}
            fullWidth
            margin="normal"
            sx={{
              input: {
                color: containerColor,
              },
              "& .MuiInputLabel-root": {
                color: containerColor,
              },
            }}
          />
          <TextField
            label="Short Break (minute)"
            type="number"
            value={shortBreak}
            onChange={(e) => setShortBreak(Number(e.target.value))}
            fullWidth
            margin="normal"
            sx={{
              input: {
                color: containerColor,
              },
              "& .MuiInputLabel-root": {
                color: containerColor,
              },
            }}
          />
          <TextField
            label="Long Break (minute)"
            type="number"
            value={longBreak}
            onChange={(e) => setLongBreak(Number(e.target.value))}
            fullWidth
            margin="normal"
            sx={{
              input: {
                color: containerColor,
              },
              "& .MuiInputLabel-root": {
                color: containerColor,
              },
            }}
          />

          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
            <AwesomeButton
              type="primary"
              onPress={handleSaveSettings}
              style={buttonStyle}
              size="small"
            >
              Save
            </AwesomeButton>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Header;
