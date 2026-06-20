import {movies} from "./movies.tsx";

export const categoriesList = [
    "Все фильмы",
    ...Array.from(new Set(movies.map((movie) => movie.category))),
];