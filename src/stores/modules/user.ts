import { create } from "zustand";

type UserInfo = {
  name: string;
  email: string;
};

type State = {
  userInfo: UserInfo | null;
};

type Actions = {
  setUserInfo: (userInfo: UserInfo) => void;
};

export const useUserStore = create<State & Actions>(set => ({
  token: null,
  userInfo: null,
  setUserInfo: (userInfo: UserInfo) => set({ userInfo })
}));
