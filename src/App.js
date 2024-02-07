import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import 'bootstrap/dist/css/bootstrap.min.css'
import Routes from "./Routes";
import { Provider } from "react-redux";
import { store } from "./store/store";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: '#edf2ff',
    },
  },
  components: {
    // Customização global para TextField
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
      },
    },
    // Customização global para Select
    MuiSelect: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
      },
    },
  },
});

const App = () => (
  <><Provider store={store} />
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider></>
);

export default App;
