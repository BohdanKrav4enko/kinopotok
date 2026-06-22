import {Footer, Header, Main, NavBar, Notification, ScrollToTop} from "../components";
import {ScrollWindowToTop} from "../utils/ScrollWindowToTop.tsx";
import {AppRoutes} from "../router/AppRoutes.tsx";
import {MobileNav} from "../components/header/components/MobileNav.tsx";

export const App = () => {
    return (
        <>
            <Header/>
            <MobileNav />
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