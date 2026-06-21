import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;

    font-size: 0.9rem;
    color: #94a3b8;

    margin-bottom: 14px;

    @media (max-width: 768px) {
        font-size: 0.8rem;
        gap: 4px;
        margin-bottom: 10px;
    }

    @media (max-width: 480px) {
        font-size: 0.75rem;
        gap: 3px;
        flex-wrap: wrap;
    }
`;

export const Crumb = styled.span<{ $active?: boolean }>`
    cursor: pointer;

    color: ${({ $active }) => ($active ? "#60a5fa" : "#cbd5e1")};

    transition: all 0.2s ease;

    white-space: nowrap;

    &:hover {
        color: #60a5fa;
    }

    @media (max-width: 768px) {
        font-size: 0.85rem;
    }

    @media (max-width: 480px) {
        font-size: 0.75rem;
    }
`;

export const Separator = styled.span`
    color: rgba(148, 163, 184, 0.5);

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }

    @media (max-width: 480px) {
        font-size: 0.7rem;
    }
`;