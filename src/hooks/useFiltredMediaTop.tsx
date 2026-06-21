import { useAppSelector } from "../hooks";
import type {MediaItem} from "../components/allContent.ts";

export const useFilteredMedia = (items: MediaItem[]) => {
    const type = useAppSelector((state) => state.filter.type);

    return items
        .filter((item) => type === "all" || item.type === type)
        .sort((a, b) => b.rating - a.rating);
};