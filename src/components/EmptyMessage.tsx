import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import {Empty} from "../pages/searchPage/styles/SearchPageStyle.ts";

export const EmptyMessage = () => {
    return (
        <Empty>
            Здесь пока ничего нет, но это всегда можно исправить <SentimentSatisfiedAltIcon />
        </Empty>
    );
};

