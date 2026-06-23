import { useLocation } from "react-router-dom";
import {
    Bar,
    Count,
    NavButton
} from "./styles/NavBarStyle.tsx";

import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import CategoryIcon from "@mui/icons-material/Category";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useFavoritesAnimation } from "../../hooks/useFavoritesAnimation.ts";
import { config } from "./contentMeta.ts";

const validTypes = ["movie", "series", "cartoon", "all"] as const;

type ContentType = typeof validTypes[number];

export const NavBar = () => {
    const location = useLocation();
    const { favoritesCount, animate } = useFavoritesAnimation();

    const raw = location.pathname.split("/")[1];

    const type: ContentType =
        validTypes.includes(raw as ContentType)
            ? (raw as ContentType)
            : "all";

    const current = config[type] ?? config.all;

    const baseRoute = `/${type}`;
    const categoriesRoute = `/${type}/categories`;
    const topRoute = `/${type}/top`;
    const newRoute = `/${type}/new`;

    const isActive = (path: string) =>
        location.pathname === path;

    return (
        <Bar>
            <NavButton
                to={categoriesRoute}
                $active={isActive(categoriesRoute)}
            >
                <CategoryIcon />
                Категории
            </NavButton>

            <NavButton
                to={baseRoute}
                $active={isActive(baseRoute)}
            >
                <MovieFilterIcon />
                {current.label}
            </NavButton>

            <NavButton
                to={topRoute}
                $active={isActive(topRoute)}
            >
                <WhatshotIcon />
                Топ
            </NavButton>

            <NavButton
                to={newRoute}
                $active={isActive(newRoute)}
            >
                <TrendingUpIcon />
                Новинки
            </NavButton>

            <NavButton
                to="/favorites"
                $active={isActive("/favorites")}
            >
                <FavoriteIcon />
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