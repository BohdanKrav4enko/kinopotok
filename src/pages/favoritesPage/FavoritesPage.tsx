import {useAppSelector} from "../../hooks";
import {EmptyMessage} from "../../components/EmptyMessage.tsx";
import {PreferencesProvider} from "../../components/preferencesProvider";

export const FavoritesPage = () => {
    const favorites = useAppSelector((state) => state.favorites.items);
    return (
        <>
            {favorites.length === 0 ? (
                <EmptyMessage/>
            ) : (
                <PreferencesProvider subtitle={"Все твои сохранённые фильмы и сериалы в одном месте."} title={"Избранное"} items={favorites}/>
            )}
        </>
    );
};