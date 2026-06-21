import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {MediaItem} from "../../components/allContent.ts";

type FavoritesState = {
    items: MediaItem[];
};

const initialState: FavoritesState = {
    items: [],
};

const getKey = (item: MediaItem) => `${item.type}-${item.id}`;

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        toggleFavorite: (state, action: PayloadAction<MediaItem>) => {
            const exists = state.items.some(
                (item) =>
                    getKey(item) === getKey(action.payload)
            );

            if (exists) {
                state.items = state.items.filter(
                    (item) =>
                        getKey(item) !== getKey(action.payload)
                );
            } else {
                state.items.push(action.payload);
            }
        },

        clearFavorites: (state) => {
            state.items = [];
        },
    },
});

export const { toggleFavorite, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;