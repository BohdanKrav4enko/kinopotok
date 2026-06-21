import {Footer, Header, Main, NavBar, Notification, ScrollToTop} from "../components";
import {ScrollWindowToTop} from "../utils/ScrollWindowToTop.tsx";
import {AppRoutes} from "../router/AppRoutes.tsx";

export const App = () => {
    return (
        <>
            <Header/>
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