import {ToggleButton, ToggleWrapper} from "./styles/ViewToggleStyle.tsx";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";

type Props = {
    viewMode: "grid" | "list";
    setViewMode: (mode: "grid" | "list") => void;
};

export const ViewToggle = ({viewMode, setViewMode}: Props) => {
    return (
        <ToggleWrapper>
            <div/>

            <div className="controls">
                <ToggleButton
                    $active={viewMode === "list"}
                    onClick={() => setViewMode("list")}
                >
                    <ViewListIcon/>
                </ToggleButton>

                <ToggleButton
                    $active={viewMode === "grid"}
                    onClick={() => setViewMode("grid")}
                >
                    <GridViewIcon/>
                </ToggleButton>
            </div>
        </ToggleWrapper>
    );
};