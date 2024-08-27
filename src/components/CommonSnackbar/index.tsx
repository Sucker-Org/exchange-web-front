import React from "react";
import { SnackbarProvider, useSnackbar } from "notistack";
let useSnackbarRef: any;

export const SnackbarHelperContinuator: React.FC = () => {
  useSnackbarRef = useSnackbar();
  return null;
};

export const enqueueSnackbar = (message: string, options: any) => {
  useSnackbarRef.enqueueSnackbar(message, options);
};

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
