import img from "../../../../public/icons.svg";
import {Logo} from "../styles/HeaderStyle.tsx";
import {setType} from "../../../features/filterSlice/filterSlice.ts";
import {useAppDispatch} from "../../../hooks";

export const HeaderLogo = () => {
    const dispatch = useAppDispatch();

    return (
        <Logo
            to="/"
            onClick={() => dispatch(setType("all"))}
        >
            <img src={img} alt="Logo" />
            КиноПоток
        </Logo>
    );
};