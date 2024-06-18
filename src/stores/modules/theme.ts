import { create } from "zustand";
import { STORAGE_KEYS } from "@/config";

type Theme = "dark" | "light";

interface State {
  theme: Theme;
}

interface Actions {
  setTheme: (theme: Theme) => void;
}

const getInitialTheme = (): Theme => {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);
  return savedTheme === "dark" || savedTheme === "light" ? savedTheme : "dark";
};

export const useThemeStore = create<State & Actions>(set => ({
  theme: getInitialTheme(),
  setTheme: theme => {
    localStorage.setItem(STORAGE_KEYS.theme, theme);
    set({ theme });
  }
}));
