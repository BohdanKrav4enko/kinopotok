import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

import * as S from "./FilterDropdownStyle";

type Props = {
    label: string;
    value: string;
    options: string[];
    onChange: (value: string) => void;
};

export const FilterDropdown = ({
                                   label,
                                   value,
                                   options,
                                   onChange,
                               }: Props) => {
    const [open, setOpen] = useState(false);

    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };
    }, []);

    const handleSelect = (option: string) => {
        onChange(option);
        setOpen(false);
    };

    return (
        <S.Wrapper ref={wrapperRef}>
            <S.Trigger onClick={() => setOpen(prev => !prev)}>
                <span>
                    {value || label}
                </span>

                <S.Icon $open={open}>
                    <ChevronDown size={18} />
                </S.Icon>
            </S.Trigger>

            {open && (
                <S.Dropdown>
                    {label !== "Сортировка" &&
                        <S.Option
                            onClick={() => handleSelect("")}
                        >
                            Все
                        </S.Option>

                    }

                    {options.map(option => (
                        <S.Option
                            key={option}
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </S.Option>
                    ))}
                </S.Dropdown>
            )}
        </S.Wrapper>
    );
};