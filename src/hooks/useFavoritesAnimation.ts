import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../hooks";

export const useFavoritesAnimation = () => {
    const favoritesCount = useAppSelector(
        (state) => state.favorites.items.length
    );

    const prevCount = useRef(favoritesCount);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (favoritesCount !== prevCount.current) {
            setAnimate(true);

            const timeout = setTimeout(
                () => setAnimate(false),
                400
            );

            prevCount.current = favoritesCount;

            return () => clearTimeout(timeout);
        }
    }, [favoritesCount]);

    return {
        favoritesCount,
        animate,
    };
};