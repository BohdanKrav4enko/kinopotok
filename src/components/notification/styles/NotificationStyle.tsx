import styled, { keyframes, css } from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 9999;

    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (max-width: 768px) {
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        right: auto;
        align-items: center;
        width: 100%;
        padding: 0 10px;
    }
`;

const slideIn = keyframes`
    from {
        transform: translateX(-30px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
`;

const slideOut = keyframes`
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(-30px);
        opacity: 0;
    }
`;

export const Toast = styled.div<{ $type: string; $closing?: boolean }>`
    padding: 14px 18px;
    border-radius: 14px;

    color: #fff;
    font-weight: 600;

    min-width: 220px;
    max-width: 360px;

    backdrop-filter: blur(12px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);

    background: ${({ $type }) => {
        switch ($type) {
            case "error":
                return "linear-gradient(135deg, #ef4444, #b91c1c)";
            case "success":
                return "linear-gradient(135deg, #22c55e, #15803d)";
            case "info":
            default:
                return "linear-gradient(135deg, #2563eb, #7c3aed)";
        }
    }};

    transition: transform 0.25s ease, box-shadow 0.25s ease;

    animation: ${({ $closing }) =>
            $closing
                    ? css`${slideOut} 0.25s ease forwards`
                    : css`${slideIn} 0.25s ease forwards`};

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 14px 32px rgba(0, 0, 0, 0.45);
    }

    &:active {
        transform: translateY(0);
    }

    @media (max-width: 768px) {
        width: 100%;
        max-width: 92vw;
        text-align: center;
    }
`;