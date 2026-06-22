import { TopBar } from "./styles/MobileMenuStyle";
import { HeaderLogo } from "../HeaderLogo";
import { CloseButton } from "./CloseButton";

type Props = {
    onClose: () => void;
    onLogoClick: () => void;
};

export const MobileMenuTopBar = ({ onClose, onLogoClick }: Props) => {
    return (
        <TopBar>
            <HeaderLogo onClick={onLogoClick} />
            <CloseButton onClick={onClose} />
        </TopBar>
    );
};