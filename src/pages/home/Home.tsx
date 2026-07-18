import {Hero} from "./hero/Hero";
import {Features} from "./features/Features";
import {MovieSection} from "./movieSection/MovieSection";
import {Genres} from "./genres/Genres";
import {Subscribe} from "./subscribe/Subscribe";
import {allContent} from "../../components/allContent.ts";


export const Home = () => {

    const popularMovies = allContent
        .filter(movie => movie.trending)
        .slice(0, 12);

    const newMovies = [...allContent]
        .sort((a, b) => b.year - a.year)
        .slice(0, 12);

    const topRatedMovies = [...allContent]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 12);


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