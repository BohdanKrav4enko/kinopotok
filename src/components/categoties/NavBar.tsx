import {useLocation} from "react-router-dom";
import {Bar, Count, NavButton} from "./styles/NavBarStyle.tsx";

import {useFavoritesAnimation} from "../../hooks/useFavoritesAnimation.ts";
import {ROUTES} from "../../router/paths.ts";
import {Flame, Grid2X2, Heart, Sparkles} from "lucide-react";


export const NavBar = () => {
    const location = useLocation();
    const {favoritesCount, animate} = useFavoritesAnimation();


    const catalogRoute = ROUTES.CATALOG;
    const topRoute = ROUTES.TOP;
    const newRoute = ROUTES.NEW;

    const isActive = (path: string) =>
        location.pathname === path;

    return (
        <Bar>

            <NavButton
                to={catalogRoute}
                $active={isActive(catalogRoute)}
            >
                <Grid2X2 size={20}/>
                Каталог
            </NavButton>


            <NavButton
                to={topRoute}
                $active={isActive(topRoute)}
            >
                <Flame size={20}/>
                Топ
            </NavButton>


            <NavButton
                to={newRoute}
                $active={isActive(newRoute)}
            >
                <Sparkles size={20}/>
                Новинки
            </NavButton>


            <NavButton
                to="/favorites"
                $active={isActive("/favorites")}
            >
                <Heart
                    size={20}
                    fill={isActive("/favorites") ? "currentColor" : "none"}
                />

                Избранное


                {favoritesCount > 0 && (
                    <Count $animate={animate}>
                        {favoritesCount}
                    </Count>
                )}

            </NavButton>

        </Bar>
    );
};