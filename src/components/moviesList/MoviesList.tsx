import {SectionTitle} from "../sectionTitle";
import {List} from "./styles/MoviesListStyle.tsx";
import {MovieList} from "./movieList/MovieList.tsx";
import {Subtitle} from "../moviesGrid/styles/MovieGridStyle.tsx";
import type {PreferencesProviderProps} from "../allContent.ts";


export const MoviesList = (props: PreferencesProviderProps) => {

    const {items, title, subtitle} = props;

    return (
        <>
            {title && <SectionTitle>{title}</SectionTitle>}
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
            <List>
                <MovieList items={items} />
            </List>
        </>
    );
};