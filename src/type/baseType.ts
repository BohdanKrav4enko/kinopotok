export interface BaseMedia {
    id: number;

    type: "movie" | "series" | "cartoon";

    title: string;
    originalTitle: string;

    releaseDate: string;

    genres: string[];

    rating: number;
    votes: number;

    ageRating: string;

    countries: string[];
    languages: string[];

    directors: string[];
    cast: string[];

    description: string;

    poster: string;
    backdrop: string;

    trailer: string;

    tags: string[];

    slug: string;

    isFeatured: boolean;
    isTrending: boolean;

    createdAt?: string;
    updatedAt?: string;
}