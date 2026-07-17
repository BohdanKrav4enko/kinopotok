import { PreferencesProvider } from "../../components/preferencesProvider";
import { allContent } from "../../components/allContent";

export const CatalogPage = () => {
    return (
        <PreferencesProvider
            items={allContent}
            title="Каталог"
            subtitle="Все фильмы, сериалы и мультфильмы в одном месте"
        />
    );
};