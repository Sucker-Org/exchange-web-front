import { useEffect } from "react";
import { useUserStore } from "@/stores/modules/user";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useCheckStatus } from "@/api/helper/checkStatus";
import axiosInstance, { setupInterceptors } from "./axiosInstance";
import RequestHttp from "@/api/RequestHttp";

export const useRequestHttp = (): RequestHttp => {
  const userStore = useUserStore();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const checkStatus = useCheckStatus();
  useEffect(() => {
    setupInterceptors(axiosInstance, () => userStore.setToken, navigate, enqueueSnackbar, checkStatus);
  }, [userStore, navigate, enqueueSnackbar]);

  return RequestHttp.getInstance(axiosInstance);
};
