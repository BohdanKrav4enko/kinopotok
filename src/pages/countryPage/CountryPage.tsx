import { PreferencesProvider } from "../../components/preferencesProvider";
import { allContent } from "../../components/allContent";
import { useNewMedia } from "../../hooks/useNewMedia";
import { useParams } from "react-router-dom";


export const CountryPage = () => {
    const movies = useNewMedia(allContent);
    const { name } = useParams();


    const filteredMovies = movies.filter(movie =>
        movie.country.includes(name!)

    );


    return (
        <PreferencesProvider

            items={filteredMovies}
            title={name}
            subtitle={`Фильмы, сериалы и мультфильмы производства «${name}» — новинки, лучшие оценки зрителей и популярные картины в одной подборке`}
        />
    );
};