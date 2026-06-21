import { useNavigate } from "react-router-dom";
import { Card, Poster, StyledFavoriteIcon, Title, Year } from "../styles/MovieGridStyle";
import { toggleFavorite } from "../../../features/favorites/favoritesSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import type {MediaItem} from "../../allContent.ts";

type Props = {
    items: MediaItem[];
};

export const MovieCards = ({ items }: Props) => {
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
            {items.map((item) => (
                <Card
                    key={item.id}
                    onClick={() => handleOpen(item)}
                >
                    <Poster src={item.poster} />

                    <Title>{item.title}</Title>
                    <Year>{item.year}</Year>

                    <StyledFavoriteIcon
                        $active={isFavorite(item)}
                        onClick={(e) => {
                            e.stopPropagation();
                            dispatch(toggleFavorite(item));
                        }}
                    />
                </Card>
            ))}
        </>
    );
};