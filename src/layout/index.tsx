/*
 * @Email: allen0101stanton@outlook.com
 * @Author: Eric
 * @Description:Layout component
 */
import React from "react";
import { Box, AppBar, Toolbar, useTheme } from "@mui/material";
import ToolBarLeft from "./components/Header/ToolBarLeft";
import ToolBarRight from "./components/Header/ToolBarRight";
import Footer from "./components/Footer";

interface LayoutProps {
  children: React.ReactNode;
  footer?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, footer = false }) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const appBarColor = mode === "dark" ? "#0D0E0F" : "#ffffff";
  return (
    <Box className="layout">
      <Box className="header">
        <AppBar
          position="absolute"
          sx={{
            maxHeight: "var(--header-height)",
            boxShadow: "none",
            background: appBarColor
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
      {footer && <Footer />}
    </Box>
  );
};

export default Layout;
