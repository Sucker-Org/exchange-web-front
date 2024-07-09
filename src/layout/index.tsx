/*
 * @Email: allen0101stanton@outlook.com
 * @Author: Eric
 * @Description:Layout component
 */
import React from "react";
import { Box } from "@mui/material";
import Footer from "./components/Footer";
import Header from "./components/Header";

interface LayoutProps {
  children: React.ReactNode;
  footer?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, footer = false }) => {
  return (
    <Box className="layout">
      <Header />
      <Box className="content" minHeight="48vh">
        {children}
      </Box>
      {footer && <Footer />}
    </Box>
  );
};

export default Layout;
