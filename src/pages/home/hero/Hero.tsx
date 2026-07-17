import * as S from "./HeroStyle"
import { Play, Info } from "lucide-react";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../../router/paths.ts";

export const Hero = () => {

    const navigate = useNavigate();

    return (
        <S.HeroWrapper>

            <S.Background />

            <S.HeroContent>

                <S.Title>
                    Смотри любимое
                    <br />
                    кино <span>в отличном<br />качестве</span>
                </S.Title>

                <S.Description>
                    Тысячи фильмов и сериалов на любой вкус.
                    <br />
                    Смотри где угодно и когда угодно.
                </S.Description>

                <S.Buttons>

                    <S.PrimaryButton onClick={()=> navigate(ROUTES.CATALOG)}>
                        <Play size={20} fill="white" />
                        Смотреть сейчас
                    </S.PrimaryButton>

                    <S.SecondaryButton>
                        <Info size={20} />
                        Подробнее
                    </S.SecondaryButton>

                </S.Buttons>

            </S.HeroContent>

        </S.HeroWrapper>
    );
};