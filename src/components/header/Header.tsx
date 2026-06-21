import {
    Actions,
    Auth,
    Bookmarks,
    Container,
    Count,
    Label,
    Login,
    Logo,
    Nav,
    Register,
    SearchContainer,
    StyledFavoriteIcon,
    StyledNavLink,
} from "./styles/HeaderStyle.tsx";
import img from '../../../public/icons.svg'
import {Search} from "../search/Search.tsx";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useEffect, useRef, useState} from "react";
import {setType} from "../../features/filterSlice/filterSlice.ts";

export const Header = () => {
    const favoritesCount = useAppSelector(
        (state) => state.favorites.items.length
    );
    const prevCount = useRef(favoritesCount);
    const [animate, setAnimate] = useState(false);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (favoritesCount !== prevCount.current) {
            setAnimate(true);

            const t = setTimeout(() => setAnimate(false), 400);
            return () => clearTimeout(t);
        }

        prevCount.current = favoritesCount;
    }, [favoritesCount]);

    return (
        <Container>
            <Logo onClick={() => dispatch(setType('all'))} to="/"><img src={img} alt={"Logo"}/> КиноПоток</Logo>

            <Nav>
                <StyledNavLink onClick={() => dispatch(setType('all'))} to="/all">Все</StyledNavLink>
                <StyledNavLink onClick={() => dispatch(setType('movie'))} to="/movie">Фильмы</StyledNavLink>
                <StyledNavLink onClick={() => dispatch(setType('series'))} to="/series">Сериалы</StyledNavLink>
                <StyledNavLink onClick={() => dispatch(setType('cartoon'))} to="/cartoon">Мультфильмы</StyledNavLink>
                <StyledNavLink to="/actors">Актеры</StyledNavLink>
            </Nav>

            <SearchContainer>
                <Search/>
            </SearchContainer>

            <Actions>
                <Bookmarks to="/favorites">
                    <StyledFavoriteIcon color={'primary'}/> <Label>Избранное</Label>
                    {favoritesCount > 0 &&
                        <Count $animate={animate}>
                            {favoritesCount}
                        </Count>
                    }
                </Bookmarks>

                <Auth>
                    <Login to="/login">Вход</Login>
                    <Register to="/register">Регистрация</Register>
                </Auth>
            </Actions>
        </Container>
    );
};