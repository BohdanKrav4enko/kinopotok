import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Bar = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    z-index: 1000;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: clamp(8px, 3vw, 36px);

    padding: 10px 16px calc(10px + env(safe-area-inset-bottom));

    background: rgba(6, 10, 20, 0.82);

    backdrop-filter: blur(22px);
    -webkit-backdrop-filter: blur(22px);

    border-top: 1px solid rgba(255, 255, 255, 0.08);

    box-shadow:
            0 -12px 40px rgba(0, 0, 0, 0.4),
            inset 0 1px rgba(255, 255, 255, 0.04);

    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        pointer-events: none;

        background: linear-gradient(
                0deg,
                rgba(41, 121, 255, 0.08),
                transparent 45%
        );
    }

    @media (max-width: 768px) {
        padding: 10px 14px calc(10px + env(safe-area-inset-bottom));
    }

    @media (max-width: 480px) {
        gap: 8px;
        padding: 8px 10px calc(8px + env(safe-area-inset-bottom));
    }
`;

export const NavButton = styled(NavLink)`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 5px;

    min-width: 68px;

    padding: 8px 12px;

    border-radius: 14px;

    text-decoration: none;

    color: #8b93a7;

    font-size: 12px;
    font-weight: 600;

    transition: .25s;

    svg{
        width:22px;
        height:22px;

        transition:.25s;
    }

    &:hover{
        color:white;

        background:rgba(255,255,255,.04);
    }

    &:hover svg{
        transform:translateY(-2px);
    }

    &.active{
        color:#7c5cff;

        background:rgba(124,92,255,.12);

        box-shadow:inset 0 0 0 1px rgba(124,92,255,.25);
    }

    &.active svg{
        transform:scale(1.1);
    }

    &:active{
        transform:scale(.96);
    }
`;

export const Count = styled.span<{ $animate?: boolean }>`
    position:absolute;

    top:4px;
    right:10px;

    min-width:18px;
    height:18px;

    padding:0 5px;

    display:flex;
    align-items:center;
    justify-content:center;

    border-radius:999px;

    background:linear-gradient(
            135deg,
            #8b5cf6,
            #6b4eff
    );

    color:white;

    font-size:10px;
    font-weight:700;

    border:2px solid #050817;

    box-shadow:0 6px 18px rgba(107,78,255,.45);

    transform:scale(${({ $animate }) => ($animate ? 1.2 : 1)});

    transition:transform .2s;
`;