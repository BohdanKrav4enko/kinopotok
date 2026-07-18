import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;

    min-height: 420px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    padding: 40px 20px;
`;

export const Icon = styled.div`
    width: 90px;
    height: 90px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 24px;

    border-radius: 22px;

    background: rgba(124, 92, 255, .08);

    border: 1px solid rgba(124, 92, 255, .18);

    color: #7c5cff;

    svg {
        width: 46px;
        height: 46px;
    }
`;

export const Title = styled.h2`
    margin: 0;

    color: #fff;

    font-size: 28px;
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

export const Subtitle = styled.p`
    max-width: 520px;

    margin-top: 14px;

    color: #8b93a7;

    font-size: 16px;
    line-height: 1.7;

    @media (max-width: 768px) {
        font-size: 15px;
    }
`;