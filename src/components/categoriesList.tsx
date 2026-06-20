import {movies} from "./movies.tsx";

export const categoriesList = [
    "Фильмы",
    ...Array.from(new Set(movies.map((movie) => movie.category))),
];