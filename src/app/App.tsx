import {Footer, Header, Main, NavBar, Notification, ScrollToTop} from "../components";
import {ScrollWindowToTop} from "../utils/ScrollWindowToTop.tsx";
import {AppRoutes} from "../router/AppRoutes.tsx";
import {MobileNav} from "../components/header/components/MobileNav.tsx";
import {useState} from "react";
import {MobileMenu} from "../components/header/components/mobileMenu/MobileMenu.tsx";
import {useLockScroll} from "../hooks/useLockScroll.ts";

export const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useLockScroll(isMenuOpen);

    return (
        <>
            <Header onClick={() => setIsMenuOpen(true)}/>
            <MobileMenu
                open={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />
            <MobileNav/>
            <NavBar/>
            <ScrollWindowToTop/>
            <ScrollToTop/>
            <Notification/>
            <Main>
                <AppRoutes/>
            </Main>
            <Footer/>
        </>
    )
}