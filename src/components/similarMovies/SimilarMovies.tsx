import {Grid, Title, Wrapper} from "./styles/SimilarMoviesStyle.tsx";
import {movies} from "../movies.tsx";
import {MovieCards} from "../moviesGrid";

type Props = {
    category: string;
    currentMovieId: number;
};

export const SimilarMovies = ({ category, currentMovieId }: Props) => {

    const similar = movies
        .filter(
            (m) => m.category === category && m.id !== currentMovieId
        )
        .slice(0, 6);

    if (similar.length === 0) {
        return null;
    }

    return (
        <Wrapper>
            <Title>🎬 Похожие фильмы</Title>

            <Grid>
                <MovieCards movies={similar}/>
            </Grid>
        </Wrapper>
    );
};