import React from "react";
import { SnackbarProvider } from "notistack";

interface CommonSnackbarProps {
  children: React.ReactNode;
}

const CommonSnackbar: React.FC<CommonSnackbarProps> = ({ children }) => {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      autoHideDuration={3000}
    >
      {children}
    </SnackbarProvider>
  );
};

export default CommonSnackbar;
