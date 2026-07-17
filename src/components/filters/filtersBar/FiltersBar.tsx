import { useState } from "react";
import { Filter } from "lucide-react";
import * as S from "./FiltersBarStyle";

import { FilterDropdown } from "../filterDropdown/FilterDropdown";
import { SortSelect } from "../sortSelect/SortSelect";
import { ViewToggle } from "../../viewToggle/ViewToggle";

import type { FiltersProps } from "../type";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {setFilter, setSortBy} from "../../../features/catalog/catalogSlice.ts";
import {setMoviesViewMode} from "../../../features/preferences/preferencesSlice.ts";

export const FiltersBar = ({genres, countries, years, ratings,}: FiltersProps) => {
    const [filtersOpen, setFiltersOpen] = useState(false);

    const dispatch = useAppDispatch();
    const filters = useAppSelector(state => state.catalog.filters);
    const viewMode = useAppSelector(state => state.preferences.moviesViewMode);
    const sortBy = useAppSelector(state => state.catalog.sortBy);

    return (
        <>
            <S.Container>

                <S.Filters>
                    <FilterDropdown
                        label="Жанры"
                        value={filters.genre}
                        options={genres}
                        onChange={(value) =>
                            dispatch(setFilter({
                                key: "genre",
                                value,
                            }))
                        }
                    />

                    <FilterDropdown
                        label="Страны"
                        value={filters.country}
                        options={countries}
                        onChange={(value) =>
                            dispatch(setFilter({
                                key: "country",
                                value,
                            }))
                        }
                    />

                    <FilterDropdown
                        label="Год выпуска"
                        value={filters.year}
                        options={years}
                        onChange={(value) =>
                            dispatch(setFilter({
                                key: "year",
                                value,
                            }))
                        }
                    />

                    <FilterDropdown
                        label="Рейтинг"
                        value={filters.rating}
                        options={ratings}
                        onChange={(value) =>
                            dispatch(setFilter({
                                key: "rating",
                                value,
                            }))
                        }
                    />
                </S.Filters>

                <S.Actions>

                    <S.MobileFiltersButton
                        onClick={() => setFiltersOpen(true)}
                    >
                        <Filter size={20} />
                    </S.MobileFiltersButton>

                    <SortSelect
                        value={sortBy}
                        onChange={(value) =>
                            dispatch(setSortBy(value))
                        }
                    />

                    <ViewToggle
                        viewMode={viewMode}
                        setViewMode={(mode)=>{
                            dispatch(setMoviesViewMode(mode))
                        }}
                    />
                </S.Actions>

            </S.Container>

            {filtersOpen && (
                <>
                    <S.FiltersBackdrop
                        onClick={() => setFiltersOpen(false)}
                    />

                    <S.FiltersModal>

                        <S.ModalTitle>
                            Фильтры
                        </S.ModalTitle>

                        <FilterDropdown
                            label="Жанры"
                            value={filters.genre}
                            options={genres}
                            onChange={(value) =>
                                dispatch(setFilter({
                                    key: "genre",
                                    value,
                                }))
                            }
                        />

                        <FilterDropdown
                            label="Страны"
                            value={filters.country}
                            options={countries}
                            onChange={(value) =>
                                dispatch(setFilter({
                                    key: "country",
                                    value,
                                }))
                            }
                        />

                        <FilterDropdown
                            label="Год выпуска"
                            value={filters.year}
                            options={years}
                            onChange={(value) =>
                                dispatch(setFilter({
                                    key: "year",
                                    value,
                                }))
                            }
                        />

                        <FilterDropdown
                            label="Рейтинг"
                            value={filters.rating}
                            options={ratings}
                            onChange={(value) =>
                                dispatch(setFilter({
                                    key: "rating",
                                    value,
                                }))
                            }
                        />

                        <S.CloseButton
                            onClick={() => setFiltersOpen(false)}
                        >
                            Применить
                        </S.CloseButton>

                    </S.FiltersModal>
                </>
            )}
        </>
    );
};