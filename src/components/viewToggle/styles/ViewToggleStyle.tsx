import styled from "styled-components";

export const ToggleWrapper = styled.div`
    display: flex;

    border: 1px solid rgba(255,255,255,.08);
    border-radius: 8px;

    overflow: hidden;

    background: rgba(255,255,255,.03);

    backdrop-filter: blur(10px);

    @media (max-width: 768px) {
        border-radius: 10px;
    }
`;

export const BaseButton = styled.button<{ $active?: boolean }>`
    position: relative;

    width: 44px;
    height: 44px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;

    background: ${({ $active }) =>
            $active
                    ? "rgba(139,92,246,.15)"
                    : "transparent"};

    color: ${({ $active }) =>
            $active
                    ? "#a78bfa"
                    : "rgba(255,255,255,.55)"};

    cursor: pointer;

    transition: .2s ease;

    &:hover {
        background: rgba(255,255,255,.06);
        color: white;
    }

    svg {
        font-size: 22px;
    }

    @media (max-width: 768px) {
        width: 44px;
        height: 44px;

        svg {
            font-size: 18px;
        }
    }

    @media (max-width: 480px) {
        width: 40px;
        height: 40px;

        svg {
            font-size: 16px;
        }
    }
`;

export const GridButton = styled(BaseButton)`
    border-radius: 6px 0 0 6px;

    &::after {
        content: "";

        position: absolute;

        top: 8px;
        bottom: 8px;
        right: 0;

        width: 1px;

        background: rgba(255,255,255,.08);
    }
`;

export const ListButton = styled(BaseButton)`
    border-radius: 0 6px 6px 0;
`;