import { PreferencesProvider } from "../../components/preferencesProvider";
import { allContent } from "../../components/allContent";
import { useNewMedia } from "../../hooks/useNewMedia";
import { newContentMeta } from "./newContentMeta.ts";
import { useParams } from "react-router-dom";

type ContentType = keyof typeof newContentMeta;

export const NewPage = () => {
    const { type } = useParams();

    const safeType: ContentType =
        (type as ContentType) ?? "all";

    const filtered = allContent.filter(
        (item) => safeType === "all" || item.type === safeType
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