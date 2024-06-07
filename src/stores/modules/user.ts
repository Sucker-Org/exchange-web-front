import { create } from "zustand";

type UserInfo = {
  name: string;
  email: string;
};

type State = {
  token: string | null;
  userInfo: UserInfo | null;
};

type Actions = {
  setToken: (token: string) => void;
  setUserInfo: (userInfo: UserInfo) => void;
};

export const useUserStore = create<State & Actions>(set => ({
  token: null,
  userInfo: null,
  setToken: (token: string) => set({ token }),
  setUserInfo: (userInfo: UserInfo) => set({ userInfo })
}));
