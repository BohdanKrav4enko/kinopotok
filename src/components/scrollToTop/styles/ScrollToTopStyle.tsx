import styled from "styled-components";

export const Button = styled.button`
    position: fixed;
    right: 18px;
    bottom: 18px;
    z-index: 1001;

    width: 52px;
    height: 52px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;

    border-radius: 14px;

    cursor: pointer;

    color: #60a5fa;

    background: rgba(59, 130, 246, 0.18);

    backdrop-filter: blur(12px);

    box-shadow:
        0 10px 25px rgba(59, 130, 246, 0.25),
        0 0 20px rgba(59, 130, 246, 0.15),
        inset 0 0 0 1px rgba(255, 255, 255, 0.05);

    transition: all 0.25s ease;

    svg {
        font-size: 22px;
    }

    &:hover {
        transform: translateY(-3px);

        background: rgba(59, 130, 246, 0.28);

        box-shadow:
            0 14px 35px rgba(59, 130, 246, 0.35),
            0 0 28px rgba(59, 130, 246, 0.25);
    }

    &:active {
        transform: scale(0.95);
        box-shadow:
            0 8px 20px rgba(59, 130, 246, 0.2);
    }

    @media (max-width: 768px) {
        right: 14px;
        bottom: 80px; /* чтобы не мешала bottom navbar */
    }
`;