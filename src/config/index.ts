/*
 * @Description:
 * @Date: 2024-04-07 09:54:32
 * @LastEditTime: 2024-07-01 04:15:49
 */
// ? 全局默认配置项

// 首页地址（默认）
export const HOME_URL: string = "/home";

// 登录页地址
export const LOGIN_URL: string = "/login";

// 注册页地址
export const REG_URL: string = "/register";

//快捷买币页面地址
export const C2C_EXPRESS_URL: string = "/c2c/express";

//自选买币页面地址
export const C2C_MARKETS_URL: string = "/c2c/markets";

//C2C订单
export const C2C_ORDER_URL: string = "/c2c/order";

// 行情页面地址
export const MARKETS_URL: string = "/markets";

// 排行榜
export const MARKET_RANK_URL: string = "/markets/ranking";

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

//个人中心
export const USER_CENTER_URL: string = "/user-center";

// 路由白名单地址（本地存在的路由 staticRouter.ts 中）
export const ROUTER_WHITE_LIST: string[] = ["/500"];

export const STORAGE_KEYS = {
  theme: "theme"
};
