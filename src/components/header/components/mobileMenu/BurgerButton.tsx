import MenuIcon from "@mui/icons-material/Menu";
import type {HeaderButtonProps} from "../../Header.tsx";
import {Burger} from "./styles/MobileMenuStyle.tsx";

export const BurgerButton = ({ onClick }: HeaderButtonProps) => {
    return (
        <Burger onClick={onClick}>
            <MenuIcon />
        </Burger>
    );
};