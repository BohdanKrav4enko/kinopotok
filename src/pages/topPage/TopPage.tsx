import {PreferencesProvider} from "../../components/preferencesProvider";
import {allContent} from "../../components/allContent.ts";


export const TopPage = () => {
    const items = [...allContent]
        .sort((a, b) => b.rating - a.rating);

    return (
        <PreferencesProvider
            items={items}
            title="Топ рейтинга"
            subtitle="Самые популярные фильмы, сериалы и мультфильмы по оценкам зрителей — только лучшее из лучшего."
        />
    );
};