import {Grid, Subtitle} from "./styles/MovieGridStyle.tsx";
import {SectionTitle} from "../sectionTitle";
import {MovieCards} from "./card/MovieCards.tsx";
import type {PreferencesProviderProps} from "../preferencesProvider/PreferencesProvider.tsx";


export const MoviesGrid = (props: PreferencesProviderProps) => {

    const {movies, title, subtitle} = props;

    return <>
        {title && <SectionTitle>{title}</SectionTitle>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        <Grid>
          <MovieCards movies={movies}/>
        </Grid>
    </>;
};

