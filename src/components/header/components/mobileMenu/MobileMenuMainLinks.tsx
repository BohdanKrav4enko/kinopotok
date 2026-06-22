import { NavLink } from "react-router-dom";
import { MenuLink } from "./styles/MobileMenuStyle";
import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import TvIcon from "@mui/icons-material/Tv";
import AnimationIcon from "@mui/icons-material/Animation";

type Props = {
    onNav: (type: "all" | "movie" | "series" | "cartoon") => void;
};

export const MobileMenuMainLinks = ({ onNav }: Props) => {
    return (
        <>
            <MenuLink as={NavLink} to="/all" onClick={() => onNav("all")}>
                <HomeIcon fontSize="small" />
                Всё
            </MenuLink>

            <MenuLink as={NavLink} to="/movie" onClick={() => onNav("movie")}>
                <MovieIcon fontSize="small" />
                Фильмы
            </MenuLink>

            <MenuLink as={NavLink} to="/series" onClick={() => onNav("series")}>
                <TvIcon fontSize="small" />
                Сериалы
            </MenuLink>

            <MenuLink as={NavLink} to="/cartoon" onClick={() => onNav("cartoon")}>
                <AnimationIcon fontSize="small" />
                Мультфильмы
            </MenuLink>
        </>
    );
};