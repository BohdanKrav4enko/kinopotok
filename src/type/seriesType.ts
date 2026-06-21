import type {BaseMedia} from "./baseType.ts";

export interface Series extends BaseMedia {

    seasons: number;
    episodes: number;
}