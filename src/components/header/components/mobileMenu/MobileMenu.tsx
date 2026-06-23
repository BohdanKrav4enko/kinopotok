import { useNavigate } from "react-router-dom";

import { Overlay, Panel, MenuGroup } from "./styles/MobileMenuStyle";

import { MobileMenuTopBar } from "./MobileMenuTopBar";
import { MobileMenuAuth } from "./MobileMenuAuth";
import { MobileMenuQuickLinks } from "./MobileMenuQuickLinks";
import { MobileMenuMainLinks } from "./MobileMenuMainLinks";
import { MobileMenuFooter } from "./MobileMenuFooter";

type Props = {
    open: boolean;
    onClose: () => void;
};

export const MobileMenu = ({ open, onClose }: Props) => {
    const navigate = useNavigate();

    const handleNav = (path: string) => {
        navigate(path);
        onClose();
    };

    const handleLogo = () => {
        navigate("/all");
        onClose();
    };

    return (
        <>
            <Overlay $open={open} onClick={onClose} />

            <Panel $open={open}>
                <MobileMenuTopBar
                    onClose={onClose}
                    onLogoClick={handleLogo}
                />

                <MenuGroup>
                    <MobileMenuAuth />
                    <MobileMenuQuickLinks onClose={onClose} />
                </MenuGroup>

                <MenuGroup>
                    <MobileMenuMainLinks onNav={handleNav} />
                </MenuGroup>

                <MobileMenuFooter />
            </Panel>
        </>
    );
};