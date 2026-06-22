import {Container, SearchContainer,} from "./styles/HeaderStyle.tsx";
import {Search} from "../search/Search.tsx";
import {HeaderNav} from "./components/HeaderNav.tsx";
import {HeaderLogo} from "./components/HeaderLogo.tsx";
import {HeaderActions} from "./components/HeaderAction.tsx";
import {BurgerButton} from "./components/mobileMenu/BurgerButton.tsx";

export type HeaderButtonProps = {
    onClick: () => void;
};

export const Header = ({ onClick }: HeaderButtonProps) => {

    return (
        <Container>
            <BurgerButton onClick={onClick}/>
            <HeaderLogo/>
            <HeaderNav/>

            <SearchContainer>
                <Search/>
            </SearchContainer>
            <HeaderActions/>
        </Container>
    );
};