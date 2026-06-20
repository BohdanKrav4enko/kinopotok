import {useNavigate} from "react-router-dom";
import {mockMovies} from "../../mockMovies.tsx";
import {Card, Poster, Title} from "../styles/MovieGridStyle.tsx";

export const Card = () => {
    const navigate = useNavigate();
    return <>
        {mockMovies.map((movie) => (
                <Card onClick={() => navigate(`/movie/${movie.id}`)} key={movie.id}>
                    <Poster />
                    <Title>{movie.title}</Title>
                </Card>
            ))}
    </>
};

