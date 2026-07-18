import * as S from "./MovieSectionStyle";
import {MovieCard} from "../../../components/moviesGrid/card/MovieCard.tsx";
import type {MediaItem} from "../../../components/allContent.ts";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../../router/paths.ts";
import {useRef} from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";

type Props = {
    title: string;
    movies: MediaItem[];
};

export const MovieSection = ({title, movies}: Props) => {

    const listRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        listRef.current?.scrollBy({
            left: -900,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        listRef.current?.scrollBy({
            left: 900,
            behavior: "smooth",
        });
    };
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

                <S.Actions>
                    <S.More onClick={() => movieSectionHandler(title)}>
                        Смотреть все
                    </S.More>

                    <S.Arrows>
                        <S.ArrowButton onClick={scrollLeft}>
                            <ChevronLeft size={20}/>
                        </S.ArrowButton>

                        <S.ArrowButton onClick={scrollRight}>
                            <ChevronRight size={20}/>
                        </S.ArrowButton>
                    </S.Arrows>
                </S.Actions>
            </S.Header>

            <S.Grid ref={listRef}>

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