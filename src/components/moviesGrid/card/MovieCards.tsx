import {useNavigate} from "react-router-dom";
import {Card, Poster, Title, Year} from "../styles/MovieGridStyle.tsx";
import type {Movie} from "../../../type/type.ts";

type MovieCardsProps = {
    movies: Movie[];
};

export const MovieCards = ({ movies }: MovieCardsProps) => {

    const navigate = useNavigate();
    return <>
        {movies.map((movie) => (
                <Card onClick={() => navigate(`/movie/${movie.slug}`)} key={movie.id}>
                    <Poster src={movie.poster}/>
                    <Title>{movie.title}</Title>
                    <Year>{movie.year}</Year>
                </Card>
            ))}
    </>
};

