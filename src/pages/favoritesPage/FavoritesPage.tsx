import {useAppSelector} from "../../hooks";
import {EmptyMessage} from "../../components";
import {PreferencesProvider} from "../../components/preferencesProvider";

export const FavoritesPage = () => {
    const favorites = useAppSelector((state) => state.favorites.items);
    return (
        <>
            {favorites.length === 0 ? (
                <EmptyMessage
                    title="Сохрани свои любимые фильмы"
                    subtitle="Создай собственную коллекцию, добавляя фильмы и сериалы в избранное."
                />
            ) : (
                <PreferencesProvider subtitle={"Все твои сохранённые фильмы и сериалы в одном месте."} title={"Избранное"} items={favorites}/>
            )}
        </>
    );
};