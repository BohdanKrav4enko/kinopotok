import styled from "styled-components";

export const Wrapper = styled.section`
    margin-top: 80px;
    padding: 0 32px;

    @media (max-width: 992px) {
        margin-top: 64px;
        padding: 0 24px;
    }

    @media (max-width: 768px) {
        margin-top: 56px;
        padding: 0 20px;
    }

    @media (max-width: 480px) {
        margin-top: 48px;
        padding: 0 16px;
    }
`;
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 24px;
`;
export const Buttons = styled.div`
    display: flex;
    gap: 10px;

    @media (max-width: 768px) {
        display: none;
    }
`;
export const ArrowButton = styled.button`
    width: 44px;
    height: 44px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid rgba(255,255,255,.08);
    border-radius: 50%;

    background: rgba(255,255,255,.04);
    color: white;

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
        width: 22px;
        height: 22px;
    }
`;
export const Grid = styled.div`
    display: flex;
    gap: 18px;

    overflow-x: auto;
    scroll-behavior: smooth;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    > * {
        flex: 0 0 180px;
    }
`;
export const Title = styled.h2`
    margin-bottom: 24px;

    color: #fff;

    font-size: clamp(24px, 2vw, 32px);
    font-weight: 700;

    letter-spacing: -.02em;
`;

