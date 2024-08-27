import { enqueueSnackbar } from "@/components/CommonSnackbar";
export function showError(message: string) {
  enqueueSnackbar(message, { variant: "error" });
}

/**
 * @description: 校验网络请求状态码
 * @param {Number} status
 * @return void
 */

export const checkStatus = (status: number) => {
  switch (status) {
    case 400:
      showError("请求失败！请您稍后重试");
      break;
    case 401:
      showError("登录失效！请您重新登录");
      break;
    case 403:
      showError("当前账号无权限访问！");
      break;
    case 404:
      showError("你所访问的资源不存在！");
      break;
    case 405:
      showError("请求方式错误！请您稍后重试");
      break;
    case 408:
      showError("请求超时！请您稍后重试");
      break;
    case 500:
      showError("服务异常！");
      break;
    case 502:
      showError("网关错误！");
      break;
    case 503:
      showError("服务不可用！");
      break;
    case 504:
      showError("网关超时！");
      break;
    default:
      showError("请求失败！");
  }
};
