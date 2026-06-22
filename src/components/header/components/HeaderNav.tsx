import {Nav, StyledNavLink} from "../styles/HeaderStyle.tsx";
import {useAppDispatch} from "../../../hooks";
import {setType} from "../../../features/filterSlice/filterSlice.ts";


export const HeaderNav = () => {
    const dispatch = useAppDispatch();

    return (
        <Nav>
            <StyledNavLink
                to="/all"
                onClick={() => dispatch(setType("all"))}
            >
                Все
            </StyledNavLink>

            <StyledNavLink
                to="/movie"
                onClick={() => dispatch(setType("movie"))}
            >
                Фильмы
            </StyledNavLink>

            <StyledNavLink
                to="/series"
                onClick={() => dispatch(setType("series"))}
            >
                Сериалы
            </StyledNavLink>

            <StyledNavLink
                to="/cartoon"
                onClick={() => dispatch(setType("cartoon"))}
            >
                Мультфильмы
            </StyledNavLink>

            <StyledNavLink to="/actors">
                Актеры
            </StyledNavLink>
        </Nav>
    );
};