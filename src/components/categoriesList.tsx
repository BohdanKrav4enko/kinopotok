import { movies } from "./movies";
import { series } from "./series";
import { cartoon } from "./cartoon";

type ContentType = "movie" | "series" | "cartoon" | "all";

export const categoriesList = (type: ContentType) => {
    const data =
        type === "movie"
            ? movies
            : type === "series"
                ? series
                : type === "cartoon"
                    ? cartoon
                    : [...movies, ...series, ...cartoon];

    const title =
        type === "movie"
            ? "Все фильмы"
            : type === "series"
                ? "Все сериалы"
                : type === "cartoon"
                    ? "Все мультфильмы"
                    : "Все";

    return [
        title,
        ...Array.from(new Set(data.map((i) => i.category))),
    ];
};