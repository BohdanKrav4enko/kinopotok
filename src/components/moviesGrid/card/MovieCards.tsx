import type { MediaItem } from "../../allContent";
import { MovieCard } from "./MovieCard";

type Props = {
    items: MediaItem[];
};

export const MovieCards = ({ items }: Props) => {
    return (
        <>
            {items.map((item) => (
                <MovieCard
                    key={`${item.type}-${item.id}`}
                    item={item}
                />
            ))}
        </>
    );
};