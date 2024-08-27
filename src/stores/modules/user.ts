import { User } from "@/api/interface";
import { create } from "zustand";

type State = {
  token: string | null;
  userInfo: User.UserInfo | null;
};

type Actions = {
  setUserInfo: (userInfo: User.UserInfo | null) => void;
  setToken: (token: string | null) => void;
};

export const useUserStore = create<State & Actions>(set => ({
  // 初始化时从localStorage获取userInfo
  userInfo: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo") as string) : null,
  // 设置userInfo
  setUserInfo: (userInfo: User.UserInfo | null) => {
    set({ userInfo });
    if (userInfo === null) {
      // 如果userInfo为null，表示用户退出登录，从localStorage中移除userInfo
      localStorage.removeItem("userInfo");
    } else {
      // 更新localStorage中的userInfo
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }
  },
  // 初始化时从localStorage获取token
  token: localStorage.getItem("token"),
  // 设置token的逻辑
  setToken: (token: string | null) => {
    set({ token });
    if (token === null) {
      // 如果token为null，表示用户退出登录，从localStorage中移除token和userInfo
      localStorage.removeItem("token");
      localStorage.removeItem("userInfo");
      // 由于token和userInfo通常是一起使用的，当token被移除时，也应该移除userInfo
      set({ userInfo: null }); // 同时更新状态中的userInfo为null
    } else {
      // 更新localStorage中的token
      localStorage.setItem("token", token);
    }
  }
}));
