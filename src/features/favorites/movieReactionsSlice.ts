import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type UserVote = "like" | "dislike" | null;

type Reaction = {
    likes: number;
    dislikes: number;
};

type ReactionKey = string; // "movie:interstellar"

type ReactionsState = {
    items: Record<ReactionKey, Reaction>;
    userVotes: Record<ReactionKey, UserVote>;
};

const initialState: ReactionsState = {
    items: {},
    userVotes: {},
};

const makeKey = (type: string, slug: string): ReactionKey =>
    `${type}:${slug}`;

const movieReactionsSlice = createSlice({
    name: "reactions",
    initialState,

    reducers: {
        initItem: (
            state,
            action: PayloadAction<{ type: string; slug: string }>
        ) => {
            const key = makeKey(
                action.payload.type,
                action.payload.slug
            );

            if (!state.items[key]) {
                state.items[key] = {
                    likes: 0,
                    dislikes: 0,
                };
            }

            if (!(key in state.userVotes)) {
                state.userVotes[key] = null;
            }
        },

        like: (
            state,
            action: PayloadAction<{ type: string; slug: string }>
        ) => {
            const key = makeKey(
                action.payload.type,
                action.payload.slug
            );

            const vote = state.userVotes[key];

            if (vote === "like") return;

            if (vote === "dislike") {
                state.items[key].dislikes -= 1;
            }

            if (!state.items[key]) {
                state.items[key] = { likes: 0, dislikes: 0 };
            }

            state.items[key].likes += 1;
            state.userVotes[key] = "like";
        },

        dislike: (
            state,
            action: PayloadAction<{ type: string; slug: string }>
        ) => {
            const key = makeKey(
                action.payload.type,
                action.payload.slug
            );

            const vote = state.userVotes[key];

            if (vote === "dislike") return;

            if (vote === "like") {
                state.items[key].likes -= 1;
            }

            if (!state.items[key]) {
                state.items[key] = { likes: 0, dislikes: 0 };
            }

            state.items[key].dislikes += 1;
            state.userVotes[key] = "dislike";
        },

        resetReactions: (state) => {
            state.items = {};
            state.userVotes = {};
        },
    },
});

export const {
    initItem,
    like,
    dislike,
    resetReactions,
} = movieReactionsSlice.actions;

export default movieReactionsSlice.reducer;