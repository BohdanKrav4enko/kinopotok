import styled from "styled-components";

export const HeroWrapper = styled.section`
    position: relative;

    display: flex;
    align-items: center;

    min-height: 650px;

    padding: 90px 60px 80px;


    overflow: hidden;

    @media (max-width: 1400px) {
        min-height: 600px;
        padding: 80px 50px 70px;
    }

    @media (max-width: 992px) {
        min-height: 560px;
        padding: 70px 40px 60px;
    }

    @media (max-width: 768px) {
        min-height: 620px;
        justify-content: center;
        text-align: center;
        padding: 60px 24px 80px;
    }

    @media (max-width: 480px) {
        min-height: 560px;
        padding: 50px 20px 70px;
    }
`;

export const Background = styled.div`
    position: absolute;
    inset: 0;

    z-index: 0;

    background-image:
            linear-gradient(
                    90deg,
                    #050817 0%,
                    rgba(5, 8, 23, .97) 18%,
                    rgba(5, 8, 23, .88) 32%,
                    rgba(5, 8, 23, .55) 45%,
                    rgba(5, 8, 23, .18) 60%,
                    transparent 78%
            ),
            url("/images/banner.webp");

    background-repeat: no-repeat;
    background-position: right center;
    background-size: contain;

    &::after{
        content:"";

        position:absolute;

        left:0;
        right:0;
        bottom:0;

        height:110px;

        background:linear-gradient(
                transparent,
                #050817
        );
    }

    @media (max-width:1400px){
        background-size:72%;
    }

    @media (max-width:1200px){
        background-size:78%;
    }

    @media (max-width:992px){

        background-size:90%;
        background-position:center top;

        background-image:
                linear-gradient(
                        180deg,
                        rgba(5,8,23,.08) 0%,
                        rgba(5,8,23,.35) 45%,
                        #050817 100%
                ),
                linear-gradient(
                        90deg,
                        #050817 0%,
                        rgba(5,8,23,.92) 18%,
                        rgba(5,8,23,.55) 35%,
                        transparent 65%
                ),
                url("/images/banner.webp");
    }

    @media (max-width:768px){

        background-size:125%;
        background-position:center top;

        background-image:
                linear-gradient(
                        180deg,
                        rgba(5,8,23,.1) 0%,
                        rgba(5,8,23,.45) 45%,
                        #050817 100%
                ),
                linear-gradient(
                        90deg,
                        #050817 0%,
                        rgba(5,8,23,.90) 18%,
                        rgba(5,8,23,.45) 35%,
                        transparent 60%
                ),
                url("/images/banner.webp");

        &::after{
            height:80px;
        }
    }

    @media (max-width:480px){

        background-size:170%;
        background-position:center top;

        &::after{
            height:60px;
        }
    }
`;

export const HeroContent = styled.div`
    position: relative;

    z-index: 2;

    max-width: 560px;

    @media (max-width:768px){
        max-width:100%;
        margin-top:-120px;
    }

    @media (max-width:480px){
        margin-top:-80px;
    }
`;

export const Title = styled.h1`
    margin: 0;

    color: #fff;

    font-size: clamp(2.3rem, 5vw, 4.2rem);
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -0.03em;

    text-wrap: balance;

    text-shadow:
            0 4px 24px rgba(0, 0, 0, 0.45);

    span {
        background: linear-gradient(
                90deg,
                #8b5cf6 0%,
                #6b4eff 45%,
                #3b82f6 100%
        );

        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    @media (max-width: 1200px) {
        font-size: clamp(2rem, 4.8vw, 3.6rem);
    }

    @media (max-width: 768px) {
        font-size: clamp(1.8rem, 6vw, 2.8rem);
        text-align: center;
        span {
            background: none;
            -webkit-background-clip: initial;
            background-clip: initial;
            -webkit-text-fill-color: #fff;
            color: #fff;
        }
    }

    @media (max-width: 480px) {
        line-height: 1.12;
        letter-spacing: -0.02em;
    }
`;

export const Description = styled.p`
    margin-top:24px;

    color:#9CA3B8;

    font-size:18px;

    line-height:30px;

    @media(max-width:768px){
        font-size:16px;
        line-height:26px;
    }
`;

export const Buttons = styled.div`
    display: flex;
    gap: 18px;
    margin-top: 42px;

    @media (max-width: 768px) {
        justify-content: center;
        gap: 10px;
    }

    @media (max-width: 500px) {
        margin-top: 36px;
        flex-direction: column;
        width: 100%;
        gap: 8px;
    }
`;

export const PrimaryButton = styled.button`
    height: 56px;

    padding: 0 34px;

    border: none;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    background: linear-gradient(
            135deg,
            #7c5cff 0%,
            #5b49ff 45%,
            #3d8bff 100%
    );

    color: #fff;

    font-size: 15px;
    font-weight: 700;
    letter-spacing: .2px;

    cursor: pointer;

    transition: .3s ease;

    box-shadow:
            0 10px 30px rgba(91,73,255,.28);

    &:hover{
        transform: translateY(-3px);

        box-shadow:
                0 18px 40px rgba(91,73,255,.42);
    }

    &:active{
        transform: translateY(-1px);
    }

    @media(max-width:500px){
        width:100%;
    }
`;

export const SecondaryButton = styled.button`
    height: 56px;

    padding: 0 34px;

    display:flex;
    align-items:center;
    justify-content:center;
    gap: 10px;

    border-radius: 6px;

    border: 1px solid rgba(255,255,255,.12);

    background: rgba(255,255,255,.03);

    backdrop-filter: blur(12px);

    color: #fff;

    font-size: 15px;
    font-weight: 600;

    cursor: pointer;

    transition: .3s ease;

    &:hover{
        background: rgba(255,255,255,.07);
        border-color: rgba(124,92,255,.55);

        transform: translateY(-3px);
    }

    &:active{
        transform: translateY(-1px);
    }

    @media(max-width:500px){
        width:100%;
    }
`;