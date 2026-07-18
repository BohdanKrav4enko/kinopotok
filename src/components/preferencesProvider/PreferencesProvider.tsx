import { MoviesGrid } from "../moviesGrid";
import { MoviesList } from "../moviesList";
import { useAppSelector } from "../../hooks";
import type { PreferencesProviderProps } from "../allContent.ts";
import { FiltersBar } from "../filters";
import { EmptyMessage } from "../emptyMessege";

export const PreferencesProvider = (props: PreferencesProviderProps) => {
    const { items, title, subtitle } = props;

    const viewMode = useAppSelector(
        (state) => state.preferences.moviesViewMode
    );

    const filters = useAppSelector((state) => state.catalog.filters);
    const sortBy = useAppSelector((state) => state.catalog.sortBy);

    const years = [
        "2020-н.в.",
        "2010-2020",
        "2000-2010",
        "1990-2000",
        "1980-1990",
        "до 1980",
    ];

    const ratings = [
        "9+",
        "8+",
        "7+",
        "6+",
        "5+",
    ];

    const filteredItems = items.filter((movie) => {
        if (
            filters.genre &&
            !movie.genres.includes(filters.genre)
        ) {
            return false;
        }

        if (
            filters.country &&
            !movie.country.includes(filters.country)
        ) {
            return false;
        }

        if (filters.year) {
            if (filters.year === "до 1980") {
                if (movie.year >= 1980) {
                    return false;
                }
            } else {
                const [from, to] = filters.year
                    .split("-")
                    .map(Number);

                if (
                    movie.year < from ||
                    movie.year >= to
                ) {
                    return false;
                }
            }
        }

        if (filters.rating) {
            const minRating = Number(
                filters.rating.replace("+", "")
            );

            if (movie.rating < minRating) {
                return false;
            }
        }

        return true;
    });

    const genres = [...new Set(items.flatMap((movie) => movie.genres))];
    const countries = [...new Set(items.flatMap((movie) => movie.country))];

    const sortedItems = [...filteredItems].sort((a, b) => {
        switch (sortBy) {
            case "rating":
                return b.rating - a.rating;

            case "year_desc":
                return b.year - a.year;

            case "year_asc":
                return a.year - b.year;

            case "popular":
            default:
                return b.votes - a.votes;
        }
    });

    return (
        <>
            <FiltersBar
                genres={genres}
                countries={countries}
                years={years}
                ratings={ratings}
                filters={filters}
            />

            {items.length === 0 ? (
                <EmptyMessage
                    title="Здесь пока пусто"
                    subtitle="Когда здесь появятся фильмы или сериалы, они сразу отобразятся."
                />
            ) : sortedItems.length === 0 ? (
                <EmptyMessage
                    title="Ничего не найдено"
                    subtitle="Попробуйте изменить параметры фильтрации — возможно, следующий фильм станет вашим любимым."
                />
            ) : viewMode === "grid" ? (
                <MoviesGrid
                    title={title}
                    subtitle={subtitle}
                    items={sortedItems}
                />
            ) : (
                <MoviesList
                    title={title}
                    subtitle={subtitle}
                    items={sortedItems}
                />
            )}
        </>
    );
};