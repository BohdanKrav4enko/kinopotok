import {
    Actions,
    Auth,
    Bookmarks,
    Container,
    Count, Label,
    Login,
    Logo,
    Nav,
    NavLink,
    Register, SearchContainer,
} from "./styles/HeaderStyle.tsx";
import FavoriteIcon from '@mui/icons-material/Favorite';

import {Search} from "../search/Search.tsx";
import {useAppSelector} from "../../hooks";
import {useEffect, useRef, useState} from "react";

export const Header = () => {
    const favoritesCount = useAppSelector(
        (state) => state.favorites.items.length
    );

    const prevCount = useRef(favoritesCount);
    const [animate, setAnimate] = useState(false);

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
            <Logo to="/">🎬 КиноПоток</Logo>

            <Nav>
                <NavLink to="/videos">Видео</NavLink>
                <NavLink to="/gifs">Гифки</NavLink>
                <NavLink to="/models">Модели</NavLink>
                <NavLink to="/blog">Блог</NavLink>
            </Nav>

            <SearchContainer>
                <Search/>
            </SearchContainer>

            <Actions>
                <Bookmarks to="/favorites">
                    <FavoriteIcon color={'primary'}/> <Label>Избранное</Label>
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