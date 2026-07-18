import {Button} from "./styles/ScrollToTopStyle.tsx";
import {useScrollTop} from "../../hooks/useScrollTop.ts";
import {ChevronUp} from "lucide-react";


export const ScrollToTop = () => {
    const { visible, scrollToTop } = useScrollTop();

    if (!visible) return null;

    return (
        <Button onClick={scrollToTop}>
            <ChevronUp size={24} strokeWidth={2.5} />
        </Button>
    );
};