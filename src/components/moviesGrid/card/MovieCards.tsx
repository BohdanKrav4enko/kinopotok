import {useNavigate} from "react-router-dom";
import * as S from "../styles/MovieGridStyle";
import {toggleFavorite} from "../../../features/favorites/favoritesSlice";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import type {MediaItem} from "../../allContent.ts";
import {MovieBadges} from "../../movieBadges";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

type Props = {
    items: MediaItem[];
};

export const MovieCards = ({items}: Props) => {
    const dispatch = useAppDispatch();
    const favorites = useAppSelector((state) => state.favorites.items);

    const getKey = (item: MediaItem) => `${item.type}-${item.id}`;

    const isFavorite = (item: MediaItem) =>
        favorites.some((m) => getKey(m) === getKey(item));

    const navigate = useNavigate();


    const handleOpen = (item: MediaItem) => {
        navigate(`/${item.type}/${item.slug}`)
    };

    return (
        <>
            {items.map((item, index) => (
                <S.Card
                    key={`${item.type}-${item.slug}-${index}`}
                    onClick={() => handleOpen(item)}
                >
                    <S.PosterWrapper>
                        <S.Poster src={item.poster}/>
                        <MovieBadges year={item.year} rating={item.rating}/>
                    </S.PosterWrapper>
                        <S.Title>{item.title}</S.Title>
                        <S.MetaItem>
                            <AccessTimeIcon/>
                            <S.Duration>{item.duration} мин</S.Duration>
                        </S.MetaItem>

                        <S.StyledFavoriteIcon
                            $active={isFavorite(item)}
                            onClick={(e) => {
                                e.stopPropagation();
                                dispatch(toggleFavorite(item));
                            }}
                        />
                </S.Card>
            ))}
        </>
    );
};