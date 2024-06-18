/*
 * @Email: allen0101stanton@outlook.com
 * @Author: Eric
 * @Description:Layout component
 */
import React from "react";
import { Box, AppBar, Toolbar, useTheme } from "@mui/material";
import ToolBarLeft from "./components/Header/ToolBarLeft";
import ToolBarRight from "./components/Header/ToolBarRight";
import "./index.scss";
import Footer from "./components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const appBarColor = mode === "dark" ? "#0D0E0F" : "#F5F5F5";
  const borderColor = mode === "dark" ? "#222429" : "#E0E0E0";
  return (
    <Box className="layout">
      <Box className="header">
        <AppBar
          position="absolute"
          sx={{
            background: appBarColor,
            boxShadow: "none",
            borderBottom: "1px solid " + borderColor
          }}
        >
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <ToolBarLeft />
            </Box>
            <ToolBarRight />
          </Toolbar>
        </AppBar>
      </Box>
      <Box className="content" minHeight="48vh">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
