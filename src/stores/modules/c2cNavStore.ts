import { create } from "zustand";
import { C2C_EXPRESS_URL, C2C_MARKETS_URL, C2C_ORDER_URL, USER_CENTER_URL } from "@/config";

export type NavActive = "express" | "markets" | "c2cOrder" | "userCenter";

export const navItems = [
  { label: "快捷区", value: "express", url: C2C_EXPRESS_URL },
  { label: "C2C交易", value: "markets", url: C2C_MARKETS_URL },
  { label: "订单", value: "c2cOrder", url: C2C_ORDER_URL },
  { label: "个人中心", value: "userCenter", url: USER_CENTER_URL }
].map(item => ({ ...item, value: item.value as NavActive }));

const initialState: State = {
  active: "express"
};

interface State {
  active: NavActive;
}

interface Actions {
  setActive: (active: NavActive) => void;
}

export const useC2CNavStore = create<State & Actions>((set) => ({
  ...initialState,
  setActive: (active) => set({ active })
}));
