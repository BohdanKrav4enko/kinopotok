import {ChevronDown} from "lucide-react";
import * as S from "./FilterSelectStyle"

type Props = {
    label: string;
    value?: string;
    onClick?: () => void;
};

export const FilterSelect = ({
                                 label,
                                 value,
                                 onClick,
                             }: Props) => {
    return (
        <S.Container onClick={onClick}>
            <span>
                {label}
                {value && `: ${value}`}
            </span>

            <ChevronDown size={18}/>
        </S.Container>
    );
};