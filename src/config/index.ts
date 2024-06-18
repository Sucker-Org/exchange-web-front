/*
 * @Description:
 * @Date: 2024-04-07 09:54:32
 * @LastEditTime: 2024-06-14 17:00:34
 */
// ? 全局默认配置项

// 首页地址（默认）
export const HOME_URL: string = "/home";

// 登录页地址
export const LOGIN_URL: string = "/login";

// 注册页地址
export const REG_URL: string = "/register";

//买币页面地址
export const TRADE_CONVERT_URL: string = "/trade-convert";

// 行情页面地址
export const MARKETS_URL: string = "/markets";

//现货交易
export const TRADE_SPOT_URL: string = "/trade-spot";
//杠杆交易
export const TRADE_CROSS_URL: string = "/trade-cross";

//合约交易
export const FUTURE_URL: string = "/future";

//理财
export const FINANCE_URL: string = "/finance";

//新手学院
export const LEARN_URL: string = "/learn";

// 默认主题颜色
export const DEFAULT_PRIMARY: string = "#F39C12";

// 路由白名单地址（本地存在的路由 staticRouter.ts 中）
export const ROUTER_WHITE_LIST: string[] = ["/500"];

export const STORAGE_KEYS = {
  theme: "theme"
};
