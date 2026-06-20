import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import {Empty} from "../pages/searchPage/styles/SearchPageStyle.ts";

export const EmptyMessage = () => {
    return (
        <Empty>
            Ничего не найдено <SentimentVeryDissatisfiedIcon/>
        </Empty>
    );
};

