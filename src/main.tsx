import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import theme from './theme';  // Đảm bảo theme được import chính xác
import { ThemeProvider } from '@mui/material/styles';  // Import ThemeProvider từ MUI

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>  {/* Bao bọc App bằng ThemeProvider */}
      <App />
    </ThemeProvider>
  </StrictMode>
);
