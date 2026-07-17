export const ROUTES = {
    HOME: "/",

    TYPE: "/:type",
    DETAILS: "/:type/:slug",

    CATALOG: "/catalog",
    TOP: "/top",
    NEW: "/new",
    CATEGORY: "/category/:name",

    SEARCH: "/search",
    FAVORITES: "/favorites",
    ERROR: "/error",
} as const;