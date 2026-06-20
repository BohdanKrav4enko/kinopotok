export interface Movie {
    id: number;
    title: string;
    originalTitle: string;
    year: number;
    releaseDate: string;

    budget: number;
    boxOffice: number;

    category: string;
    genres: string[];

    rating: number;
    votes: number;

    duration: number;
    ageRating: string;

    country: string[];
    language: string;

    director: string;
    writers?: string[];
    cast: string[];

    studio?: string[];

    description: string;

    poster: string;
    backdrop: string;
    trailer: string;

    tags: string[];

    awards?: string[];

    featured: boolean;
    trending: boolean;

    slug: string;

    createdAt?: string;
    updatedAt?: string;
}