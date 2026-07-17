
type Filters = {
    genre: string;
    country: string;
    year: string;
    rating: string;
};

export type FiltersProps = {
    genres: string[];
    countries: string[];
    years: string[];
    ratings: string[];
    filters: Filters;
};