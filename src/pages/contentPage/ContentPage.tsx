import { Navigate, useParams } from "react-router-dom";
import { PreferencesProvider } from "../../components/preferencesProvider";

import { movies } from "../../components/movies";
import { series } from "../../components/series";
import { cartoon } from "../../components/cartoon";

const contentMap = {
    movie: movies,
    series: series,
    cartoon: cartoon,
} as const;

const titles = {
    movie: "Все фильмы",
    series: "Все сериалы",
    cartoon: "Все мультфильмы",
} as const;

const validTypes = ["movie", "series", "cartoon"] as const;


export const ContentPage = () => {
    const { type } = useParams();

    if (!type || !validTypes.includes(type as typeof validTypes[number])) {
        return <Navigate to="/error" replace />;
    }

    const source = contentMap[type as keyof typeof contentMap];

    const title =
        titles[type as keyof typeof titles] ?? "Контент";

    return (
        <PreferencesProvider
            items={source}
            title={title}
        />
    );
};