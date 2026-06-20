import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {Movie} from "../../type/type.ts";

type FavoritesState = {
    items: Movie[];
};

const initialState: FavoritesState = {
    items: [],
};

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        toggleFavorite: (state, action: PayloadAction<Movie>) => {
            const exists = state.items.some(
                (movie) => movie.id === action.payload.id
            );

            if (exists) {
                state.items = state.items.filter(
                    (movie) => movie.id !== action.payload.id
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