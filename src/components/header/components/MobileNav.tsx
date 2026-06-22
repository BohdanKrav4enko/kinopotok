import {useAppDispatch} from "../../../hooks";
import {setType} from "../../../features/filterSlice/filterSlice";

import {MobileNavLink, MobileNavWrapper,} from "../styles/HeaderStyle.tsx";

export const MobileNav = () => {
    const dispatch = useAppDispatch();

    return (
        <MobileNavWrapper>
            <MobileNavLink
                to="/all"
                onClick={() => dispatch(setType("all"))}
            >
                Все
            </MobileNavLink>

            <MobileNavLink
                to="/movie"
                onClick={() => dispatch(setType("movie"))}
            >
                Фильмы
            </MobileNavLink>

            <MobileNavLink
                to="/series"
                onClick={() => dispatch(setType("series"))}
            >
                Сериалы
            </MobileNavLink>

            <MobileNavLink
                to="/cartoon"
                onClick={() => dispatch(setType("cartoon"))}
            >
                Мультики
            </MobileNavLink>
        </MobileNavWrapper>
    );
};