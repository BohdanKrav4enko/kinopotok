import { Film } from "lucide-react";
import * as S from "./style/EmptyMessageStyle";
import * as React from "react";

type EmptyMessageProps = {
    title: string;
    subtitle?: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
};

export const EmptyMessage = ({
                                 title,
                                 subtitle,
                                 icon = <Film size={64} />,
                                 children,
                             }: EmptyMessageProps) => {
    return (
        <S.Wrapper>
            <S.Icon>{icon}</S.Icon>

            <S.Title>{title}</S.Title>

            {subtitle && (
                <S.Subtitle>{subtitle}</S.Subtitle>
            )}

            {children}
        </S.Wrapper>
    );
};