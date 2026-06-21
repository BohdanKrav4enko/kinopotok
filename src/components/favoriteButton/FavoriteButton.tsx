import FavoriteIcon from "@mui/icons-material/Favorite";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { toggleFavorite } from "../../features/favorites/favoritesSlice";

import { FavButton } from "./styles/FavoriteButtonStyle";
import type {MediaItem} from "../allContent.ts";


type Props = {
    movie: MediaItem ;
};

export const FavoriteButton = ({ movie }: Props) => {
    const dispatch = useAppDispatch();

    const isFavorite = useAppSelector((state) =>
        state.favorites.items.some((m) => m.id === movie.id)
    );

    return (
        <FavButton
            $active={isFavorite}
            onClick={() => dispatch(toggleFavorite(movie))}
        >
            <FavoriteIcon color={isFavorite ? "primary" : "inherit"} />

            {isFavorite ? "В избранном" : "В избранное"}
        </FavButton>
    );
};