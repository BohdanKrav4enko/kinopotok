import { PreferencesProvider } from "../../components/preferencesProvider";
import { allContent } from "../../components/allContent";
import { useNewMedia } from "../../hooks/useNewMedia";
import { newContentMeta } from "./newContentMeta.ts";
import { useParams } from "react-router-dom";

const validTypes = ["movie", "series", "cartoon", "all"] as const;

type ContentType = typeof validTypes[number];

export const NewPage = () => {
    const { type } = useParams();

    const safeType: ContentType =
        validTypes.includes(type as ContentType)
            ? (type as ContentType)
            : "all";

    const filtered = allContent.filter(
        (item) =>
            safeType === "all" || item.type === safeType
    );

    const items = useNewMedia(filtered);

    const meta =
        newContentMeta[safeType] ?? newContentMeta.all;

    return (
        <PreferencesProvider
            items={items}
            title={meta.title}
            subtitle={meta.subtitle}
        />
    );
};