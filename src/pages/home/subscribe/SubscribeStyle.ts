import styled from "styled-components";

export const Section = styled.section`
    position: relative;

    margin: 70px 55px;
    height: 340px;

    border-radius: 24px;

    overflow: hidden;

    display: flex;
    align-items: center;

    background: #14182d;

    @media (max-width: 992px) {
        margin: 60px 30px;
        height: 300px;
    }

    @media (max-width: 768px) {
        justify-content: center;
        margin: 50px 16px;
        height: 420px;
    }
`;

export const Background = styled.div`
    position: absolute;
    inset: 0;

    background-image:
            linear-gradient(
                    90deg,
                    rgba(10, 12, 28, .98) 0%,
                    rgba(10, 12, 28, .92) 28%,
                    rgba(10, 12, 28, .65) 48%,
                    rgba(10, 12, 28, .25) 68%,
                    transparent 100%
            ),
            url("/images/SubscribeBanner.webp");

    background-repeat: no-repeat;
    background-position: right center;
    background-size: cover;

    @media (max-width: 768px) {
        background-position: right center;
        background-size: cover;

        background-image:
                linear-gradient(
                        90deg,
                        rgba(10,12,28,.96) 0%,
                        rgba(10,12,28,.82) 35%,
                        rgba(10,12,28,.45) 60%,
                        transparent 100%
                ),
                url("/images/SubscribeBanner.webp");
    }
`;

export const Content = styled.div`
    position: relative;
    z-index: 2;

    max-width: 520px;

    padding-left: 50px;

    @media (max-width: 768px) {
        padding: 0 24px;
        max-width: 100%;
        text-align: center;
    }
`;

export const Title = styled.h2`
    margin: 0;

    color: white;

    font-size: 42px;
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: 32px;
    }
`;

export const Text = styled.p`
    margin-top: 18px;

    color: #AAB1C5;

    font-size: 17px;
    line-height: 28px;

    @media (max-width: 768px) {
        font-size: 15px;
        line-height: 24px;
    }
`;

export const Form = styled.div`
    display: flex;

    gap: 14px;

    margin-top: 34px;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

export const Input = styled.input`

    height: 52px;

    padding: 0 18px;

    border: 1px solid rgba(255,255,255,.08);

    border-radius: 12px;

    background: rgba(255,255,255,.06);

    color: white;

    outline: none;

    backdrop-filter: blur(10px);

    &::placeholder{
        color:#98A1BB;
    }
`;

export const Button = styled.button`
    height: 52px;

    padding: 0 28px;

    border: none;

    border-radius: 12px;

    background: linear-gradient(
            90deg,
            #6B4EFF,
            #3C82FF
    );

    color: white;

    font-weight: 600;

    cursor: pointer;

    transition: .25s;

    &:hover{
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(107,78,255,.35);
    }
`;