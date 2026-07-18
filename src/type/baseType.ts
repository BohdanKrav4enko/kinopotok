export interface BaseMedia {
    id: number;
    type: string;

    title: string;
    originalTitle: string;

    year: number;
    releaseDate: string;
    slug: string;
    category: string;
    genres: string[];
    cast: string[];
    rating: number;
    votes: number;
    duration: number;
    ageRating: string;
    quality?: string;
    country: string[];
    language: string;

    director: string;

    description: string;

    poster: string;
    backdrop: string;

    trailer: string;

    tags: string[];
    featured: boolean;
    trending: boolean;

    budget?: number;
    boxOffice?: number;

    seasons?: number;
    episodes?: number;

    writers?: string[];
    studio?: string[];
    awards?: string[];
}