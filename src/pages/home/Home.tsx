import { Hero } from "./hero/Hero";
import { Features } from "./features/Features";
import { MovieSection } from "./movieSection/MovieSection";
import { Genres } from "./genres/Genres";
import { Subscribe } from "./subscribe/Subscribe";
import {movies} from "../../components/movies.tsx";


export const Home = () => {

    const popularMovies = movies
        .filter(movie => movie.trending)
        .slice(0, 6);

    const newMovies = [...movies]
        .sort((a, b) => b.year - a.year)
        .slice(0, 6);

    const topRatedMovies = [...movies]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 6);


    return (
        <>
            <Hero />

            <Features />

            <MovieSection
                title="Популярное сейчас"
                movies={popularMovies}
            />

            <Genres />

            <MovieSection
                title="Новинки"
                movies={newMovies}
            />

            <MovieSection
                title="С лучшими оценками"
                movies={topRatedMovies}
            />

            <Subscribe />
        </>
    );
};