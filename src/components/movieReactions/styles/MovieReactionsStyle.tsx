import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 14px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Header = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
`;

export const Button = styled.button<{ $active?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    width: 100%;
    padding: 8px 12px;
    border-radius: 10px;

    background: rgba(255, 255, 255, 0.06);
    color: #e2e8f0;

    font-weight: 600;

    transition: 0.2s;
    background: ${({ $active }) =>
            $active
                    ? "rgba(59, 130, 246, 0.15)"
                    : "rgba(255,255,255,0.05)"};

    border: 1px solid
    ${({ $active }) =>
            $active
                    ? "rgba(59, 130, 246, 0.5)"
                    : "rgba(255,255,255,0.08)"};

    &:disabled {
        cursor: default;
    }
    svg {
        font-size: 18px;
    }

    &:hover {
        background: rgba(255, 255, 255, 0.12);
        transform: translateY(-1px);
    }

    &:active {
        transform: scale(0.97);
    }
`;

export const Count = styled.span`
    color: #94a3b8;
    font-size: 0.9rem;
`;

export const RatingBar = styled.div`
    height: 8px;
    width: 100%;

    border-radius: 999px;
    overflow: hidden;

    display: flex;

    background: rgba(255, 255, 255, 0.05);
`;

export const LikesFill = styled.div`
    background: #22c55e;
    transition: width 0.3s ease;
`;

export const DislikesFill = styled.div`
    background: #ef4444;
    transition: width 0.3s ease;
`;