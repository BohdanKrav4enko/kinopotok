import { Link } from "react-router-dom";
import { allContent } from "../../components/allContent";
import { useNewMedia } from "../../hooks/useNewMedia";
import * as S from "./styles/GenresPageStyle";
import {SectionTitle} from "../../components";
import {Subtitle} from "../../components/moviesGrid/styles/MovieGridStyle.tsx";


export const GenresPage = () => {

    const movies = useNewMedia(allContent);


    const genresMap = new Map<string, {
        image: string;
        fallback: string;
    }>();


    const usedMovies = new Set<number>();


    const sortedMovies = [...movies].sort(
        (a, b) => b.rating - a.rating
    );


    for (const movie of sortedMovies) {

        if (usedMovies.has(movie.id)) continue;


        for (const genre of movie.genres) {

            if (!genresMap.has(genre)) {

                genresMap.set(genre, {
                    image: movie.backdrop,
                    fallback: movie.poster
                });


                usedMovies.add(movie.id);

                break;
            }

        }

    }


    const genres = Array.from(genresMap.entries());


    return (
        <S.Section>

            <SectionTitle>Все жанры</SectionTitle>


            <Subtitle>
                Исследуйте фильмы и сериалы по любимым жанрам
            </Subtitle>


            <S.Grid>

                {genres.map(([genre, data]) => (

                    <Link
                        key={genre}
                        to={`/genre/${genre}`}
                    >

                        <S.Card>

                            <S.Image
                                src={data.image}
                                onError={(e) => {
                                    e.currentTarget.src = data.fallback;
                                }}
                            />


                            <S.Overlay/>


                            <S.Name>
                                {genre}
                            </S.Name>

                        </S.Card>

                    </Link>

                ))}

            </S.Grid>


        </S.Section>
    );
};