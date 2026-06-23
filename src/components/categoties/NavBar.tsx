import {useLocation} from "react-router-dom";
import {Bar, Count, NavButton} from "./styles/NavBarStyle.tsx";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import CategoryIcon from "@mui/icons-material/Category";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {useFavoritesAnimation} from "../../hooks/useFavoritesAnimation.ts";
import {config} from "./contentMeta.ts";


export const NavBar = () => {
    const location = useLocation();

    const isActive = (path: string) =>
        location.pathname === path;

    const { favoritesCount, animate } = useFavoritesAnimation();

    const raw = location.pathname.split("/")[1];

    const validTypes = ["movie", "series", "cartoon", "all"] as const;

    const type = validTypes.includes(raw as any)
            ? (raw as (typeof validTypes)[number])
            : "all";

    const current = config[type];

    const topRoute = `/${type}/top`;
    const newRoute = `/${type}/new`;

    return (
        <Bar>
            <NavButton
                to={`/${type}/categories`}
                $active={isActive(`/${type}/categories`)}
            >
                <CategoryIcon /> Категории
            </NavButton>

            <NavButton
                to={current.route}
                $active={isActive(current.route)}
            >
                <MovieFilterIcon />
                {current.label}
            </NavButton>

            <NavButton
                to={topRoute}
                $active={isActive(topRoute)}
            >
                <WhatshotIcon /> Топ
            </NavButton>

            <NavButton
                to={newRoute}
                $active={isActive(newRoute)}
            >
                <TrendingUpIcon /> Новинки
            </NavButton>

            <NavButton
                to="/favorites"
                $active={isActive("/favorites")}
            >
                <FavoriteIcon /> Избранное

                {favoritesCount > 0 && (
                    <Count $animate={animate}>
                        {favoritesCount}
                    </Count>
                )}
            </NavButton>
        </Bar>
    );
};