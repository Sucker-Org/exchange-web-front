import axios, { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import { ResultEnum } from "@/enums/httpEnum";
import { AxiosCanceler } from "../../api/helper/axiosCancel";
import { LOGIN_URL } from "@/config";

const axiosCanceler = new AxiosCanceler();

const config: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_URL as string,
  timeout: ResultEnum.TIMEOUT as number,
  withCredentials: true
};

export interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  loading?: boolean;
  loadingText?: string;
  cancel?: boolean;
}
const axiosInstance: AxiosInstance = axios.create(config);

export const setupInterceptors = (
  axiosInstance: AxiosInstance,
  setToken: (token: string | null) => void,
  navigate: (path: string) => void,
  enqueueSnackbar: (message: string, options?: any) => void,
  checkStatus: (status: number) => void
) => {
  axiosInstance.interceptors.request.use(
    (config: CustomAxiosRequestConfig) => {
      const authToken = localStorage.getItem("token");
      config.cancel ??= true;
      config.cancel && axiosCanceler.addPending(config);

      config.loading ??= true;
      console.log("请求拦截器", config);
      if (authToken !== null) {
        config.headers.set("Authorization", authToken);
      }
      /* if (config.headers && typeof config.headers.set === "function") {
        config.headers.set("Authorization", authToken);
      } */
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    response => {
      const { data, config } = response;
      axiosCanceler.removePending(config);

      if (data.code === ResultEnum.OVERDUE) {
        setToken("");
        navigate(LOGIN_URL);
        enqueueSnackbar(data.msg, { variant: "error" });
        return Promise.reject(data);
      }
      // 全局错误信息拦截（防止下载文件的时候返回数据流，没有 code 直接报错）
      if (data.code && data.code !== ResultEnum.SUCCESS) {
        enqueueSnackbar(data.msg || "服务器异常", { variant: "error" });
        return Promise.reject(data);
      }

      return data;
    },
    error => {
      const { response } = error;
      console.log("interceptors.response", response);
      if (error.message.includes("timeout")) enqueueSnackbar("请求超时！请您稍后重试", { variant: "error" });
      if (error.message.includes("Network Error")) enqueueSnackbar("网络错误！请您稍后重试", { variant: "error" });

      if (response) checkStatus(response.status);
      if (!window.navigator.onLine) navigate("/500");
      return Promise.reject(error);
    }
  );
};

export default axiosInstance;
