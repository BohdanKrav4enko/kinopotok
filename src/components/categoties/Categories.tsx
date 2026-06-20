import {Chip, Wrapper} from "./styles/CategoriesStyle.tsx";
import {categoriesList} from "../categoriesList.tsx";

export const Categories = () => {
    return (
        <Wrapper>
            {categoriesList.map((cat, i) => (
                <Chip key={i} to={`/category/${encodeURIComponent(cat)}`}>
                    {cat}
                </Chip>
            ))}
        </Wrapper>
    );
};