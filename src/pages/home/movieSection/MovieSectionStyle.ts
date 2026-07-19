import styled from "styled-components";

export const Section = styled.section`
    padding: 40px 55px;
    background: #050817;

    @media (max-width: 1200px) {
        padding: 36px 40px;
    }

    @media (max-width: 768px) {
        padding: 32px 20px;
    }

    @media (max-width: 480px) {
        padding: 24px 16px;
    }
`;
export const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 18px;
`;
export const Arrows = styled.div`
    display: flex;
    gap: 10px;

    @media (max-width: 768px) {
        display: none;
    }
`;
export const ArrowButton = styled.button`
    width: 42px;
    height: 42px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid rgba(255,255,255,.08);
    border-radius: 50%;

    background: rgba(255,255,255,.04);
    color: #fff;

    cursor: pointer;

    transition: .25s;

    &:hover {
        background: #6C4DFF;
        border-color: #6C4DFF;
        transform: scale(1.05);
    }

    &:active {
        transform: scale(.96);
    }

    svg {
        width: 20px;
        height: 20px;
    }
`;
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 24px;
`;

export const Title = styled.h2`
    margin: 0;

    font-size: 28px;
    font-weight: 700;
    color: #ffffff;
    @media (max-width: 480px) {
        font-size: 24px;
    }
    @media (max-width: 400px) {
        font-size: 20px;
    }
`;

export const More = styled.button`
    background: transparent;
    border: none;

    color: #6f7cff;
    font-size: 15px;
    font-weight: 500;

    cursor: pointer;

    transition: color .2s ease;

    &:hover {
        color: #9ca7ff;
    }
    @media (max-width: 768px) {
        font-size: 14px;
    }
    @media (max-width: 400px) {
        font-size: 13px;
    }
`;

export const Grid = styled.div`
    display: flex;
    gap: 20px;

    overflow-x: auto;
    overflow-y: hidden;

    padding: 14px 12px 18px;

    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;