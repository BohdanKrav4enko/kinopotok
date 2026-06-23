import type { MediaItem } from "../components/allContent.ts";

type ContentType = "movie" | "series" | "cartoon" | "all";

export const useFilteredMedia = (
    items: MediaItem[],
    type: ContentType
) => {
    return items
        .filter((item) => type === "all" || item.type === type)
        .sort((a, b) => b.rating - a.rating);
};