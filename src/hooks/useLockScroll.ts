import { useEffect } from "react";

export const useLockScroll = (locked: boolean) => {
    useEffect(() => {
        const target = document.documentElement;

        if (locked) {
            target.style.overflow = "hidden";
        } else {
            target.style.overflow = "";
        }

        return () => {
            target.style.overflow = "";
        };
    }, [locked]);
};