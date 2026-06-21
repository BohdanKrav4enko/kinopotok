import {ViewToggle} from "../viewToggle/ViewToggle.tsx";
import {setMoviesViewMode} from "../../features/preferences/preferencesSlice.ts";
import {MoviesGrid} from "../moviesGrid";
import {MoviesList} from "../moviesList";
import {useAppDispatch, useAppSelector} from "../../hooks";
import type {PreferencesProviderProps} from "../allContent.ts";



export const PreferencesProvider = (props: PreferencesProviderProps ) => {

    const {items, title, subtitle} = props;

    const dispatch = useAppDispatch();
    const viewMode = useAppSelector((state) => state.preferences.moviesViewMode
    );

    return <>
        <ViewToggle viewMode={viewMode} setViewMode={(mode) =>
            dispatch(setMoviesViewMode(mode))}/>
        {viewMode === "grid" ? (
            <MoviesGrid subtitle={subtitle} items={items} title={title}/>
        ) : (
            <MoviesList subtitle={subtitle} items={items} title={title}/>
        )}
    </>
};

