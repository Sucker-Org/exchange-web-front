import React from "react";
import { SnackbarProvider } from "notistack";

const CommonSnackbar: React.FC = () => {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      autoHideDuration={3000}
    />
  );
};

export default CommonSnackbar;
