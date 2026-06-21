import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
    type: "all" | "movie" | "series" | "cartoon";
}

const initialState: FilterState = {
    type: "all",
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setType(state, action: PayloadAction<FilterState["type"]>) {
            state.type = action.payload;
        },
    },
});

export const { setType } = filterSlice.actions;
export default filterSlice.reducer;