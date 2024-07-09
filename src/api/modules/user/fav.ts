import http from "@/api";
import { ResPage, User } from "@/api/interface/index";

/**
 * @description 获取用户收藏列表
 * @param {string} token 用户token
 * @return {Promise<ResPage<User.ResUserFavorites>>} 返回一个promise
 */

export const fetchFavoritesFromAPI = (token: string) => {
  return http.get<ResPage<User.ResUserFavorites>>("/favorites", { headers: { Authorization: token } });
};

/**
 * @description 更新收藏状态
 * @param {string} favorite 收藏的标识符
 * @param {boolean} isAdd 是否添加收藏
 * @param {string} token 用户token
 * @return {Promise<boolean>} 返回一个promise
 * @example
 * updateFavoriteStatusAPI("BTC_USDT", true, "token")
 * .then((success) => {
 *  if (success) {
 *   console.log("收藏成功");
 * }
 * });
 */

export const updateFavoriteStatusAPI = async (favorite: string, isAdd: boolean, token: string): Promise<any> => {
  return http.post("/favorites", { favorite, isAdd }, { headers: { Authorization: token } });
};
