import { Grid, Title, Wrapper } from "./styles/SimilarMoviesStyle";
import { allContent } from "../allContent";
import { MovieCards } from "../moviesGrid";
import type { MediaItem } from "../allContent";

type Props = {
    type: MediaItem["type"];
    category: string;
    currentId: number;
};

export const SimilarMovies = ({ type, category, currentId }: Props) => {

    const similar: MediaItem[] = allContent
        .filter(
            (item) =>
                item.type === type &&
                item.category === category &&
                item.id !== currentId
        )
        .slice(0, 5);

    if (similar.length === 0) return null;

    return (
        <Wrapper>
            <Title>🎬 Похожие {type === "movie" ? "фильмы" : type === "series" ? "сериалы" : "мультфильмы"}</Title>

            <Grid>
                <MovieCards items={similar} />
            </Grid>
        </Wrapper>
    );
};