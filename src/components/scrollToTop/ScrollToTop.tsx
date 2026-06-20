import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {Button} from "./styles/ScrollToTopStyle.tsx";
import {useScrollTop} from "../../hooks/useScrollTop.ts";


export const ScrollToTop = () => {
    const { visible, scrollToTop } = useScrollTop();

    if (!visible) return null;

    return (
        <Button onClick={scrollToTop}>
            <KeyboardArrowUpIcon />
        </Button>
    );
};