/*
 * @Email: allen0101stanton@outlook.com
 * @Author: Eric
 * @Description:
 */
import { Backdrop, CircularProgress } from "@mui/material";

export const FullScreenLoading = ({ open }) => (
  <Backdrop sx={{ color: "#fff", zIndex: theme => theme.zIndex.drawer + 1 }} open={open}>
    <CircularProgress color="inherit" />
  </Backdrop>
);
