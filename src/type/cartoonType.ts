import type {BaseMedia} from "./baseType.ts";

export interface Cartoon extends BaseMedia {

    budget: number;
    boxOffice: number;

    writers?: string[];
    studio?: string[];
    awards?: string[];
}