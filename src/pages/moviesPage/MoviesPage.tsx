import {PreferencesProvider} from "../../components/preferencesProvider";
import {movies} from "../../components/movies.tsx";


export const MoviesPage = () => {


    return (
        <>
            <PreferencesProvider movies={movies} title={"Все фильмы"}/>
        </>
    );
}