import {PreferencesProvider} from "../../components/preferencesProvider";
import {allContent} from "../../components/allContent.ts";

export const AllMoviesPage = () => {

    return (
        <>
            <PreferencesProvider items={allContent} title={"Все"}/>
        </>
    );
}