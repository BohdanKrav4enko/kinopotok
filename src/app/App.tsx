import {Navigate, Route, Routes} from "react-router-dom";
import {NavBar, Footer, Header, Main, MoviePage, Notification, ScrollToTop} from "../components";
import {CategoriesPage, CategoryPage, FavoritesPage, MoviesPage, NotFound, SearchPage} from "../pages";
import {ScrollWindowToTop} from "../utils/ScrollWindowToTop.tsx";

export const App = () => {
    return (
        <>
            <Header/>
            <NavBar/>
            <ScrollWindowToTop/>
            <ScrollToTop/>
            <Notification/>
            <Main>
                <Routes>
                    <Route path="/" element={<MoviesPage/>}/>
                    <Route path="/movie/:slug" element={<MoviePage/>}/>
                    <Route path="/categories" element={<CategoriesPage/>}/>
                    <Route path="/category/:name" element={<CategoryPage/>}/>
                    <Route path="/search" element={<SearchPage/>}/>
                    <Route path="/favorites" element={<FavoritesPage/>}/>
                    <Route path="/not-found" element={<NotFound />} />
                    <Route path="*" element={<Navigate to="/not-found" replace />} />
                </Routes>
            </Main>
            <Footer/>
        </>
    )
}