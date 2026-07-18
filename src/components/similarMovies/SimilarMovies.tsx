import { allContent, type MediaItem } from "../allContent";
import { MovieCards } from "../moviesGrid";
import {useRef} from "react";
import * as S from "./styles/SimilarMoviesStyle"
import {ChevronLeft, ChevronRight} from "lucide-react";
type Props = {
    type: MediaItem["type"];
    currentId: number;
};

export const SimilarMovies = ({  currentId }: Props) => {
    const current = allContent.find(movie => movie.id === currentId);
    const listRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        listRef.current?.scrollBy({
            left: -900,
            behavior: "smooth",
        });
    };

    if (!current) return null;



    const scrollRight = () => {
        listRef.current?.scrollBy({
            left: 900,
            behavior: "smooth",
        });
    };

    const similar = allContent
        .filter(movie => movie.id !== current.id)
        .filter(movie => movie.type === current.type)
        .map(movie => {
            let score = 0;

            score += movie.genres.filter(genre =>
                current.genres.includes(genre)
            ).length * 3;

            score += movie.tags.filter(tag =>
                current.tags.includes(tag)
            ).length * 2;

            if (movie.director === current.director) {
                score += 2;
            }

            if (
                movie.country.some(country =>
                    current.country.includes(country)
                )
            ) {
                score += 1;
            }

            return {
                movie,
                score,
            };
        })
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 6)
        .map(item => item.movie);

    if (!similar.length) {
        return null;
    }

    return (
        <S.Wrapper>
            <S.Header>
                <S.Title>Рекомендуем посмотреть</S.Title>

                <S.Buttons>
                    <S.ArrowButton onClick={scrollLeft}>
                        <ChevronLeft />
                    </S.ArrowButton>

                    <S.ArrowButton onClick={scrollRight}>
                        <ChevronRight />
                    </S.ArrowButton>
                </S.Buttons>
            </S.Header>

            <S.Grid ref={listRef}>
                <MovieCards items={similar} />
            </S.Grid>
        </S.Wrapper>
    );
};