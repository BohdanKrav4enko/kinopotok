import styled from "styled-components";

export const Wrapper = styled.main`
    position: relative;

    min-height: calc(100vh - 140px);

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;

    padding: 60px 20px;

    &::before {
        content: "";

        position: absolute;

        top: -180px;
        left: 50%;

        width: 520px;
        height: 520px;

        transform: translateX(-50%);

        border-radius: 50%;

        background: radial-gradient(
                rgba(124, 92, 255, 0.22),
                transparent 70%
        );

        filter: blur(45px);
    }

    &::after {
        content: "";

        position: absolute;

        right: -140px;
        bottom: -160px;

        width: 420px;
        height: 420px;

        border-radius: 50%;

   

        filter: blur(55px);
    }

    @media (max-width: 768px) {
        padding: 40px 20px;
    }
`;

export const Card = styled.div`
    position: relative;
    z-index: 2;

    width: 100%;
    max-width: 560px;

    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;

    padding: 0 20px;
`;

export const Label = styled.span`
    margin-bottom: 18px;

    color: #7c5cff;

    font-size: 13px;
    font-weight: 700;

    letter-spacing: .18em;
    text-transform: uppercase;
`;

export const Icon = styled.div`
    width: 96px;
    height: 96px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 30px;

    border-radius: 50%;

    background: radial-gradient(
            rgba(124, 92, 255, .24),
            rgba(124, 92, 255, .08)
    );

    border: 1px solid rgba(124, 92, 255, .18);

    box-shadow:
            0 0 35px rgba(124, 92, 255, .18),
            inset 0 0 18px rgba(255, 255, 255, .03);

    svg {
        width: 44px;
        height: 44px;

        color: #8b5cf6;
    }

    @media (max-width: 768px) {
        width: 82px;
        height: 82px;

        margin-bottom: 24px;

        svg {
            width: 38px;
            height: 38px;
        }
    }
`;

export const Title = styled.h1`
    margin: 0;

    font-size: clamp(72px, 12vw, 128px);
    font-weight: 900;

    line-height: 1;

    letter-spacing: -4px;

    background: linear-gradient(
            135deg,
            #ffffff,
            #8b5cf6,
            #3b82f6
    );

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    text-shadow: 0 0 40px rgba(124, 92, 255, .15);
`;

export const Text = styled.p`
    max-width: 460px;

    margin-top: 18px;

    color: #8b93a7;

    font-size: 18px;

    line-height: 32px;

    @media (max-width: 768px) {
        font-size: 16px;
        line-height: 28px;
    }
`;

export const Button = styled.button`
    margin-top: 42px;

    height: 56px;

    padding: 0 34px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid rgba(255, 255, 255, .06);
    border-radius: 12px;

    background: linear-gradient(
        135deg,
        #7c5cff,
        #5b49ff
    );

    color: #fff;

    font-size: 15px;
    font-weight: 700;

    cursor: pointer;

    box-shadow:
        0 12px 28px rgba(91, 73, 255, .28);

    transition: .25s;

    &:hover {
        transform: translateY(-3px);

        box-shadow:
            0 20px 42px rgba(91, 73, 255, .42);
    }

    &:active {
        transform: scale(.97);
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`;