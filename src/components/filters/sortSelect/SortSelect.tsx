import {FilterDropdown} from "../filterDropdown/FilterDropdown.tsx";

type Props = {
    value: string;
    onChange: (value: string) => void;
};

const options = [
    {
        label: "Популярные",
        value: "popular",
    },
    {
        label: "По рейтингу",
        value: "rating",
    },
    {
        label: "Сначала новые",
        value: "year_desc",
    },
    {
        label: "Сначала старые",
        value: "year_asc",
    },
];

export const SortSelect = ({
                               value,
                               onChange,
                           }: Props) => {

    const currentLabel =
        options.find(
            option => option.value === value
        )?.label || "Сортировка";

    return (
        <FilterDropdown
            label="Сортировка"
            value={currentLabel}
            options={options.map(option => option.label)}
            onChange={(label) => {
                const selected =
                    options.find(
                        option => option.label === label
                    );

                if (selected) {
                    onChange(selected.value);
                }
            }}
        />
    );
};