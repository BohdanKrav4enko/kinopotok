import {useNavigate} from "react-router-dom";
import * as S from "../styles/MoviesListStyle";
import type {MediaItem} from "../../allContent.ts";
import {toggleFavorite} from "../../../features/favorites/favoritesSlice.ts";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {MovieBadges} from "../../movieBadges";
import {MetaItem} from "../styles/MoviesListStyle";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

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
                    <S.StyledFavoriteIcon
                        $active={isFavorite(item)}
                        onClick={(e) => {
                        e.stopPropagation();
                        dispatch(toggleFavorite(item));
                    }}/>
                    <S.Info>
                        <S.Title>
                            {item.title}
                        </S.Title>

                        <S.Meta>
                             <S.StyledLink to={`/${item.type}/category/${encodeURIComponent(item.category)}`}>{item.category}</S.StyledLink>
                        </S.Meta>

                        <S.Label>Режиссёр: {item.director}</S.Label>

                        <S.Label>В ролях: {item.cast.join(", ")}</S.Label>

                        <S.Description>
                            {item.description}
                        </S.Description>
                        <MetaItem>
                            <AccessTimeIcon/>
                            {item.duration} мин
                        </MetaItem>

                    </S.Info>
                </S.ListCard>
            ))}
        </>
    );
};