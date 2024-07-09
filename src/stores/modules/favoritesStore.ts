import { create } from "zustand";
import { fetchFavoritesFromAPI, updateFavoriteStatusAPI } from "@/api/modules/user/fav";
import { useAuthStore } from "./auth";

type FavoritesState = {
  favorites: any[];
  addFavorite: (favorite: string) => void;
  removeFavorite: (favorite: string) => void;
  syncFavorites: () => Promise<void>;
};

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
  addFavorite: async favorite => {
    const { token } = useAuthStore.getState();
    if (token) {
      const success = await updateFavoriteStatusAPI(favorite, true, token);
      if (success) {
        set(state => ({ favorites: [...state.favorites, favorite] }));
        localStorage.setItem("favorites", JSON.stringify([...get().favorites, favorite]));
      }
    } else {
      set(state => ({ favorites: [...state.favorites, favorite] }));
      localStorage.setItem("favorites", JSON.stringify([...get().favorites, favorite]));
    }
  },
  removeFavorite: async favorite => {
    const { token } = useAuthStore.getState();
    if (token) {
      const success = await updateFavoriteStatusAPI(favorite, false, token);
      if (success) {
        set(state => ({ favorites: state.favorites.filter(f => f !== favorite) }));
        localStorage.setItem("favorites", JSON.stringify(get().favorites.filter(f => f !== favorite)));
      }
    } else {
      set(state => ({ favorites: state.favorites.filter(f => f !== favorite) }));
      localStorage.setItem("favorites", JSON.stringify(get().favorites.filter(f => f !== favorite)));
    }
  },
  syncFavorites: async () => {
    const { token } = useAuthStore.getState();
    if (token) {
      const favoritesFromAPI = await fetchFavoritesFromAPI(token);
      set({ favorites: favoritesFromAPI.data.list });
      localStorage.setItem("favorites", JSON.stringify(favoritesFromAPI));
    }
  }
}));
