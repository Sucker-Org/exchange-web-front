import React from "react";
import { SnackbarProvider } from "notistack";
import { SnackbarHelperContinuator } from "./snackbarHelper";

const CommonSnackbar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      autoHideDuration={3000}
    >
      <SnackbarHelperContinuator />
      {children}
    </SnackbarProvider>
  );
};

export default CommonSnackbar;
