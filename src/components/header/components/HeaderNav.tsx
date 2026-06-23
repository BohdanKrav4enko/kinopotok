import { Nav, StyledNavLink } from "../styles/HeaderStyle.tsx";

export const HeaderNav = () => {
    return (
        <Nav>
            <StyledNavLink to="/all">
                Все
            </StyledNavLink>

            <StyledNavLink to="/movie">
                Фильмы
            </StyledNavLink>

            <StyledNavLink to="/series">
                Сериалы
            </StyledNavLink>

            <StyledNavLink to="/cartoon">
                Мультфильмы
            </StyledNavLink>
        </Nav>
    );
};