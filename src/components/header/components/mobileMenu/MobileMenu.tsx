import { useAppDispatch } from "../../../../hooks";
import { setType } from "../../../../features/filterSlice/filterSlice";

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
    const dispatch = useAppDispatch();

    const handleNav = (type: any) => {
        dispatch(setType(type));
        onClose();
    };

    const handleLogo = () => {
        dispatch(setType("all"));
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