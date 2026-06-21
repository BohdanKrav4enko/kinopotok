import { useAppSelector } from "../../hooks";
import { PreferencesProvider } from "../../components/preferencesProvider";
import { allContent } from "../../components/allContent";
import { useNewMedia } from "../../hooks/useNewMedia";
import {newContentMeta} from "./newContentMeta.ts";

export const NewPage = () => {

    const type = useAppSelector((state) => state.filter.type);

    const filtered = allContent.filter(
        (item) => type === "all" || item.type === type
    );

    const items = useNewMedia(filtered);
    const meta =
        newContentMeta[type] ?? newContentMeta.all;

    return (
        <PreferencesProvider
            items={items}
            title={meta.title}
            subtitle={meta.subtitle}
        />
    );
};