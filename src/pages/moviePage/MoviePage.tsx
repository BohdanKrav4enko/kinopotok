import {useParams} from "react-router-dom";

import * as S from "./styles/MoviePageStyle.tsx";

import {EmptyMessage} from "../../components";
import {FavoriteButton} from "../../components/favoriteButton/FavoriteButton.tsx";
import {SimilarMovies} from "../../components";
import {allContent} from "../../components/allContent.ts";
import {getYouTubeEmbedUrl} from "../../utils";
import {MovieReactions} from "../../components";
import {Breadcrumbs} from "../../components";
import {Clapperboard, DollarSign, Film, Play, Share2, Star, Users, Wallet} from "lucide-react";
import {showNotification} from "../../features/error/notificationSlice.ts";
import {useAppDispatch} from "../../hooks";
import {useRef} from "react";
import {getMediaInfo} from "../../utils/getMediaInfo.tsx";

export const MoviePage = () => {
    const {slug} = useParams();
    const dispatch = useAppDispatch();
    const item = allContent.find((i) => i.slug === slug);
    const trailerRef = useRef<HTMLDivElement | null>(null);

    const handleScrollToTrailer = () => {
        trailerRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    if (!item) {
        return <EmptyMessage
            title="Фильм не найден"
            subtitle="Похоже, этой страницы больше не существует или ссылка оказалась неверной."
        />;
    }

    const mediaInfo = getMediaInfo(item);

    const releaseDate = new Date(item.releaseDate).toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });


    const handleShare = async () => {
        const shareData = {
            title: item.title,
            text: `Посмотри ${item.title} на KinoPotok`,
            url: window.location.href,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(shareData.url);
                dispatch(
                    showNotification({
                        text: "Ссылка скопирована!",
                    })
                );
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <S.Container>
            <S.Hero>
                <S.HeroBackground
                    src={item.backdrop || item.poster}
                    alt={item.title}
                    $isPoster={!item.backdrop}
                    onError={(e) => {
                        e.currentTarget.src = item.poster;
                    }}
                />

                <S.HeroOverlay/>
                <S.HeroGradient/>

                <S.HeroContent>
                    <Breadcrumbs/>
                    <S.Title>{item.title}</S.Title>

                    <S.Meta>
                        <S.RatingBadge>
                            <Star fill="currentColor" size={20}/> {item.rating.toFixed(1)}
                        </S.RatingBadge>

                        <S.Dot/>

                        <span>{item.year}</span>

                        <S.Dot/>

                        <span>{item.ageRating}</span>

                        <S.Dot/>

                        <span>{mediaInfo.text}</span>

                        <S.HdBadge>
                            {item.quality || "Full HD"}
                        </S.HdBadge>
                    </S.Meta>

                    <S.Genres>
                        <S.GenreLink to={`/genre/${item.category}`}>
                            {item.category}
                        </S.GenreLink>

                        {" • "}

                        {item.country.map((country, index) => (
                            <span key={country}>
                           <S.GenreLink to={`/country/${country}`}>
                                {country}
                           </S.GenreLink>

                                {index < item.country.length - 1 && ", "}
                              </span>
                        ))}
                    </S.Genres>

                    <S.HeroDescription>
                        <S.Description>
                            {item.description}
                        </S.Description>
                    </S.HeroDescription>

                    <S.Actions>
                        <button onClick={handleScrollToTrailer}>
                            <Play size={20} fill="currentColor"/>
                            {item.type === "movie"
                                ? "Смотреть фильм"
                                : item.type === "series"
                                    ? "Смотреть сериал"
                                    : "Смотреть мультфильм"}
                        </button>

                        <FavoriteButton movie={item}/>

                        <button onClick={handleShare}>
                            <Share2 size={20}/> Поделиться
                        </button>
                    </S.Actions>
                </S.HeroContent>
            </S.Hero>

            <S.Stats>
                <S.StatItem>
                    <small>Рейтинг KinoPotok</small>
                    <strong>
                        <Star fill="currentColor" size={20}/>
                        {item.rating.toFixed(1)}
                    </strong>
                </S.StatItem>

                {item.seasons && item.episodes ? (
                    <>
                        <S.StatItem>
                            <small>Сезонов</small>
                            <strong>
                                <Clapperboard size={20}/>
                                {item.seasons}
                            </strong>
                        </S.StatItem>

                        <S.StatItem>
                            <small>Серий</small>
                            <strong>
                                <Film size={20}/>
                                {item.episodes}
                            </strong>
                        </S.StatItem>
                    </>
                ) : (
                    <>
                        <S.StatItem>
                            <small>Бюджет</small>
                            {item.budget && (
                                <strong>
                                    <Wallet size={20}/>
                                    ${item.budget.toLocaleString()}
                                </strong>
                            )}
                        </S.StatItem>

                        <S.StatItem>
                            <small>Сборы</small>
                            {item.boxOffice && (
                                <strong>
                                    <DollarSign size={20}/>
                                    ${item.boxOffice.toLocaleString()}
                                </strong>
                            )}
                        </S.StatItem>
                    </>
                )}

                <S.StatItem>
                    <small>Оценок</small>
                    <strong>
                        <Users size={20}/>
                        {item.votes.toLocaleString()}
                    </strong>
                </S.StatItem>
            </S.Stats>
            <S.DescriptionContainer>
                <S.SectionTitle>
                    {item.type === "movie"
                        ? "О фильме"
                        : item.type === "series"
                            ? "О сериале"
                            : "О мультфильме"}
                </S.SectionTitle>
                <S.AboutText>
                    {item.description}
                </S.AboutText>
            </S.DescriptionContainer>
            <S.About>
                <S.InfoGrid>
                    {item.originalTitle && (
                        <div>
                            <b>Оригинальное название:</b>
                            <span>{item.originalTitle}</span>
                        </div>
                    )}

                    {item.director && (
                        <div>
                            <b>Режиссёр:</b>
                            <span>{item.director}</span>
                        </div>
                    )}

                    {item.writers?.length ? (
                        <div>
                            <b>Сценарий:</b>
                            <span>{item.writers.join(", ")}</span>
                        </div>
                    ) : null}

                    <S.InfoItem>
                        <b>Жанры:</b>

                        <S.GenresLinks>
                            {item.genres.map((genre, index) => (
                                <span key={genre}>
                                 <S.GenreLink to={`/genre/${genre}`}>
                                    {genre}
                                 </S.GenreLink>

                                    {index < item.genres.length - 1 && ", "}
                                   </span>
                            ))}
                        </S.GenresLinks>
                    </S.InfoItem>

                    <div>
                        <b>Страна:</b>
                        <S.GenresLinks>
                            {item.country.map((c, index) => (
                                <span key={c}>
                                 <S.GenreLink to={`/country/${c}`}>
                                    {c}
                                 </S.GenreLink>

                                    {index < item.genres.length - 1 && ", "}
                                   </span>
                            ))}
                        </S.GenresLinks>
                    </div>

                    <div>
                        <b>Язык:</b>
                        <span>{item.language}</span>
                    </div>

                    <div>
                        <b>Возрастной рейтинг:</b>
                        <span>{item.ageRating}</span>
                    </div>

                    {item.seasons && item.episodes ? (
                        <>
                            <div>
                                <b>Сезонов:</b>
                                <span>{item.seasons ?? "—"}</span>
                            </div>

                            <div>
                                <b>Серий:</b>
                                <span>{item.episodes ?? "—"}</span>
                            </div>
                        </>
                    ) : (
                        <>
                            <div>
                                <b>Длительность:</b>
                                <span>
                    {Math.floor(item.duration / 60)} ч {item.duration % 60} мин
                </span>
                            </div>
                            {item.studio?.length ? (
                                <div>
                                    <b>Студия:</b>
                                    <span>{item.studio.join(", ")}</span>
                                </div>
                            ) : null}

                        </>
                    )}

                    {item.studio?.length ? (
                        <div>
                            <b>Студия:</b>
                            <span>{item.studio.join(", ")}</span>
                        </div>
                    ) : null}

                    <div>
                        <b>Качество:</b>
                        <span>{item.quality ?? "Full HD"}</span>
                    </div>

                    {item.awards?.length ? (
                        <div>
                            <b>Награды:</b>
                            <span>{item.awards.join(", ")}</span>
                        </div>
                    ) : null}
                    {item.releaseDate?.length ? (
                        <div>
                            <b>Премьера:</b>
                            <span>{releaseDate}</span>
                        </div>
                    ) : null}
                </S.InfoGrid>

                <S.BottomSection>
                    <S.CastSection>
                        <S.SideTitle>
                            {item.type === "cartoon"
                                ? "Актёры озвучки"
                                : "В главных ролях"}
                        </S.SideTitle>

                        {item.cast.slice(0, 5).map(actor => (
                            <S.CastItem key={actor}>
                                {actor}
                            </S.CastItem>
                        ))}
                    </S.CastSection>

                    <S.WatchCard>
                        <img
                            src={item.poster}
                            alt={item.title}
                        />

                        <S.ProgressInfo>
                            <MovieReactions item={item}/>
                        </S.ProgressInfo>
                    </S.WatchCard>
                </S.BottomSection>
            </S.About>

            <div style={{scrollMarginTop: '120px'}} ref={trailerRef}>
                <S.TrailerFrame
                    src={getYouTubeEmbedUrl(item.trailer)}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
            <SimilarMovies
                type={item.type}
                currentId={item.id}
            />
        </S.Container>
    );
};