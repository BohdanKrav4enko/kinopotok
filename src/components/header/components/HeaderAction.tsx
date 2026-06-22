import {Actions, Auth, Login, Register} from "../styles/HeaderStyle";

export const HeaderActions = () => {


    return (
        <Actions>
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