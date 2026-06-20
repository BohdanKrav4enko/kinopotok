import {createSlice} from "@reduxjs/toolkit";

interface PreferencesState {
    moviesViewMode: "grid" | "list";
}

const initialState: PreferencesState = {
    moviesViewMode: "list"
};

const preferencesSlice = createSlice({
    name: "preferences",
    initialState,
    reducers: {
        setMoviesViewMode: (state, action) => {
            state.moviesViewMode = action.payload;
        },
    },
});

export const {setMoviesViewMode} = preferencesSlice.actions;

export default preferencesSlice.reducer;