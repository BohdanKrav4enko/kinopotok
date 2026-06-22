import type {HeaderButtonProps} from "../../Header.tsx";
import CloseIcon from '@mui/icons-material/Close';
import {CloseBtn} from "./styles/MobileMenuStyle.tsx";

export const CloseButton = ({onClick}: HeaderButtonProps) => {
    return (
        <CloseBtn onClick={onClick}>
            <CloseIcon/>
        </CloseBtn>
    );
};