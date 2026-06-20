import {useParams} from "react-router-dom";
import {
    Category,
    Container,
    Description,
    Divider,
    Dot,
    FactRow,
    Facts,
    HeaderRow,
    Info,
    Meta,
    Money,
    Poster,
    PosterColumn,
    StarsWrapper,
    Title,
    Top,
} from "./styles/MoviePageStyle.tsx";

import {RatingStars} from "../ratingStars";
import {SimilarMovies} from "../similarMovies";
import {FavoriteButton} from "../favoriteButton/FavoriteButton.tsx";
import {EmptyMessage} from "../EmptyMessage.tsx";
import {movies} from "../movies.tsx";
import {TrailerFrame, TrailerSection, TrailerTitle} from "./styles/TrailerStyle.tsx";
import {getYouTubeEmbedUrl} from "../../utils";
import {MovieReactions} from "../movieReactions/MovieReactions.tsx";
import {Breadcrumbs} from "../breadcrumbs";

export const MoviePage = () => {
    const {slug} = useParams();

    const movie = movies.find((m) => m.slug === slug);

    if (!movie) {
        return <EmptyMessage/>;
    }

    return (
        <Container>
            <Breadcrumbs movies={movies}/>
            <Top>
                <PosterColumn>
                    <Poster src={movie.poster} />
                    <MovieReactions movieId={movie.id} />
                </PosterColumn>
                <Info>
                    <Title>{movie.title}</Title>
                    <Category to={`/category/${encodeURIComponent(movie.category)}`}>{movie.category}</Category>
                    <Facts>
                        <HeaderRow>
                            <Meta>
                                <span>{movie.year}</span>
                                <Dot>•</Dot>
                                <span>{movie.duration} мин</span>
                            </Meta>
                            <StarsWrapper>
                                <RatingStars rating={movie.rating}/>
                            </StarsWrapper>
                        </HeaderRow>
                        <FactRow>
                            <b>Страна:</b> {movie.country.join(", ")}
                        </FactRow>

                        <FactRow>
                            <b>Язык:</b> {movie.language}
                        </FactRow>

                        <FactRow>
                            <b>Режиссёр:</b> {movie.director}
                        </FactRow>

                        {movie.writers && (
                            <FactRow>
                                <b>Сценарий:</b> {movie.writers.join(", ")}
                            </FactRow>
                        )}
                        <FactRow>
                            <b>Студии:</b> {movie.studio?.join(", ")}
                        </FactRow>

                        <Divider/>

                        <FactRow>
                            <b>Бюджет:</b>{" "}
                            <Money>${movie.budget?.toLocaleString()}</Money>
                        </FactRow>

                        <FactRow>
                            <b>Касса:</b>{" "}
                            <Money>${movie.boxOffice?.toLocaleString()}</Money>
                        </FactRow>
                    </Facts>
                    <Facts>
                        <Description>{movie.description}</Description>
                    </Facts>
                    <FavoriteButton movie={movie}/>
                </Info>
            </Top>
            {movie.trailer && (
                <TrailerSection>
                    <TrailerTitle>Трейлер</TrailerTitle>

                    <TrailerFrame
                        src={getYouTubeEmbedUrl(movie.trailer)}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </TrailerSection>
            )}
            <SimilarMovies
                category={movie.category}
                currentMovieId={movie.id}
            />
        </Container>
    );
};
