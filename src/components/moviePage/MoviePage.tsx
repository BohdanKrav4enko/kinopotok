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
import {allContent} from "../allContent.ts";
import {TrailerFrame, TrailerSection, TrailerTitle,} from "./styles/TrailerStyle.tsx";
import {getYouTubeEmbedUrl} from "../../utils";
import {MovieReactions} from "../movieReactions/MovieReactions.tsx";
import {Breadcrumbs} from "../breadcrumbs";

export const MoviePage = () => {
    const {slug} = useParams();

    const item = allContent.find(
        (i) => i.slug === slug
    );

    if (!item) {
        return <EmptyMessage/>;
    }

    return (
        <Container>
            <Breadcrumbs/>

            <Top>
                <PosterColumn>
                    <Poster src={item.poster}/>
                    <MovieReactions movieId={item.id}/>
                </PosterColumn>

                <Info>
                    <Title>{item.title}</Title>

                    <Category to={`/${item.type}/category/${encodeURIComponent(item.category)}`}>
                        {item.category}
                    </Category>

                    <Facts>
                        <HeaderRow>
                            <Meta>
                                <span>{item.year}</span>
                                <Dot>•</Dot>
                                <span>{item.duration} мин</span>
                            </Meta>

                            <StarsWrapper>
                                <RatingStars rating={item.rating}/>
                            </StarsWrapper>
                        </HeaderRow>

                        <FactRow>
                            <b>Страна:</b> {item.country.join(", ")}
                        </FactRow>

                        <FactRow>
                            <b>Язык:</b> {item.language}
                        </FactRow>

                        <FactRow>
                            <b>Режиссёр:</b> {item.director}
                        </FactRow>

                        {"writers" in item && item.writers && (
                            <FactRow>
                                <b>Сценарий:</b>{" "}
                                {item.writers.join(", ")}
                            </FactRow>
                        )}

                        {"studio" in item && item.studio && (
                            <FactRow>
                                <b>Студии:</b>{" "}
                                {item.studio.join(", ")}
                            </FactRow>
                        )}

                        {"budget" in item && (
                            <FactRow>
                                <b>Бюджет:</b>{" "}
                                <Money>
                                    ${item.budget.toLocaleString()}
                                </Money>
                            </FactRow>
                        )}

                        {"boxOffice" in item && (
                            <FactRow>
                                <b>Касса:</b>{" "}
                                <Money>
                                    ${item.boxOffice.toLocaleString()}
                                </Money>
                            </FactRow>
                        )}

                        <Divider/>

                        <Description>{item.description}</Description>
                    </Facts>

                    <FavoriteButton movie={item}/>
                </Info>
            </Top>

            {item.trailer && (
                <TrailerSection>
                    <TrailerTitle>Трейлер</TrailerTitle>

                    <TrailerFrame
                        src={getYouTubeEmbedUrl(item.trailer)}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </TrailerSection>
            )}

            <SimilarMovies
                type={item.type}
                category={item.category}
                currentId={item.id}
            />
        </Container>
    );
};