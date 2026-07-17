import * as S from "./GenresStyle";
import {movies} from "../../../components/movies.tsx";

export const Genres = () => {

    const genres: {
        name: string;
        poster: string;
        backdrop: string;
    }[] = [];

    const usedGenres = new Set<string>();

    const sortedMovies = [...movies].sort(
        (a, b) => b.rating - a.rating
    );

    for (const movie of sortedMovies) {
        const genre = movie.genres.find(
            (g) => !usedGenres.has(g)
        );

        if (!genre) continue;

        genres.push({
            name: genre,
            poster: movie.poster,
            backdrop: movie.backdrop,
        });

        usedGenres.add(genre);

        if (genres.length === 8) break;
    }

    return (
        <S.Section>

            <S.Header>

                <S.Title>Жанры</S.Title>

                {/*<S.More>Смотреть все</S.More>*/}

            </S.Header>

            <S.Grid>

                {genres.map((genre) => (
                    <S.Card
                        key={genre.name}
                        $image={genre.poster}
                    >
                        <S.Overlay/>

                        <S.Name>
                            {genre.name}
                        </S.Name>

                    </S.Card>
                ))}

            </S.Grid>

        </S.Section>
    );
};