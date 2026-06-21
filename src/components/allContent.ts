import type {Movie} from "../type/movieType.ts";
import type {Series} from "../type/seriesType.ts";
import type {Cartoon} from "../type/cartoonType.ts";
import {movies} from "./movies.tsx";
import {series} from "./series.tsx";
import {cartoon} from "./cartoon.tsx";

export type MediaItem = Movie | Series | Cartoon;

export type PreferencesProviderProps = {
    items: MediaItem[];
    title?: string;
    subtitle?: string;
};
export const allContent: MediaItem[] = [...movies, ...series, ...cartoon];