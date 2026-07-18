import styled from "styled-components";

export const Button = styled.button`
    position: fixed;

    right:16px;
    bottom:88px;

    z-index: 1001;

    width: 54px;
    height: 54px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid rgba(255,255,255,.06);
    border-radius: 6px;

    cursor: pointer;

    color: #fff;

    background: rgba(124,92,255,.14);

    backdrop-filter: blur(18px);

    box-shadow:
            0 10px 30px rgba(107,78,255,.28),
            inset 0 0 0 1px rgba(255,255,255,.04);

    transition: .25s;

    svg{
        width:22px;
        height:22px;

        transition:.25s;
    }

    &:hover{
        transform: translateY(-3px);

        background: rgba(124,92,255,.22);

        border-color: rgba(124,92,255,.35);

        box-shadow:
                0 18px 38px rgba(107,78,255,.38);

        svg{
            transform: translateY(-2px);
        }
    }

    &:active{
        transform: scale(.96);
    }
`;