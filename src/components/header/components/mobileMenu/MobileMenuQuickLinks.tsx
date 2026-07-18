import {NavLink} from "react-router-dom";
import {MenuLink} from "./styles/MobileMenuStyle";
import {ROUTES} from "../../../../router/paths.ts";
import {Grid2X2, Heart} from "lucide-react";

type Props = {
    onClose: () => void;
};

export const MobileMenuQuickLinks = ({ onClose }: Props) => {

    return (
        <>
            <MenuLink
                as={NavLink}
                to={ROUTES.CATALOG}
                onClick={onClose}
            >
                <Grid2X2 size={20}/>
                Каталог
            </MenuLink>

            <MenuLink
                as={NavLink}
                to="/favorites"
                onClick={onClose}
            >
                <Heart
                    size={20}
                />
                Избранное
            </MenuLink>
        </>
    );
};