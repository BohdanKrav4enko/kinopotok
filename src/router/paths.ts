export const ROUTES = {
    HOME: "/",

    TYPE: "/:type",
    DETAILS: "/:type/:slug",

    NEW: "/:type/new",
    TOP: "/:type/top",
    CATEGORY_DETAILS: (type: string, name: string) =>
        `/${type}/category/${encodeURIComponent(name)}`,
    CATEGORIES: "/categories",
    CATEGORY: "/:type/category/:name",

    SEARCH: "/search",
    FAVORITES: "/favorites",
    ERROR: "/error",
} as const;