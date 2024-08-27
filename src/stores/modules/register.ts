import { create } from "zustand";

type State = {
  account: string;
  password: string;
  code: string; //验证码
  promotion: string; // 邀请码
  uploading: boolean;
};

type Actions = {
  setAccount: (account: string) => void;
  setPassword: (password: string) => void;
  setPromotion: (promotion: string) => void;
  setUploading: (uploading: boolean) => void;
  setCode: (code: string) => void;
};

export const useRegStore = create<State & Actions>(set => ({
  account: "",
  password: "",
  promotion: "",
  uploading: false,
  code: "",
  setAccount: account => set({ account }),
  setPassword: password => set({ password }),
  setPromotion: promotion => set({ promotion }),
  setUploading: uploading => set({ uploading }),
  setCode: code => set({ code })
}));
