import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0078FD"
    },
    background: {
      default: "#000000",
      paper: "#1E1E1E"
    }
  }
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0078FD"
    },
    background: {
      default: "#f5f5f5",
      paper: "#f5f5f5"
    }
  }
});
