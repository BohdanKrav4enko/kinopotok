import { PreferencesProvider } from "../../components/preferencesProvider";
import { useFilteredMedia } from "../../hooks/useFiltredMediaTop.tsx";
import { allContent } from "../../components/allContent.ts";
import { useParams } from "react-router-dom";
import { contentMeta } from "./contentMeta.ts";

type ContentType = keyof typeof contentMeta;

export const TopPage = () => {
    const { type } = useParams();

    const safeType: ContentType =
        (type as ContentType) ?? "all";

    const filteredMovies = useFilteredMedia(allContent, safeType);

    const meta =
        contentMeta[safeType] ?? contentMeta.all;

    return (
        <PreferencesProvider
            subtitle={meta.subtitle}
            items={filteredMovies}
            title={meta.title}
        />
    );
};