import * as S from "./GenresStyle";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../../router/paths.ts";
import {allContent} from "../../../components/allContent.ts";

export const Genres = () => {

    const genres: {
        name: string;
        image: string;
        fallback: string;
    }[] = [];

    const usedGenres = new Set<string>();

    const navigate = useNavigate();

    const sortedMovies = [...allContent].sort(
        (a, b) => b.rating - a.rating
    );

    for (const movie of sortedMovies) {

        const genre = movie.genres.find(
            (g) => !usedGenres.has(g)
        );

        if (!genre) continue;

        genres.push({
            name: genre,
            image: movie.backdrop,
            fallback: movie.poster,
        });

        usedGenres.add(genre);

        if (genres.length === 8) break;
    }


    return (
        <S.Section>

            <S.Header>
                <S.Title>
                    Жанры
                </S.Title>

                <S.More onClick={() => navigate(ROUTES.GENRES)}>
                    Смотреть все
                </S.More>
            </S.Header>


            <S.Grid>

                {genres.map((genre) => (
                    <S.Card
                        key={genre.name}
                        onClick={() => navigate(`/genre/${genre.name}`)}
                    >

                        <S.Image
                            src={genre.image}
                            onError={(e) => {
                                e.currentTarget.src = genre.fallback;
                            }}
                        />


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