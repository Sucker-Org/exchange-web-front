// import { useState } from "react";
import CommonSnackbar from "./components/CommonSnackbar";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppRouters from "./routers";
import { useThemeStore } from "./stores/modules/theme";
import { darkTheme, lightTheme } from "./config/themeConfig";
const App = () => {
  const themeMode = useThemeStore();
  return (
    <ThemeProvider theme={themeMode.theme === "dark" || themeMode.theme === null ? darkTheme : lightTheme}>
      <CssBaseline />
      <CommonSnackbar />
      <AppRouters />
    </ThemeProvider>
  );
};

export default App;
