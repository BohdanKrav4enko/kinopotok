import styled from "styled-components";

export const FavButton = styled.button<{ $active?: boolean }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    padding: 12px 18px;

    border-radius: 12px;

    font-size: 0.95rem;
    font-weight: 600;

    cursor: pointer;

    transition: all 0.25s ease;

    background: ${({ $active }) =>
            $active ? "rgba(59, 130, 246, 0.15)" : "rgba(255, 255, 255, 0.06)"};

    color: ${({ $active }) => ($active ? "#60a5fa" : "#d1d5db")};

    border: 1px solid
    ${({ $active }) =>
            $active ? "rgba(59, 130, 246, 0.4)" : "rgba(255, 255, 255, 0.08)"};

    box-shadow: ${({ $active }) =>
            $active ? "0 10px 25px rgba(59, 130, 246, 0.2)" : "none"};

    &:hover {
        transform: translateY(-2px);
        background: ${({ $active }) =>
                $active ? "rgba(59, 130, 246, 0.25)" : "rgba(255, 255, 255, 0.1)"};
    }

    &:active {
        transform: translateY(0);
    }
`;
