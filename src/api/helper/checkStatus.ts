import { useSnackbar } from "notistack";

/**
 * @description: 校验网络请求状态码
 * @param {Number} status
 * @return void
 */
export const checkStatus = (status: number) => {
  const { enqueueSnackbar } = useSnackbar();
  switch (status) {
    case 400:
      enqueueSnackbar("请求错误！请您稍后重试", { variant: "error" });
      break;
    case 401:
      enqueueSnackbar("登录失效！请您重新登录", { variant: "error" });
      break;
    case 403:
      enqueueSnackbar("当前账号无权限访问！", { variant: "error" });
      break;
    case 404:
      enqueueSnackbar("你所访问的资源不存在！", { variant: "error" });
      break;
    case 405:
      enqueueSnackbar("请求方式错误！请您稍后重试", { variant: "error" });
      break;
    case 408:
      enqueueSnackbar("请求超时！请您稍后重试", { variant: "error" });
      break;
    case 500:
      enqueueSnackbar("服务异常！", { variant: "error" });
      break;
    case 502:
      enqueueSnackbar("网关错误！", { variant: "error" });
      break;
    case 503:
      enqueueSnackbar("服务不可用！", { variant: "error" });
      break;
    case 504:
      enqueueSnackbar("网关超时！", { variant: "error" });
      break;
    default:
      enqueueSnackbar("请求失败！", { variant: "error" });
  }
};
