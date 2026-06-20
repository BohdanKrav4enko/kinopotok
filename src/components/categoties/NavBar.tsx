import { useNavigate, useLocation } from "react-router-dom";
import {Bar, NavButton} from "./styles/NavBarStyle.tsx";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import CategoryIcon from "@mui/icons-material/Category";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <Bar>
            <NavButton
                $active={isActive("/")}
                onClick={() => navigate("/")}
            >
                <MovieFilterIcon/> Все фильмы
            </NavButton>

            <NavButton
                $active={isActive("/categories")}
                onClick={() => navigate("/categories")}
            >
                <CategoryIcon/> Категории
            </NavButton>

            <NavButton
                $active={isActive("/top")}
                onClick={() => navigate("/top")}
            >
                <WhatshotIcon/> Топ
            </NavButton>

            <NavButton
                $active={isActive("/new")}
                onClick={() => navigate("/new")}
            >
                <TrendingUpIcon/> Новинки
            </NavButton>
        </Bar>
    );
};