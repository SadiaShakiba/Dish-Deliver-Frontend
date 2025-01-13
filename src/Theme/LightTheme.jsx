const { createTheme } = require("@mui/material");

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1f98bf",
    },
    secondary: {
      main: "#1e1e1e",
    },
    white: {
      main: "#FEFEFE",
    },
    background: {
      main: "#FFFFFF",
      default: "F2F2F2",
      paper: "F2F2F2",
    },
    textColor: {
      main: "#0D0D0D",
    },
  },
});
