import img from "../../../../public/logo.webp";
import {Logo} from "../styles/HeaderStyle.tsx";

type Props = {
    onClick: () => void;
}

export const HeaderLogo = ({onClick}: Props) => {

    return (
        <Logo
            to="/"
            onClick={onClick}
        >
            <img src={img} alt="Logo" />
            КиноПоток
        </Logo>
    );
};