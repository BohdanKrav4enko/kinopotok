import {LayoutGrid, Rows3} from "lucide-react";
import * as S from "./styles/ViewToggleStyle";

type Props = {
    viewMode: "grid" | "list";
    setViewMode: (mode: "grid" | "list") => void;
};

export const ViewToggle = ({ viewMode, setViewMode }: Props) => {
    return (
        <S.ToggleWrapper>
            <S.GridButton
                $active={viewMode === "grid"}
                onClick={() => setViewMode("grid")}
            >
                <LayoutGrid size={20} />
            </S.GridButton>

            <S.ListButton
                $active={viewMode === "list"}
                onClick={() => setViewMode("list")}
            >
                <Rows3 size={20} />
            </S.ListButton>
        </S.ToggleWrapper>
    );
};