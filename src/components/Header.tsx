import React from 'react';
import { Typography, Box } from '@mui/material';

interface HeaderProps {
  containerColor: string;
}

const Header: React.FC<HeaderProps> = ({ containerColor }) => {

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
    </Box>
  );
};

export default Header;
