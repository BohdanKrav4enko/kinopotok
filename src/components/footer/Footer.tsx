import * as S from "./styles/FooterStyle.tsx";
import {ROUTES} from "../../router/paths.ts";
import {HeaderLogo} from "../header/components/HeaderLogo.tsx";
import {useNavigate} from "react-router-dom";

export const Footer = () => {

    const navigate = useNavigate();

    return (
        <S.Footer>
            <S.Container>
                <S.Top>
                    <S.Brand>
                        <HeaderLogo onClick={() => navigate(ROUTES.HOME)} />

                        <S.Description>
                            Смотри любимые фильмы и сериалы
                            в отличном качестве. Тысячи
                            фильмов на любой вкус.
                        </S.Description>
                    </S.Brand>

                    <S.Column>
                        <S.ColumnTitle>Навигация</S.ColumnTitle>

                        <S.FooterLink to={ROUTES.HOME}>Главная</S.FooterLink>
                        <S.FooterLink to={"/movie"}>Фильмы</S.FooterLink>
                        <S.FooterLink to={"/series"}>Сериалы</S.FooterLink>
                        <S.FooterLink to={"/cartoon"}>Мультфильмы</S.FooterLink>
                    </S.Column>

                    <S.Column>
                        <S.ColumnTitle>Категории</S.ColumnTitle>

                        <S.FooterLink to={ROUTES.TOP}>Популярное</S.FooterLink>
                        <S.FooterLink to={ROUTES.NEW}>Новинки</S.FooterLink>
                        <S.FooterLink to={ROUTES.NEW}>Скоро в кино</S.FooterLink>
                        <S.FooterLink to={ROUTES.CATALOG}>Каталог</S.FooterLink>
                    </S.Column>

                    <S.Column>
                        <S.ColumnTitle>Поддержка</S.ColumnTitle>

                        <S.FooterLink to={"#"}>Помощь</S.FooterLink>
                        <S.FooterLink to={"#"}>FAQ</S.FooterLink>
                        <S.FooterLink to={"#"}>Обратная связь</S.FooterLink>
                        <S.FooterLink to={"#"}>Правила сайта</S.FooterLink>
                    </S.Column>
                </S.Top>

                <S.Bottom>
                    <S.Copyright>
                        © 2026 KinoPotok. Все права защищены.
                    </S.Copyright>

                    <S.BottomLinks>
                        <S.BottomLink to={"#"}>Политика конфиденциальности</S.BottomLink>
                        <S.BottomLink to={"#"}>Пользовательское соглашение</S.BottomLink>
                    </S.BottomLinks>

                </S.Bottom>
            </S.Container>
        </S.Footer>
    );
};

