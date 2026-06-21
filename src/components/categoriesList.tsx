import { useAppSelector } from "../hooks";
import { movies } from "./movies.tsx";
import { series } from "./series.tsx";
import { cartoon } from "./cartoon.tsx";

export const categoriesList = () => {
    const type = useAppSelector((state) => state.filter.type);

    const data =
        type === "movie"
            ? movies
            : type === "series"
                ? series
                : type === "cartoon"
                    ? cartoon
                    : [...movies, ...series, ...cartoon];

    return [
        type === "movie"
            ? "Все фильмы"
            : type === "series"
                ? "Все сериалы"
                : type === "cartoon"
                    ? "Все мультфильмы"
                    : "Все",

        ...Array.from(new Set(data.map((i) => i.category))),
    ];
};