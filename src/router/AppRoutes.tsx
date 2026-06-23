import {Navigate, Route, Routes} from "react-router-dom";
import {ROUTES} from "./paths";
import {
    CategoriesPage,
    CategoryPage,
    ContentPage,
    FavoritesPage,
    NewPage,
    NotFound,
    SearchPage,
    TopPage
} from "../pages";
import {MoviePage} from "../components";

export const AppRoutes = () => (
    <Routes>
        <Route path={ROUTES.DETAILS} element={<MoviePage />} />

        <Route path={ROUTES.HOME} element={<Navigate to="/all" />} />

        <Route path={ROUTES.TYPE} element={<ContentPage />} />

        <Route path={ROUTES.NEW} element={<NewPage />} />
        <Route path={ROUTES.TOP} element={<TopPage />} />

        <Route path={ROUTES.CATEGORIES} element={<CategoriesPage />} />
        <Route path={ROUTES.CATEGORY} element={<CategoryPage />} />

        <Route path={ROUTES.SEARCH} element={<SearchPage />} />
        <Route path={ROUTES.FAVORITES} element={<FavoritesPage />} />

        <Route path={ROUTES.ERROR} element={<NotFound />} />

        <Route path="*" element={<Navigate to={ROUTES.ERROR} replace />} />
    </Routes>
);

