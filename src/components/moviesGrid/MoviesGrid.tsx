import {Grid, Subtitle} from "./styles/MovieGridStyle.tsx";
import {SectionTitle} from "../sectionTitle";
import {MovieCards} from "./card/MovieCards.tsx";
import type {PreferencesProviderProps} from "../allContent.ts";


export const MoviesGrid = (props: PreferencesProviderProps) => {

    const {items, title, subtitle} = props;

    return <>
        {title && <SectionTitle>{title}</SectionTitle>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        <Grid>
          <MovieCards items={items}/>
        </Grid>
    </>;
};

