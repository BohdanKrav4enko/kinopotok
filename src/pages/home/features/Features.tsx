import * as S from "./FeaturesStyle";
import {
    Clapperboard,
    BadgeCheck,
    ShieldCheck,
    MonitorPlay,
} from "lucide-react";

const items = [
    {
        icon: Clapperboard,
        title: "Большая библиотека",
        text: "Тысячи фильмов и сериалов",
    },
    {
        icon: BadgeCheck,
        title: "Высокое качество",
        text: "HD, Full HD и 4K",
    },
    {
        icon: ShieldCheck,
        title: "Без рекламы",
        text: "Ничто не прервет просмотр",
    },
    {
        icon: MonitorPlay,
        title: "Смотри везде",
        text: "На любом устройстве",
    },
];

export const Features = () => {
    return (
        <S.Wrapper>
            {items.map((item) => {
                const Icon = item.icon;

                return (
                    <S.Item key={item.title}>
                        <S.Icon>
                            <Icon size={44} strokeWidth={2} />
                        </S.Icon>

                        <div>
                            <S.Title>{item.title}</S.Title>
                            <S.Text>{item.text}</S.Text>
                        </div>
                    </S.Item>
                );
            })}
        </S.Wrapper>
    );
};