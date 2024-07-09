import { create } from "zustand";

type State = {
  token: string | null;
};

type Actions = {
  setToken: (token: string | null) => void;
};

export const useAuthStore = create<State & Actions>(set => ({
  token: localStorage.getItem("token"), // 初始化时从localStorage获取token
  setToken: (token: string | null) => {
    set({ token });
    if (token === null) {
      localStorage.removeItem("token"); // 如果token为null，从localStorage中移除
    } else {
      localStorage.setItem("token", token); // 更新localStorage中的token
    }
  }
}));
