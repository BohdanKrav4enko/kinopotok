import { Container, SearchContainer } from "./styles/HeaderStyle.tsx";
import { Search } from "../search/Search.tsx";
import { HeaderNav } from "./components/HeaderNav.tsx";
import { HeaderLogo } from "./components/HeaderLogo.tsx";
import { HeaderActions } from "./components/HeaderAction.tsx";
import { BurgerButton } from "./components/mobileMenu/BurgerButton.tsx";
import { useNavigate } from "react-router-dom";

export type HeaderButtonProps = {
    onClick: () => void;
};

export const Header = ({ onClick }: HeaderButtonProps) => {
    const navigate = useNavigate();

    return (
        <Container>
            <BurgerButton onClick={onClick} />

            <HeaderLogo onClick={() => navigate("/all")} />

            <HeaderNav />

            <SearchContainer>
                <Search />
            </SearchContainer>

            <HeaderActions />
        </Container>
    );
};