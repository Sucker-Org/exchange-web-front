/*
 * @Email: allen0101stanton@outlook.com
 * @Author: Eric
 * @Description:
 */
import { useSnackbar } from "notistack";

let useSnackbarRef: any;

export const SnackbarHelperContinuator: React.FC = () => {
  useSnackbarRef = useSnackbar();
  return null;
};

export const enqueueSnackbar = (message: string, options: any) => {
  useSnackbarRef.enqueueSnackbar(message, options);
};
