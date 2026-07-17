import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favoritesReducer from "../features/favorites/favoritesSlice";
import movieReactionsReducer from "../features/favorites/movieReactionsSlice";
import notificationReducer from "../features/error/notificationSlice";
import preferencesReducer from "../features/preferences/preferencesSlice";
import catalogReducer from "../features/catalog/catalogSlice";
import storage from "redux-persist/es/storage";
import {
    persistStore,
    persistReducer,
} from "redux-persist";


const rootReducer = combineReducers({
    favorites: favoritesReducer,
    reactions: movieReactionsReducer,
    notification: notificationReducer,
    preferences: preferencesReducer,
    catalog: catalogReducer,
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: [
        "favorites",
        "reactions",
        "preferences",
    ],
};

const persistedReducer = persistReducer(
    persistConfig,
    rootReducer
);

export const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;