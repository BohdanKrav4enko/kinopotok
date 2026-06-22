import { MenuHeader, PrimaryButton, SecondaryButton } from "./styles/MobileMenuStyle";

export const MobileMenuAuth = () => {
    return (
        <MenuHeader>
            <PrimaryButton>Вход</PrimaryButton>
            <SecondaryButton>Регистрация</SecondaryButton>
        </MenuHeader>
    );
};