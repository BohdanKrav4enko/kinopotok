import {Navigate, useParams} from "react-router-dom";
import { PreferencesProvider } from "../../components/preferencesProvider";

import { movies } from "../../components/movies";
import { series } from "../../components/series";
import { cartoon } from "../../components/cartoon";

export const ContentPage = () => {
    const { type } = useParams();

    const all = [...movies, ...series, ...cartoon];

    const filtered =
        type === "all"
            ? all
            : all.filter((item) => item.type === type);

    const titles = {
        movie: "Все фильмы",
        series: "Все сериалы",
        cartoon: "Все мультфильмы",
        all: "Все",
    } as const;

    const validTypes = ["movie", "series", "cartoon", "all"];

    if (!type || !validTypes.includes(type)) {
        return <Navigate to="/error" replace />;
    }

    const title = titles[type as keyof typeof titles] ?? "Контент";

    return (
        <PreferencesProvider
            items={filtered}
            title={title}
        />
    );
};