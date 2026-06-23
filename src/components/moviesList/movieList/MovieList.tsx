import { useNavigate } from "react-router-dom";
import { RatingStars } from "../../ratingStars";
import {
    Actions,
    Button,
    Description,
    Info,
    Label,
    ListCard,
    Meta,
    Poster,
    RatingStarsWrapper, StyledFavoriteIcon,
    Title,
    WatchMobileButton
} from "../styles/MoviesListStyle";
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
import { FavoriteButton } from "../../favoriteButton/FavoriteButton";
import type {MediaItem} from "../../allContent.ts";
import {toggleFavorite} from "../../../features/favorites/favoritesSlice.ts";
import {useAppDispatch, useAppSelector} from "../../../hooks";

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
            {items.map((item) => (
                <ListCard key={item.id}>
                    <Poster
                        onClick={() => handleOpen(item)}
                        src={item.poster}
                    />
                    <StyledFavoriteIcon
                        $active={isFavorite(item)}
                        onClick={(e) => {
                        e.stopPropagation();
                        dispatch(toggleFavorite(item));
                    }}/>
                    <Info>
                        <Title onClick={() => handleOpen(item)}>
                            {item.title}
                        </Title>

                        <Meta>
                            {item.year} • {item.category} • {item.duration} мин
                        </Meta>

                        <Label>Режиссёр: {item.director}</Label>

                        <Label>В ролях: {item.cast.join(", ")}</Label>

                        <RatingStarsWrapper>
                            <RatingStars rating={item.rating} />
                        </RatingStarsWrapper>

                        <Description>
                            {item.description}
                        </Description>

                        <Actions>
                            <Button onClick={() => handleOpen(item)}>
                                <PlayArrowSharpIcon color="success" />
                                <span>Смотреть</span>
                            </Button>

                            <FavoriteButton movie={item} />
                        </Actions>

                        <WatchMobileButton onClick={() => handleOpen(item)}>
                            <PlayArrowSharpIcon />
                            Смотреть
                        </WatchMobileButton>
                    </Info>
                </ListCard>
            ))}
        </>
    );
};