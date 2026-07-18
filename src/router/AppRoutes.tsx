import {Navigate, Route, Routes} from "react-router-dom";
import {ROUTES} from "./paths";
import {
    CatalogPage,
    ContentPage,
    FavoritesPage,
    Home,
    NewPage,
    NotFound,
    SearchPage,
    TopPage,
    GenresPage,
    MoviePage,
    GenrePage,
    CountryPage
} from "../pages";


export const AppRoutes = () => (
    <Routes>
        <Route path={ROUTES.DETAILS} element={<MoviePage />} />

        <Route path={ROUTES.HOME} element={<Home/>} />

        <Route path={ROUTES.TYPE} element={<ContentPage />} />

        <Route path={ROUTES.NEW} element={<NewPage />} />
        <Route path={ROUTES.TOP} element={<TopPage />} />

        <Route path={ROUTES.CATALOG} element={<CatalogPage />} />

        <Route path={ROUTES.GENRES} element={<GenresPage />} />
        <Route path={ROUTES.COUNTRY} element={<CountryPage />} />

        <Route path={ROUTES.GENRE} element={<GenrePage />} />

        <Route path={ROUTES.SEARCH} element={<SearchPage />} />
        <Route path={ROUTES.FAVORITES} element={<FavoritesPage />} />

        <Route path={ROUTES.ERROR} element={<NotFound />} />

        <Route path="*" element={<Navigate to={ROUTES.ERROR} replace />} />
    </Routes>
);

