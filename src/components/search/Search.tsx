import * as React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDebounce} from "../../hooks";
import {
    AllResultsButton,
    Dropdown,
    Info,
    Meta,
    Poster,
    SearchInput,
    Suggestion,
    Title,
    Wrapper
} from "./styles/SearchStyle";
import SearchIcon from "@mui/icons-material/Search";
import {allContent} from "../allContent";

export const Search = () => {
    const [value, setValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const navigate = useNavigate();

    const debouncedValue = useDebounce(value, 300);

    const clearSearch = () => setValue("");

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
    const handleBlur = () => {
        setTimeout(() => setIsFocused(false), 200);
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
                placeholder="Поиск фильмов, сериалов..."
                onFocus={() => setIsFocused(true)}
                onBlur={handleBlur}
            />

            {isFocused && debouncedValue && suggestions.length > 0 && (
                <Dropdown>
                    {suggestions.map((item) => (
                        <Suggestion
                            key={`${item.type}-${item.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                navigate(`/${item.type}/${item.slug}`);
                                clearSearch();
                            }}
                        >
                            <Poster src={item.poster}/>

                            <Info>
                                <Title>{item.title}</Title>

                                <Meta>
                                    <span>{item.year}</span>
                                    <span>•</span>
                                    <span>{item.category}</span>
                                </Meta>
                            </Info>
                        </Suggestion>

                    ))}
                    <AllResultsButton onClick={() => {
                        navigate(`/search?q=${encodeURIComponent(value)}`);
                        clearSearch()
                    }}
                    >
                        Все результаты
                    </AllResultsButton>
                </Dropdown>
            )}
        </Wrapper>
    );
};