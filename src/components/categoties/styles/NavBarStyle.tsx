import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Bar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    padding: 12px 16px;

    background: rgba(255, 255, 255, 0.02);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);

    backdrop-filter: blur(12px);

    @media (max-width: 1150px) {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;

        justify-content: space-around;

        border-bottom: none;
        border-top: 1px solid rgba(255, 255, 255, 0.08);

        z-index: 1000;
    }
`;
export const NavButton = styled(NavLink)<{ $active?: boolean }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;

    gap: 8px;

    padding: 10px 14px;

    border-radius: 12px;

    font-size: 0.95rem;
    font-weight: 600;

    cursor: pointer;

    white-space: nowrap;

    transition: all 0.2s ease;

    color: ${({ $active }) => ($active ? "#60a5fa" : "#cbd5e1")};

    background: ${({ $active }) =>
            $active ? "rgba(59, 130, 246, 0.15)" : "transparent"};

    border: 1px solid transparent;

    svg {
        font-size: 22px;
    }

    &:hover {
        transform: translateY(-2px);
    }

    &:active {
        transform: scale(0.95);
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 2px;

        font-size: 0.7rem;
        padding: 6px 10px;

        min-width: 60px;
    }
    svg{
        width:20px;
        height:20px;

        transition:.25s;
    }

    &:hover svg{
        transform:scale(1.15);
    }
`;
export const Count = styled.span<{ $animate?: boolean }>`
    position: absolute;
    top: -6px;
    right: -6px;

    min-width: 18px;
    height: 18px;
    padding: 0 5px;

    border-radius: 999px;

    background: linear-gradient(135deg, #3b82f6, #2563eb);
    color: #fff;

    font-size: 11px;
    font-weight: 700;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    box-shadow: 0 6px 16px rgba(59, 130, 246, 0.35);

    border: 2px solid rgba(10, 15, 28, 0.85);
    
    transform: scale(${({ $animate }) => ($animate ? 1.2 : 1)});
    transition: transform 0.2s ease;

    pointer-events: none;
`;
