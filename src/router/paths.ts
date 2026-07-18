export const ROUTES = {
    HOME: "/",

    TYPE: "/:type",
    DETAILS: "/:type/:slug",

    CATALOG: "/catalog",
    TOP: "/top",
    NEW: "/new",
    GENRE: "/genre/:name",
    GENRES: "/genres",
    COUNTRY: "/country/:name",

    SEARCH: "/search",
    FAVORITES: "/favorites",
    ERROR: "/error",
} as const;