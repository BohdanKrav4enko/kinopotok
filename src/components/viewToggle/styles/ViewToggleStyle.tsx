import styled from "styled-components";

export const ToggleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;


    .title {
        font-size: 1.4rem;
        font-weight: 700;
        color: #fff;
    }

    .controls {
        display: flex;
        gap: 8px;
    }
`;
export const ToggleButton = styled.button<{ $active?: boolean }>`
    width: 42px;
    height: 42px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 10px;

    border: 1px solid rgba(255, 255, 255, 0.08);

    background: ${({ $active }) =>
    $active ? "rgba(59, 130, 246, 0.25)" : "rgba(255,255,255,0.04)"};

    color: ${({ $active }) => ($active ? "#60a5fa" : "#9ca3af")};

    cursor: pointer;

    transition: all 0.2s ease;

    font-size: 14px;
    line-height: 1;

    &:hover {
        transform: translateY(-2px);
        background: rgba(59, 130, 246, 0.2);
        color: #fff;
    }

    &:active {
        transform: translateY(0);
    }
`;