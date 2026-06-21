import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import {Empty} from "../pages/categoriesPage/categoryPage/styles/CategoryPageStyle.tsx";

export const EmptyMessage = () => {
    return (

        <Empty>
            Здесь пока ничего нет, но это всегда можно исправить <SentimentSatisfiedAltIcon />
        </Empty>
    );
};

