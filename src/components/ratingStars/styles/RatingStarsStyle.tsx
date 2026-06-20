import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;

`;

export const Star = styled.span<{ $active: boolean }>`
    font-size: 1.4rem;

    cursor: default;

    color: ${({ $active }) =>
            $active ? "#facc15" : "rgba(255, 255, 255, 0.15)"};

    transform: ${({ $active }) => ($active ? "scale(1.1)" : "scale(1)")};

    transition: all 0.2s ease;

    filter: ${({ $active }) =>
            $active ? "drop-shadow(0 0 6px rgba(250, 204, 21, 0.6))" : "none"};

    &:hover {
        transform: scale(1.25);
        filter: drop-shadow(0 0 10px rgba(250, 204, 21, 0.8));
    }
    @media (max-width: 768px) {
        font-size: 1.2rem;
    }

    @media (max-width: 480px) {
        font-size: 1.05rem;
    }
`;

export const Value = styled.span`
    margin-left: 10px;

    color: #94a3b8;
    font-size: 0.9rem;
    font-weight: 600;
`;