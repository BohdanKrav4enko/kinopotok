import {ViewToggle} from "../viewToggle/ViewToggle.tsx";
import {setMoviesViewMode} from "../../features/preferences/preferencesSlice.ts";
import {MoviesGrid} from "../moviesGrid";
import {MoviesList} from "../moviesList";
import {useAppDispatch, useAppSelector} from "../../hooks";
import type {Movie} from "../../type/type.ts";

export type PreferencesProviderProps = {
    movies: Movie[];
    title?: string;
    subtitle?: string;
}

export const PreferencesProvider = (props: PreferencesProviderProps) => {

    const {movies, title, subtitle} = props;

    const dispatch = useAppDispatch();
    const viewMode = useAppSelector((state) => state.preferences.moviesViewMode
    );

    return <>
        <ViewToggle viewMode={viewMode} setViewMode={(mode) =>
            dispatch(setMoviesViewMode(mode))}/>
        {viewMode === "grid" ? (
            <MoviesGrid subtitle={subtitle} movies={movies} title={title}/>
        ) : (
            <MoviesList subtitle={subtitle} movies={movies} title={title}/>
        )}
    </>
};

