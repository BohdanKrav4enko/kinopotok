import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import * as React from "react";
import {useDebounce} from "../../hooks";
import {SearchInput, Wrapper, Dropdown, Suggestion} from "./styles/SearchStyle";
import SearchIcon from "@mui/icons-material/Search";
import {allContent} from "../allContent";

export const Search = () => {
    const [value, setValue] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const debouncedValue = useDebounce(value, 300);

    const clearSearch = () => setValue("");

    useEffect(() => {
        setValue("");
    }, [location.pathname]);

    const suggestions = debouncedValue
        ? allContent
            .filter((item) =>
                item.title
                    .toLowerCase()
                    .includes(debouncedValue.toLowerCase())
            )
            .slice(0, 5)
        : [];

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && value.trim()) {
            navigate(`/search?q=${encodeURIComponent(value)}`);
            clearSearch();
        }
    };

    return (
        <Wrapper>
            <SearchIcon style={{cursor: 'pointer'}} onClick={() => {
                navigate(`/search?q=${encodeURIComponent(value)}`);
                clearSearch();
            }}/>

            <SearchInput
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Поиск..."
            />

            {debouncedValue && suggestions.length > 0 && (
                <Dropdown>
                    {suggestions.map((item) => (
                        <Suggestion
                            key={`${item.type}-${item.id}`}
                            onClick={() => {
                                navigate(`/${item.type}/${item.slug}`);
                                clearSearch();
                            }}
                        >
                            {item.title}
                        </Suggestion>
                    ))}
                </Dropdown>
            )}
        </Wrapper>
    );
};