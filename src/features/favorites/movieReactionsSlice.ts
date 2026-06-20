import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type UserVote = "like" | "dislike" | null;

type Reaction = {
    likes: number;
    dislikes: number;
};

type ReactionsState = {
    items: Record<number, Reaction>;
    userVotes: Record<number, UserVote>;
};

const initialState: ReactionsState = {
    items: {},
    userVotes: {},
};

const movieReactionsSlice = createSlice({
    name: "reactions",
    initialState,

    reducers: {
        initMovie: (state, action: PayloadAction<number>) => {
            const id = action.payload;

            if (!state.items[id]) {
                state.items[id] = {
                    likes: 0,
                    dislikes: 0,
                };
            }

            if (!(id in state.userVotes)) {
                state.userVotes[id] = null;
            }
        },

        like: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            const vote = state.userVotes[id];

            if (vote === "like") return;

            if (vote === "dislike") {
                state.items[id].dislikes -= 1;
            }

            state.items[id].likes += 1;
            state.userVotes[id] = "like";
        },

        dislike: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            const vote = state.userVotes[id];

            if (vote === "dislike") return;

            if (vote === "like") {
                state.items[id].likes -= 1;
            }

            state.items[id].dislikes += 1;
            state.userVotes[id] = "dislike";
        },

        resetReactions: (state) => {
            state.items = {};
            state.userVotes = {};
        },
    },
});

export const {
    initMovie,
    like,
    dislike,
    resetReactions,
} = movieReactionsSlice.actions;

export default movieReactionsSlice.reducer;