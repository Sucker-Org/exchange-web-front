import { createTheme, alpha } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import { grey } from "@mui/material/colors";
export const defaultBorderColor = (mode: PaletteMode) => (mode === "dark" ? "rgba(43, 49, 57, 1)" : grey[300]);

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      main: "#0078FD"
    },
    text: {
      primary: mode === "dark" ? "#fff" : grey[800],
      secondary: mode === "dark" ? "#848E9C" : grey[600],
      grey: mode === "dark" ? "#6E7583" : grey[600]
    },
    background: {
      default: mode === "dark" ? "#000" : "#fafafa",
      paper: mode === "dark" ? "#121212" : "#fafafa",
      light: mode === "dark" ? "#1C1F24" : "#eeeeee"
    },
    divider: mode === "dark" ? alpha(grey[600], 0.3) : alpha(grey[300], 0.5)
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          --color-scrollbar: ${mode === "dark" ? "#5e6673" : "#B7BDC6"};
        }
      `
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          border: `1px solid ${defaultBorderColor(mode)}`
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: defaultBorderColor(mode)
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderColor: defaultBorderColor(mode),
          "&:hover": {
            borderColor: defaultBorderColor(mode)
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderColor: defaultBorderColor(mode)
        }
      }
    }
  }
});

export const darkTheme = createTheme({
  ...getDesignTokens("dark")
});

export const lightTheme = createTheme({
  ...getDesignTokens("light")
});
