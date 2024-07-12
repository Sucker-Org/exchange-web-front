import { Backdrop, useTheme } from "@mui/material";
import styles from "./index.module.scss";

interface LoadingProps {
  open: boolean;
  fullscreen?: boolean;
}

export const Loading: React.FC<LoadingProps> = ({ open, fullscreen = true }) => {
  const theme = useTheme();

  const commonStyles = {
    backgroundColor: "transparent",
    "--loader-color": theme.palette.mode === "dark" ? theme.palette.text.primary : theme.palette.primary.main,
    zIndex: theme.zIndex.drawer + 1
  };

  const backdropStyle = fullscreen
    ? {
        ...commonStyles
      }
    : {
        ...commonStyles,
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      };

  return (
    <Backdrop sx={backdropStyle} open={open}>
      <div className={styles.loader}></div>
    </Backdrop>
  );
};
