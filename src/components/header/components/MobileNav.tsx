import {MobileNavLink, MobileNavWrapper} from "../styles/HeaderStyle.tsx";

export const MobileNav = () => {
    return (
        <MobileNavWrapper>
            <MobileNavLink to="/all">
                Все
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