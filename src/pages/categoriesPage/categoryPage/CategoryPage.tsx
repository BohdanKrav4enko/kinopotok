import {useParams} from "react-router-dom";
import {Empty} from "./styles/CategoryPageStyle.tsx";
import {PreferencesProvider} from "../../../components/preferencesProvider";
import {allContent} from "../../../components/allContent";
import {useAppSelector} from "../../../hooks";

export const CategoryPage = () => {
    const { name } = useParams();

    const { type } = useAppSelector((state) => state.filter);

    const decodedName = decodeURIComponent(name || "");

    const filteredItems = allContent.filter((item) => {
        const matchType =
            type === "all" || item.type === type;

        const isAllCategory =
            decodedName.startsWith("Все");

        const matchCategory =
            isAllCategory || item.category === decodedName;

        return matchType && matchCategory;
    });

    return (
        <>
            {filteredItems.length > 0 ? (
                <PreferencesProvider
                    subtitle={`Лучшие ${
                        type === "movie"
                            ? "фильмы"
                            : type === "series"
                                ? "сериалы"
                                : "мультфильмы"
                    } категории ${decodedName.toLowerCase()} в отличном качестве`}
                    title={decodedName}
                    items={filteredItems}
                />
            ) : (
                <Empty style={{ gridColumn: "1 / -1" }}>
                    Нет контента в этой категории
                </Empty>
            )}
        </>
    );
};