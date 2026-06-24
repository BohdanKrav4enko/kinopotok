import {useParams} from "react-router-dom";
import {Empty} from "./styles/CategoryPageStyle.tsx";
import {PreferencesProvider} from "../../../components/preferencesProvider";
import {allContent} from "../../../components/allContent";

type ContentType = "movie" | "series" | "cartoon" | "all";

export const CategoryPage = () => {
    const { type, name } = useParams();

    const safeType: ContentType =
        (type as ContentType) ?? "all";

    const decodedName = decodeURIComponent(name || "");

    const filteredItems = allContent.filter(
        (item) => {
            const matchType =
                safeType === "all" ||
                item.type === safeType;

            const isAllCategory =
                decodedName.startsWith("Все");

            const matchCategory =
                isAllCategory ||
                item.category === decodedName;

            return matchType && matchCategory;
        }
    );


    return (
        <>
            {filteredItems.length > 0 ? (
                <PreferencesProvider
                    title={decodedName}
                    items={filteredItems}
                />
            ) : (
                <Empty>
                    Нет контента в этой категории
                </Empty>
            )}
        </>
    );
};