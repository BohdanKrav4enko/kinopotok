import * as S from "./MovieSectionStyle";
import {MovieCard} from "../../../components/moviesGrid/card/MovieCard.tsx";
import type {MediaItem} from "../../../components/allContent.ts";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../../router/paths.ts";

type Props = {
    title: string;
    movies: MediaItem[];
};

export const MovieSection = ({title, movies}: Props) => {

    const navigate = useNavigate();

    const movieSectionHandler = (title: string) => {
        if (title === "Популярное сейчас") {
            navigate(ROUTES.TOP)
        }
        if (title === "Новинки") {
            navigate(ROUTES.NEW)
        }
        if (title === "С лучшими оценками") {
            navigate(ROUTES.TOP)
        }
    }

    return (
        <S.Section>

            <S.Header>

                <S.Title>{title}</S.Title>

                <S.More onClick={() => movieSectionHandler(title)}>Смотреть все</S.More>

            </S.Header>

            <S.Grid>

                {movies.map(movie => (
                    <MovieCard
                        variant="home"
                        key={movie.id}
                        item={movie}
                    />
                ))}

            </S.Grid>

        </S.Section>
    );
};