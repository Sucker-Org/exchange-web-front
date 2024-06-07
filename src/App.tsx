import CommonSnackbar from "./components/CommonSnackbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppRouters from "./routers";
const App = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark"
    }
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <CommonSnackbar />
      <AppRouters />
    </ThemeProvider>
  );
};

export default App;
