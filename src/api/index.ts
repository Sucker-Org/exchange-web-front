import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosRequestHeaders,
  InternalAxiosRequestConfig
} from "axios";
import { ResultData } from "@/api/interface";
import { ResultEnum } from "@/enums/httpEnum";
import { AxiosCanceler } from "./helper/axiosCancel";
import { checkStatus } from "./helper/checkStatus";
import { enqueueSnackbar } from "@/components/CommonSnackbar";
import { ContentTypeEnum } from "@/enums/httpEnum";
import qs from "qs";

export interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  loading?: boolean;
  loadingText?: string;
  cancel?: boolean;
  headers: AxiosRequestHeaders;
}

const defaultConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_URL as string,
  timeout: ResultEnum.TIMEOUT as number,
  withCredentials: true
};

class ApiService {
  private service: AxiosInstance;
  private authToken: string = "";
  private axiosCanceler = new AxiosCanceler();

  constructor(config: AxiosRequestConfig = defaultConfig) {
    this.service = axios.create(config);
    this.initializeInterceptors();
  }

  private initializeInterceptors() {
    this.service.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        return this.handleRequest(config as CustomAxiosRequestConfig);
      },
      (error: AxiosError) => Promise.reject(error)
    );

    this.service.interceptors.response.use(
      (response: AxiosResponse) => this.handleResponse(response),
      async (error: AxiosError) => await this.handleError(error)
    );
  }

  private handleRequest(config: CustomAxiosRequestConfig): CustomAxiosRequestConfig {
    config.headers = config.headers ?? {};

    /* const contentType = config.headers["Content-Type"] as string | undefined;
    config.headers["Content-Type"] = this.getContentType(contentType); */

    if (!config.headers["Content-Type"]) {
      config.headers["Content-Type"] = ContentTypeEnum.JSON;
    }

    if (config.cancel !== false) {
      this.axiosCanceler.addPending(config);
    }

    if (this.authToken) {
      config.headers["Authorization"] = this.authToken;
    }

    if (config.headers["Content-Type"] === ContentTypeEnum.FORM_URLENCODED && config.data) {
      config.data = qs.stringify(config.data);
    }

    return config;
  }

  private handleResponse(response: AxiosResponse) {
    const config = response.config as CustomAxiosRequestConfig;
    this.axiosCanceler.removePending(config);
    const data = response.data;

    if (data.code === ResultEnum.OVERDUE) {
      this.authToken = "";
      enqueueSnackbar("登录已过期，请重新登录", { variant: "error" });
      return Promise.reject(data);
    }

    if (data.code && data.code !== ResultEnum.SUCCESS) {
      enqueueSnackbar(data.message || "服务器异常", { variant: "error" });
      return Promise.reject(data);
    }

    return data;
  }

  private handleError(error: AxiosError) {
    const { response, message } = error;

    if (message.includes("timeout")) {
      enqueueSnackbar("请求超时！请您稍后重试", { variant: "error" });
    } else if (message.includes("Network Error")) {
      enqueueSnackbar("网络错误！请您稍后重试", { variant: "error" });
    } else if (response) {
      checkStatus(response.status);
    } else if (!window.navigator.onLine) {
      window.location.href = "/500";
    }

    return Promise.reject(error);
  }

  setAuthToken(token: string) {
    this.authToken = token;
  }

  // 通用请求方法封装
  get<T>(url: string, params?: object, config?: CustomAxiosRequestConfig): Promise<ResultData<T>> {
    return this.service.get(url, { params, ...config });
  }

  post<T>(url: string, data?: object | string, config?: CustomAxiosRequestConfig): Promise<ResultData<T>> {
    return this.service.post(url, data, config);
  }

  put<T>(url: string, data?: object, config?: CustomAxiosRequestConfig): Promise<ResultData<T>> {
    return this.service.put(url, data, config);
  }

  delete<T>(url: string, params?: object, config?: CustomAxiosRequestConfig): Promise<ResultData<T>> {
    return this.service.delete(url, { params, ...config });
  }

  download(url: string, params?: object, config?: CustomAxiosRequestConfig): Promise<BlobPart> {
    return this.service.post(url, params, { ...config, responseType: "blob" });
  }
}

export default new ApiService();
