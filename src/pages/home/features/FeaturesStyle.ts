import styled from "styled-components";

export const Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    gap: 24px;

    padding: 40px 55px;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);

        padding: 40px;
        gap: 20px;
    }

    @media (max-width: 700px) {
        grid-template-columns: 1fr;

        padding: 30px 20px;
        gap: 16px;
    }
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    padding: 18px;

    border-radius: 16px;


    border: 1px solid rgba(255,255,255,.05);

    transition: .25s;

    &:hover {
        transform: translateY(-2px);

        border-color: rgba(108,99,255,.25);

        background: rgba(255,255,255,.05);
    }

    @media (max-width: 768px) {
        padding: 16px;
    }
`;

export const Icon = styled.div`
    width: 52px;
    height: 52px;

    flex-shrink: 0;

    border-radius: 14px;


    display: flex;
    align-items: center;
    justify-content: center;

    color: #7d5cff;

    font-size: 20px;
    font-weight: 700;

    @media (max-width: 768px) {
        width: 46px;
        height: 46px;

        font-size: 18px;
    }
`;

export const Title = styled.h4`
    margin: 0;

    color: #fff;

    font-size: 16px;
    font-weight: 600;

    @media (max-width: 768px) {
        font-size: 15px;
    }
`;

export const Text = styled.p`
    margin: 6px 0 0;

    color: #8b93a7;

    font-size: 14px;
    line-height: 1.5;

    @media (max-width: 768px) {
        font-size: 13px;
    }
`;