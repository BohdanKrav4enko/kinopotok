import { Clock3, Layers3 } from "lucide-react";
import type { MediaItem } from "../components/allContent";

const plural = (
    value: number,
    one: string,
    few: string,
    many: string
) => {
    const n = Math.abs(value) % 100;
    const n1 = n % 10;

    if (n > 10 && n < 20) return many;
    if (n1 === 1) return one;
    if (n1 >= 2 && n1 <= 4) return few;

    return many;
};

export const getMediaInfo = (item: MediaItem) => {
    if (item.seasons != null && item.episodes != null) {
        return {
            icon: <Layers3 size={18} />,
            text: `${item.seasons} ${plural(
                item.seasons,
                "сезон",
                "сезона",
                "сезонов"
            )} • ${item.episodes} ${plural(
                item.episodes,
                "серия",
                "серии",
                "серий"
            )}`,
        };
    }

    return {
        icon: <Clock3 size={18} />,
        text: `${Math.floor(item.duration / 60)} ч ${item.duration % 60} мин`,
    };
};