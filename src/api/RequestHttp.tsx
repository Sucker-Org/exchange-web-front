import { AxiosInstance } from "axios";
import { ResultData } from "./interface";

class RequestHttp {
  private static instance: RequestHttp;
  service: AxiosInstance;

  private constructor(service: AxiosInstance) {
    this.service = service;
  }

  public static getInstance(service: AxiosInstance): RequestHttp {
    if (!RequestHttp.instance) {
      RequestHttp.instance = new RequestHttp(service);
    }
    return RequestHttp.instance;
  }

  get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.get(url, { params, ..._object });
  }

  post<T>(url: string, params?: object | string, _object = {}): Promise<ResultData<T>> {
    return this.service.post(url, params, _object);
  }

  put<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.put(url, params, _object);
  }

  delete<T>(url: string, params?: any, _object = {}): Promise<ResultData<T>> {
    return this.service.delete(url, { params, ..._object });
  }

  download(url: string, params?: object, _object = {}): Promise<BlobPart> {
    return this.service.post(url, params, { ..._object, responseType: "blob" });
  }
}

export default RequestHttp;
