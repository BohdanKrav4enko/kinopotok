import {useLocation} from "react-router-dom";
import {Bar, NavButton} from "./styles/NavBarStyle.tsx";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import CategoryIcon from "@mui/icons-material/Category";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import {ROUTES} from "../../router/paths.ts";
import {config} from "./contentMeta.ts";
import {useAppSelector} from "../../hooks";

export const NavBar = () => {
    const location = useLocation();
    const type = useAppSelector((state) => state.filter.type);
    const current = config[type];
    const isActive = (path: string) => location.pathname === path;
    const topRoute = `/${type}/top`;
    const newRoute = `/${type}/new`;

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
        </Bar>
    );
};