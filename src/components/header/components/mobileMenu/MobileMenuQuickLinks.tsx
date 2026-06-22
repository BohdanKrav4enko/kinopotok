import { NavLink } from "react-router-dom";
import { MenuLink } from "./styles/MobileMenuStyle";
import CategoryIcon from "@mui/icons-material/Category";
import FavoriteIcon from "@mui/icons-material/Favorite";

type Props = {
    onClose: () => void;
};

export const MobileMenuQuickLinks = ({ onClose }: Props) => {
    return (
        <>
            <MenuLink as={NavLink} to="/categories" onClick={onClose}>
                <CategoryIcon fontSize="small" />
                Категории
            </MenuLink>

            <MenuLink as={NavLink} to="/favorites" onClick={onClose}>
                <FavoriteIcon fontSize="small" />
                Избранное
            </MenuLink>
        </>
    );
};