import type {BaseMedia} from "./baseType.ts";

export interface Movie extends BaseMedia {

    budget: number;
    boxOffice: number;

    writers?: string[];
    studio?: string[];
    awards?: string[];
}