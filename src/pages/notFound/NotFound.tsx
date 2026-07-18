import { useNavigate } from "react-router-dom";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import * as S from "./styles/NotFoundStyle";

export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <S.Wrapper>
            <S.Card>
                <S.Label>Ошибка</S.Label>

                <S.Icon>
                    <SentimentVeryDissatisfiedIcon />
                </S.Icon>

                <S.Title>404</S.Title>

                <S.Text>
                    Похоже, эта страница исчезла из каталога.
                    Но тысячи отличных фильмов уже ждут вас на главной.
                </S.Text>

                <S.Button onClick={() => navigate("/")}>
                    Вернуться на главную
                </S.Button>
            </S.Card>
        </S.Wrapper>
    );
};