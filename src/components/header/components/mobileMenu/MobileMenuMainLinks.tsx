import { NavLink } from "react-router-dom";
import { House, Clapperboard, MonitorPlay, Popcorn } from "lucide-react";
import {ROUTES} from "../../../../router/paths.ts";
import {MenuLink} from "./styles/MobileMenuStyle.tsx";



type Props = {
    onNav: (type: string) => void;
};

export const MobileMenuMainLinks = ({ onNav }: Props) => {
    return (
        <>
            <MenuLink as={NavLink} to={ROUTES.HOME} onClick={() => onNav("all")}>
                <House size={18} />
                Главная
            </MenuLink>

            <MenuLink as={NavLink} to="/movie" onClick={() => onNav("movie")}>
                <Clapperboard size={18} />
                Фильмы
            </MenuLink>

            <MenuLink as={NavLink} to="/series" onClick={() => onNav("series")}>
                <MonitorPlay size={18} />
                Сериалы
            </MenuLink>

            <MenuLink as={NavLink} to="/cartoon" onClick={() => onNav("cartoon")}>
                <Popcorn size={18} />
                Мультфильмы
            </MenuLink>
        </>
    );
};