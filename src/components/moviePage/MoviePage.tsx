import {useParams} from "react-router-dom";

import * as S from "./styles/MoviePageStyle";

import {EmptyMessage} from "../EmptyMessage";
import {FavoriteButton} from "../favoriteButton/FavoriteButton";
import {SimilarMovies} from "../similarMovies";
import {allContent} from "../allContent";
import {getYouTubeEmbedUrl} from "../../utils";
import {MovieReactions} from "../movieReactions";
import {Breadcrumbs} from "../breadcrumbs";

export const MoviePage = () => {
    const {slug} = useParams();

    const item = allContent.find((i) => i.slug === slug);

    if (!item) {
        return <EmptyMessage/>;
    }

    const hours = Math.floor(item.duration / 60);
    const minutes = item.duration % 60;

    return (
        <S.Container>
            <S.Hero>
                <S.HeroBackground src={item.backdrop} alt={item.title}/>

                <S.HeroOverlay/>
                <S.HeroGradient/>

                <S.HeroContent>
                    <Breadcrumbs/>
                    <S.Title>{item.title}</S.Title>

                    <S.Meta>
                        <S.RatingBadge>
                            ⭐ {item.rating.toFixed(1)}
                        </S.RatingBadge>

                        <S.Dot/>

                        <span>{item.year}</span>

                        <S.Dot/>

                        <span>16+</span>

                        <S.Dot/>

                        <span>
                            {hours} ч {minutes} мин
                        </span>

                        <S.HdBadge>HD</S.HdBadge>
                    </S.Meta>

                    <S.Genres>
                        {item.category}
                        {" • "}
                        {item.country.join(", ")}
                    </S.Genres>

                    <S.HeroDescription>
                        <S.Description>
                            {item.description}
                        </S.Description>
                    </S.HeroDescription>

                    <S.Actions>
                        <button>
                            ▶ Смотреть фильм
                        </button>

                        <FavoriteButton movie={item}/>

                        <button>
                            ↗ Поделиться
                        </button>
                    </S.Actions>
                </S.HeroContent>
            </S.Hero>

            <S.Stats>
                <S.StatItem>
                    <small>Рейтинг KinoPotok</small>

                    <strong>⭐ {item.rating.toFixed(1)}</strong>

                </S.StatItem>

                <S.StatDivider/>

                <S.StatItem>
                    <small>Рейтинг IMDb</small>

                    <strong>⭐ {item.rating.toFixed(1)}</strong>

                </S.StatItem>

                <S.StatDivider/>

                <S.StatItem>
                    <small>Бюджет</small>

                    <strong>
                        {"budget" in item
                            ? `$${item.budget.toLocaleString()}`
                            : "—"}
                    </strong>
                </S.StatItem>

                <S.StatDivider/>

                <S.StatItem>
                    <small>Сборы</small>

                    <strong>
                        {"boxOffice" in item
                            ? `$${item.boxOffice.toLocaleString()}`
                            : "—"}
                    </strong>
                </S.StatItem>

                <S.StatDivider/>
            </S.Stats>
            <S.DescriptionContainer>
                <S.SectionTitle>
                    О фильме
                </S.SectionTitle>
                <S.AboutText>
                    {item.description}
                </S.AboutText>
            </S.DescriptionContainer>
            <S.About>
                <S.AboutContent>


                    <S.InfoGrid>
                        <div>
                            <b>Режиссёр</b>
                            <span>{item.director}</span>
                        </div>

                        {"writers" in item && (
                            <div>
                                <b>Сценарий</b>

                                <span>
                                        {item.writers?.join(", ")}
                                    </span>
                            </div>
                        )}

                        <div>
                            <b>Страна</b>

                            <span>
                                    {item.country.join(", ")}
                                </span>
                        </div>

                        <div>
                            <b>Язык</b>

                            <span>{item.language}</span>
                        </div>

                        {"studio" in item && (
                            <div>
                                <b>Студия</b>

                                <span>
                                        {item.studio?.join(", ")}
                                    </span>
                            </div>
                        )}

                        <div>
                            <b>Качество</b>

                            <span>4K UHD, HDR</span>
                        </div>

                    </S.InfoGrid>
                    <S.WatchCard>
                        <img
                            src={item.poster}
                            alt={item.title}
                        />
                        <S.ProgressInfo>
                           <MovieReactions item={item}/>
                        </S.ProgressInfo>
                    </S.WatchCard>

                </S.AboutContent>
            </S.About>


            <S.TrailerFrame src={getYouTubeEmbedUrl(item.trailer)}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>

            <SimilarMovies
                type={item.type}
                category={item.category}
                currentId={item.id}
            />
        </S.Container>
    );
};