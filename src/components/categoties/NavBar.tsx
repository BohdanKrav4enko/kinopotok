import {useLocation} from "react-router-dom";
import {Bar, Count, NavButton} from "./styles/NavBarStyle.tsx";

import {useFavoritesAnimation} from "../../hooks/useFavoritesAnimation.ts";
import {ROUTES} from "../../router/paths.ts";
import {Drama, Flame, Grid2X2, Heart, Sparkles} from "lucide-react";


export const NavBar = () => {
    const location = useLocation();
    const {favoritesCount, animate} = useFavoritesAnimation();



    const isActive = (path: string) =>
        location.pathname === path;

    return (
        <Bar>

            <NavButton
                to={ROUTES.GENRES}
            >
                <Drama size={20}/>
                Жанры
            </NavButton>

            <NavButton
                to={ROUTES.CATALOG}
            >
                <Grid2X2 size={20}/>
                Каталог
            </NavButton>


            <NavButton
                to={ROUTES.TOP}
            >
                <Flame size={20}/>
                Топ
            </NavButton>


            <NavButton
                to={ROUTES.NEW}
            >
                <Sparkles size={20}/>
                Новинки
            </NavButton>


            <NavButton
                to="/favorites"
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