import {useNavigate} from "react-router-dom";
import {RatingStars} from "../../ratingStars";
import {Actions, Button, Info, Label, ListCard, Meta, Poster, Title} from "../styles/MoviesListStyle.tsx";
import {Description} from "../../moviePage/styles/MoviePageStyle.tsx";
import PlayArrowSharpIcon from '@mui/icons-material/PlayArrowSharp';
import {FavoriteButton} from "../../favoriteButton/FavoriteButton.tsx";
import type {Movie} from "../../../type/type.ts";


type Props = {
    movies: Movie[];
};

export const MovieList = ({movies}: Props) => {
    const navigate = useNavigate();

    const movieListHandler = (movie: Movie) =>
        navigate(`/movie/${movie.slug}`);

    return (
        <>
            {movies.map((movie) => (
                <ListCard key={movie.id}>
                    <Poster onClick={() => movieListHandler(movie)} src={movie.poster}/>

                    <Info>
                        <Title onClick={() => movieListHandler(movie)}>
                            {movie.title}
                        </Title>

                        <Meta>
                            {movie.year} • {movie.category} • {movie.duration} мин
                        </Meta>

                        <Label>Режиссёр: {movie.director}</Label>

                        <Label>
                            В ролях: {movie.cast.join(", ")}
                        </Label>

                        <RatingStars rating={movie.rating}/>

                        <Description>
                            {movie.description}
                        </Description>

                        <Actions>
                            <Button onClick={() => movieListHandler(movie)}>
                                <PlayArrowSharpIcon color="success"/>
                                Смотреть
                            </Button>

                            <FavoriteButton movie={movie}/>
                        </Actions>
                    </Info>
                </ListCard>
            ))}
        </>
    );}