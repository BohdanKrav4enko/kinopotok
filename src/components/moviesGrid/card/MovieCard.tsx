import {useNavigate} from "react-router-dom";
import * as S from "../styles/MovieGridStyle";
import {toggleFavorite} from "../../../features/favorites/favoritesSlice";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import type {MediaItem} from "../../allContent";
import {MovieBadges} from "../../movieBadges";
import {getMediaInfo} from "../../../utils/getMediaInfo.tsx";

type Props = {
    item: MediaItem;
    variant?: "grid" | "home";
};

export const MovieCard = ({item, variant = "grid"}: Props) => {
    const dispatch = useAppDispatch();
    const favorites = useAppSelector((state) => state.favorites.items);

    const navigate = useNavigate();

    const getKey = (item: MediaItem) => `${item.type}-${item.id}`;

    const isFavorite = favorites.some(
        (m) => getKey(m) === getKey(item)
    );

    const handleOpen = () => {
        navigate(`/${item.type}/${item.slug}`);
    };

    return (
        <S.Card $variant={variant} onClick={handleOpen}>
            <S.PosterWrapper>
                <S.Poster $variant={variant} src={item.poster}/>
                <MovieBadges
                    year={item.year}
                    rating={item.rating}
                />
            </S.PosterWrapper>
            <S.MetaWrapper>
                <S.Title>{item.title}</S.Title>

                <S.MetaItem>
                    {getMediaInfo(item).icon}
                    <S.Duration>{getMediaInfo(item).text}</S.Duration>
                </S.MetaItem>

                <S.StyledFavoriteIcon
                    $active={isFavorite}
                    onClick={(e) => {
                        e.stopPropagation();
                        dispatch(toggleFavorite(item));
                    }}
                />
            </S.MetaWrapper>
        </S.Card>
    );
};