import {Container, SearchContainer,} from "./styles/HeaderStyle.tsx";
import {Search} from "../search/Search.tsx";
import {HeaderNav} from "./components/HeaderNav.tsx";
import {HeaderLogo} from "./components/HeaderLogo.tsx";
import {HeaderActions} from "./components/HeaderAction.tsx";

export const Header = () => {

    return (
        <Container>
            <HeaderLogo/>
            <HeaderNav/>

            <SearchContainer>
                <Search/>
            </SearchContainer>

            <HeaderActions/>
        </Container>
    );
};