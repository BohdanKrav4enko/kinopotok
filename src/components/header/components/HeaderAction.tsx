import {Actions, Auth, Bookmarks, Count, Label, Login, Register, StyledFavoriteIcon,} from "../styles/HeaderStyle";
import {useFavoritesAnimation} from "../../../hooks/useFavoritesAnimation.ts";

export const HeaderActions = () => {
    const { favoritesCount, animate } = useFavoritesAnimation();


    return (
        <Actions>
            <Bookmarks to="/favorites">
                <StyledFavoriteIcon color="primary" />

                <Label>Избранное</Label>

                {favoritesCount > 0 && (
                    <Count $animate={animate}>
                        {favoritesCount}
                    </Count>
                )}
            </Bookmarks>

            <Auth>
                <Login to="/login">
                    Вход
                </Login>

                <Register to="/register">
                    Регистрация
                </Register>
            </Auth>
        </Actions>
    );
};