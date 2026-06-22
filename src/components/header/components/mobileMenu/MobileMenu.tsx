import {setType} from "../../../../features/filterSlice/filterSlice.ts";
import {useAppDispatch} from "../../../../hooks";
import {NavLink} from "react-router-dom";
import {
    MenuFooter,
    MenuGroup,
    MenuHeader,
    MenuLink,
    Overlay,
    Panel,
    PrimaryButton,
    SecondaryButton,
} from "./styles/MobileMenuStyle.tsx";
import {CloseButton} from "./CloseButton.tsx";
import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import TvIcon from "@mui/icons-material/Tv";
import AnimationIcon from "@mui/icons-material/Animation";
import CategoryIcon from "@mui/icons-material/Category";
import FavoriteIcon from "@mui/icons-material/Favorite";

type MobileMenuProps = {
    open: boolean;
    onClose: () => void;
};

export const MobileMenu = ({open, onClose}: MobileMenuProps) => {
    const dispatch = useAppDispatch();

    const handleNav = (type: any) => {
        dispatch(setType(type));
        onClose();
    };

    return (
        <>
            <Overlay $open={open} onClick={onClose}/>

            <Panel $open={open}>
                <CloseButton onClick={onClose}/>

                <MenuGroup>
                    <MenuHeader>
                        <PrimaryButton>Вход</PrimaryButton>
                        <SecondaryButton>Регистрация</SecondaryButton>
                    </MenuHeader>

                    <MenuLink as={NavLink} to="/categories" onClick={onClose}>
                        <CategoryIcon fontSize="small"/>
                        Категории
                    </MenuLink>

                    <MenuLink as={NavLink} to="/favorites" onClick={onClose}>
                        <FavoriteIcon fontSize="small"/>
                        Избранное
                    </MenuLink>
                </MenuGroup>
                <MenuGroup>
                    <MenuLink as={NavLink} to="/all" onClick={() => handleNav("all")}>
                        <HomeIcon fontSize="small"/>
                        Всё
                    </MenuLink>

                    <MenuLink as={NavLink} to="/movie" onClick={() => handleNav("movie")}>
                        <MovieIcon fontSize="small"/>
                        Фильмы
                    </MenuLink>

                    <MenuLink as={NavLink} to="/series" onClick={() => handleNav("series")}>
                        <TvIcon fontSize="small"/>
                        Сериалы
                    </MenuLink>

                    <MenuLink as={NavLink} to="/cartoon" onClick={() => handleNav("cartoon")}>
                        <AnimationIcon fontSize="small"/>
                        Мультфильмы
                    </MenuLink>
                </MenuGroup>

                <MenuFooter>
                    KinoFlow © 2026
                </MenuFooter>
            </Panel>
        </>
    );
};