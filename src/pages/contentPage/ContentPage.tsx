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
    all: "Все",
} as const;

const validTypes = ["movie", "series", "cartoon", "all"] as const;

const allContent = [
    ...movies,
    ...series,
    ...cartoon,
];

export const ContentPage = () => {
    const { type } = useParams();

    if (!type || !validTypes.includes(type as any)) {
        return <Navigate to="/error" replace />;
    }

    const source =
        type === "all"
            ? allContent
            : contentMap[type as keyof typeof contentMap];

    const title =
        titles[type as keyof typeof titles] ?? "Контент";

    return (
        <PreferencesProvider
            items={source}
            title={title}
        />
    );
};