export interface BaseMedia {
    id: number;
    type: string;

    title: string;
    originalTitle: string;

    year: number;
    releaseDate: string;

    category: string;
    genres: string[];

    rating: number;
    votes: number;

    duration: number;
    ageRating: string;

    country: string[];
    language: string;

    director: string;

    cast: string[];

    description: string;

    poster: string;
    backdrop: string;

    trailer: string;

    tags: string[];

    featured: boolean;
    trending: boolean;

    slug: string;

    createdAt?: string;
    updatedAt?: string;
}