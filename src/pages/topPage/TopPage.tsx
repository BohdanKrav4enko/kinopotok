import {PreferencesProvider} from "../../components/preferencesProvider";
import {useFilteredMedia} from "../../hooks/useFiltredMediaTop.tsx";
import {allContent} from "../../components/allContent.ts";
import {useAppSelector} from "../../hooks";
import {contentMeta} from "./contentMeta.ts";

export const TopPage = () => {
    const filteredMovies = useFilteredMedia(allContent)
    const type = useAppSelector((state) => state.filter.type);
    const meta =
        contentMeta[type] ?? contentMeta.all;

    return (
        <PreferencesProvider
            subtitle={meta.subtitle}
            items={filteredMovies}
            title={meta.title}
        />
    );
};