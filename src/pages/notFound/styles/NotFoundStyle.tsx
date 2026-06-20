import styled from "styled-components";

export const Wrapper = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 60px 20px;

    @media (max-width: 768px) {
        min-height: calc(100vh - 120px);
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 14px;

    padding: 32px 28px;

    border-radius: 16px;

    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.08);

    backdrop-filter: blur(14px);

    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);

    transition: 0.2s ease;

    &:hover {
        transform: translateY(-4px);
    }
`;

export const Icon = styled.div`
    svg {
        font-size: 64px;
        color: rgba(203, 213, 225, 0.8);
    }
`;

export const Title = styled.h1`
    font-size: 56px;
    margin: 0;

    color: #cbd5e1;
    letter-spacing: 1px;
`;

export const Text = styled.p`
    font-size: 15px;
    margin: 0;

    color: rgba(203, 213, 225, 0.7);
`;

export const Button = styled.button`
    margin-top: 10px;

    padding: 10px 16px;

    border-radius: 12px;

    font-size: 0.95rem;
    font-weight: 600;

    cursor: pointer;

    transition: all 0.2s ease;

    color: #cbd5e1;

    background: rgba(59, 130, 246, 0.15);
    border: 1px solid rgba(59, 130, 246, 0.25);

    backdrop-filter: blur(12px);

    &:hover {
        transform: translateY(-2px);
        background: rgba(59, 130, 246, 0.25);
    }

    &:active {
        transform: scale(0.96);
    }
`;