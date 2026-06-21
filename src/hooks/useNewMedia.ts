import { useMemo } from "react";
import type { MediaItem } from "../components/allContent";

export const useNewMedia = (items: MediaItem[]) => {

    const sortedByDate = useMemo(() => {
        return [...items].sort(
            (a, b) =>
                new Date(b.releaseDate).getTime() -
                new Date(a.releaseDate).getTime()
        );
    }, [items]);

    return sortedByDate;
};