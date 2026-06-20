import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;

    font-size: 0.9rem;

    color: #94a3b8;

    margin-bottom: 14px;
`;

export const Crumb = styled.span<{ $active?: boolean }>`
    cursor: pointer;

    color: ${({ $active }) => ($active ? "#60a5fa" : "#cbd5e1")};

    transition: all 0.2s ease;

    &:hover {
        color: #60a5fa;
    }
`;

export const Separator = styled.span`
    color: rgba(148, 163, 184, 0.5);
`;