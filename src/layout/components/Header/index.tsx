import { AppBar, Box, Toolbar, useTheme } from "@mui/material";
import React, { useState } from "react";
import ToolBarLeft from "./ToolBarLeft";
import ToolBarRight from "./ToolBarRight";

const Header: React.FC = () => {
  const theme = useTheme();
  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => setDrawerVisible(!drawerVisible);

  return (
    <AppBar
      position="absolute"
      sx={{
        maxHeight: "var(--header-height)",
        boxShadow: "none",
        background: theme.palette.mode === "dark" ? "#0D0E0F" : "#ffffff"
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <ToolBarLeft drawerVisible={drawerVisible} closeDrawer={() => setDrawerVisible(false)} />
        </Box>
        <ToolBarRight openDrawer={toggleDrawer} />
      </Toolbar>
    </AppBar>
  );
};

export default React.memo(Header);
