import {useLocation} from "react-router-dom";
import {Bar, Count, NavButton} from "./styles/NavBarStyle.tsx";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import CategoryIcon from "@mui/icons-material/Category";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import {ROUTES} from "../../router/paths.ts";
import {config} from "./contentMeta.ts";
import {useAppSelector} from "../../hooks";
import {useFavoritesAnimation} from "../../hooks/useFavoritesAnimation.ts";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const NavBar = () => {
    const location = useLocation();
    const type = useAppSelector((state) => state.filter.type);
    const current = config[type];
    const isActive = (path: string) => location.pathname === path;
    const { favoritesCount, animate } = useFavoritesAnimation();
    const topRoute = `/${type}/top`;
    const newRoute = `/${type}/new`;
    const favoriteRoute = `/favorites`;

    return (
        <Bar>
            <NavButton
                to={ROUTES.CATEGORIES}
                $active={isActive(ROUTES.CATEGORIES)}
            >
                <CategoryIcon/> Категории
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
                to={favoriteRoute}
                $active={isActive(favoriteRoute)}
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