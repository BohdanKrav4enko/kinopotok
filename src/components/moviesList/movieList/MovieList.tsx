import {useNavigate} from "react-router-dom";
import * as S from "../styles/MoviesListStyle";
import {MetaItem} from "../styles/MoviesListStyle";
import type {MediaItem} from "../../allContent.ts";
import {toggleFavorite} from "../../../features/favorites/favoritesSlice.ts";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {MovieBadges} from "../../movieBadges";
import {getMediaInfo} from "../../../utils/getMediaInfo.tsx";

type Props = {
    items: MediaItem[];
};

export const MovieList = ({ items }: Props) => {

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const favorites = useAppSelector((state) => state.favorites.items);

    const getKey = (item: MediaItem) => `${item.type}-${item.id}`;

    const isFavorite = (item: MediaItem) =>
        favorites.some((m) => getKey(m) === getKey(item));

    const handleOpen = (item: MediaItem) => {
        navigate(`/${item.type}/${item.slug}`);
    };

    return (
        <>
            {items.map((item, index) => (
                <S.ListCard onClick={() => handleOpen(item)} key={`${item.type}-${item.slug}-${index}`}>
                    <S.PosterWrapper>
                    <S.Poster src={item.poster}/>
                        <MovieBadges year={item.year} rating={item.rating} />
                    </S.PosterWrapper>
                    <S.Info>
                        <S.Header>
                            <S.Title>{item.title}</S.Title>

                            <S.StyledFavoriteIcon
                                $active={isFavorite(item)}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    dispatch(toggleFavorite(item));
                                }}
                            />
                        </S.Header>
                        <S.Meta>
                            {item.genres.map((genre) => (
                                <S.StyledLink
                                    key={genre}
                                    to={`/genre/${genre}`}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {genre}
                                </S.StyledLink>
                            ))}
                        </S.Meta>

                        <S.Label>Режиссёр: {item.director}</S.Label>

                        <S.Label>В ролях: {item.cast.join(", ")}</S.Label>

                        <S.Description>
                            {item.description}
                        </S.Description>
                        <MetaItem>
                            {getMediaInfo(item).icon}
                            {getMediaInfo(item).text}
                        </MetaItem>

                    </S.Info>
                </S.ListCard>
            ))}
        </>
    );
};