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
    RatingStarsWrapper,
    Title,
    WatchMobileButton
} from "../styles/MoviesListStyle";
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
import { FavoriteButton } from "../../favoriteButton/FavoriteButton";
import type {MediaItem} from "../../allContent.ts";

type Props = {
    items: MediaItem[];
};

export const MovieList = ({ items }: Props) => {
    const navigate = useNavigate();

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