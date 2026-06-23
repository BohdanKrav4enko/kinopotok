import { NavLink, useLocation } from "react-router-dom";
import { MenuLink } from "./styles/MobileMenuStyle";
import CategoryIcon from "@mui/icons-material/Category";
import FavoriteIcon from "@mui/icons-material/Favorite";

type Props = {
    onClose: () => void;
};

const getTypeFromPath = (path: string) => {
    const value = path.split("/")[1];

    if (value === "movie" || value === "series" || value === "cartoon") {
        return value;
    }

    return "movie";
};

export const MobileMenuQuickLinks = ({ onClose }: Props) => {
    const location = useLocation();

    const type = getTypeFromPath(location.pathname);

    return (
        <>
            <MenuLink
                as={NavLink}
                to={`/${type}/categories`}
                onClick={onClose}
            >
                <CategoryIcon fontSize="small" />
                Категории
            </MenuLink>

            <MenuLink
                as={NavLink}
                to="/favorites"
                onClick={onClose}
            >
                <FavoriteIcon fontSize="small" />
                Избранное
            </MenuLink>
        </>
    );
};