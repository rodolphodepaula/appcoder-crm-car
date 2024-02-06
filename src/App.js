import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaUser } from 'react-icons/fa';

const theme = createTheme({
  // Aqui você pode customizar seu tema
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: '#edf2ff',
    },
  },
  components:{
    /* MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true
      }
    },
    MuiSelect: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
      },
    } */
  }
});

const App = () => (
  <ThemeProvider theme={theme}>
    <h1 className="text-danger">Aplicação React</h1>
    <FaUser style={{fontSize: '60px', color: 'red'}}/>
  </ThemeProvider>
);

export default App;
