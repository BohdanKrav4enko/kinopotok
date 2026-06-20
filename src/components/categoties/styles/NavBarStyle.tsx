import styled from "styled-components";

export const Bar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    padding: 12px 16px;

    background: rgba(255, 255, 255, 0.02);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);

    backdrop-filter: blur(12px);

    @media (max-width: 768px) {
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
export const NavButton = styled.button<{ $active?: boolean }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;

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
`;
