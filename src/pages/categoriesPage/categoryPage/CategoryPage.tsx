import {useParams} from "react-router-dom";
import {Empty} from "./styles/CategoryPageStyle.tsx";
import {movies} from "../../../components/movies.tsx";
import {PreferencesProvider} from "../../../components/preferencesProvider";

export const CategoryPage = () => {
    const {name} = useParams();

    const decodedName = decodeURIComponent(name || "");

    const filteredMovies =
        decodedName === "Все фильмы"
            ? movies
            : movies.filter((m) => m.category === decodedName);

    return <>
        {filteredMovies.length > 0 ? (
            <PreferencesProvider
                subtitle={`Лучшие фильмы категории ${decodedName.toLowerCase()} в отличном качестве, доступные для просмотра прямо сейчас`}
                title={decodedName} movies={filteredMovies}/>
        ) : (
            <Empty style={{gridColumn: "1 / -1"}}>😢 Нет фильмов в этой категории</Empty>
        )}
    </>
};

