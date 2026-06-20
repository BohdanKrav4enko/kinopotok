import {SectionTitle} from "../sectionTitle";
import {List} from "./styles/MoviesListStyle.tsx";
import {MovieList} from "./movieList/MovieList.tsx";
import type {PreferencesProviderProps} from "../preferencesProvider/PreferencesProvider.tsx";
import {Subtitle} from "../moviesGrid/styles/MovieGridStyle.tsx";


export const MoviesList = (props: PreferencesProviderProps) => {

    const {movies, title, subtitle} = props;

    return (
        <>
            {title && <SectionTitle>{title}</SectionTitle>}
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
            <List>
                <MovieList movies={movies} />
            </List>
        </>
    );
};