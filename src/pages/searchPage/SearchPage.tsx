import {useSearchParams} from "react-router-dom";
import {Container, Count, Header, Query, TitleText} from "./styles/SearchPageStyle.ts";
import {EmptyMessage} from "../../components/EmptyMessage.tsx";
import {PreferencesProvider} from "../../components/preferencesProvider";
import SearchIcon from '@mui/icons-material/Search';
import {allContent} from "../../components/allContent.ts";

export const SearchPage = () => {
    const [params] = useSearchParams();

    const query = params.get("q") || "";

    const results = allContent.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <Container>
            <Header>
                <TitleText>
                    <SearchIcon/> Результаты поиска
                </TitleText>
                <Query>
                    “{query || "ничего не введено"}”
                </Query>
                <Count>
                    найдено: {results.length}
                </Count>
            </Header>
            {results.length > 0 ? (
                <PreferencesProvider items={results}/>
            ) : (
                <EmptyMessage/>
            )}
        </Container>
    );
};