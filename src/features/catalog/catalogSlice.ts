import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CatalogFilters {
    genre: string;
    country: string;
    year: string;
    rating: string;
}

interface CatalogState {
    filters: CatalogFilters;
    sortBy: string;
}

const initialState: CatalogState = {
    filters: {
        genre: "",
        country: "",
        year: "",
        rating: "",
    },
    sortBy: "popular",
};

const catalogSlice = createSlice({
    name: "catalog",
    initialState,
    reducers: {
        setFilter: (
            state,
            action: PayloadAction<{
                key: keyof CatalogFilters;
                value: string;
            }>
        ) => {
            state.filters[action.payload.key] =
                action.payload.value;
        },

        resetFilters: (state) => {
            state.filters = initialState.filters;
        },

        setSortBy: (
            state,
            action: PayloadAction<string>
        ) => {
            state.sortBy = action.payload;
        },
    },
});

export const {
    setFilter,
    resetFilters,
    setSortBy,
} = catalogSlice.actions;

export default catalogSlice.reducer;