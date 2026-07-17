import { PreferencesProvider } from "../../components/preferencesProvider";
import { allContent } from "../../components/allContent";
import { useNewMedia } from "../../hooks/useNewMedia";


export const NewPage = () => {

    const items = useNewMedia(allContent);

    return (
        <PreferencesProvider
            items={items}
            title={"Новые релизы"}
            subtitle={"Свежие фильмы, сериалы и мультфильмы — самые последние новинки прямо сейчас."}
        />
    );
};