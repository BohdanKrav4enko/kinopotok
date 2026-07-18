import { PreferencesProvider } from "../../components/preferencesProvider";
import { allContent } from "../../components/allContent";
import { useNewMedia } from "../../hooks/useNewMedia";
import { useParams } from "react-router-dom";


export const GenrePage = () => {
    const movies = useNewMedia(allContent);
    const { name } = useParams();


    const filteredMovies = movies.filter(movie =>
        movie.genres.includes(name!)

    );


    return (
        <PreferencesProvider

            items={filteredMovies}
            title={name}
            subtitle={`Смотрите лучшие фильмы, сериалы и мультфильмы в жанре «${name}» — новинки, классика и любимые истории в одной подборке`}
        />
    );
};