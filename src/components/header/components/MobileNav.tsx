import { MobileNavLink, MobileNavWrapper } from "../styles/HeaderStyle";

export const MobileNav = () => {
    return (
        <MobileNavWrapper>
            <MobileNavLink to="/">
                Главная
            </MobileNavLink>

            <MobileNavLink to="/movie">
                Фильмы
            </MobileNavLink>

            <MobileNavLink to="/series">
                Сериалы
            </MobileNavLink>

            <MobileNavLink to="/cartoon">
                Мультфильмы
            </MobileNavLink>
        </MobileNavWrapper>
    );
};