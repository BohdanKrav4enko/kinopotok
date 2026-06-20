import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import * as React from "react";
import { useDebounce } from "../../hooks";
import { SearchInput, Wrapper, Dropdown, Suggestion } from "./styles/SearchStyle";
import SearchIcon from '@mui/icons-material/Search';
import {movies} from "../movies.tsx";

export const Search = () => {
    const [value, setValue] = useState("");
    const navigate = useNavigate();

    const debouncedValue = useDebounce(value, 300);
    const clearSearch = () => setValue("");

    const location = useLocation();

    useEffect(() => {
        setValue("");
    }, [location.pathname]);

    const suggestions = debouncedValue
        ? movies
            .filter((m) =>
                m.title.toLowerCase().includes(debouncedValue.toLowerCase())
            )
            .slice(0, 5)
        : [];

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && value.trim()) {
            navigate(`/search?q=${encodeURIComponent(value)}`);
            clearSearch()
        }
    };

    return (
        <Wrapper>
            <SearchIcon/>
            <SearchInput
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Поиск фильмов..."
            />

            {debouncedValue && suggestions.length > 0 && (
                <Dropdown>
                    {suggestions.map((movie) => (
                        <Suggestion
                            key={movie.id}
                            onClick={() => {
                                navigate(`/movie/${movie.slug}`);
                                clearSearch();
                            }}
                        >
                           {movie.title}
                        </Suggestion>
                    ))}
                </Dropdown>
            )}
        </Wrapper>
    );
};