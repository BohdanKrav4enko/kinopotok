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
                180deg,
                #47b3ff 0%,
                #1a8fff 45%,
                #006cff 100%
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
    position: relative;
    overflow: hidden;

    height: 56px;
    padding: 0 34px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    border: 1px solid rgba(82, 140, 255, .35);
    border-radius: 10px;

    background: linear-gradient(
            180deg,
            #2693ff 0%,
            #0d6efd 55%,
            #005eff 100%
    );

    color: #fff;

    font-size: 15px;
    font-weight: 700;

    cursor: pointer;

    box-shadow:
            0 10px 30px rgba(45,111,255,.35),
            inset 0 1px rgba(255,255,255,.25);

    transition:
            transform .25s ease,
            box-shadow .25s ease,
            filter .25s ease;

    &::before{
        content:"";
        position:absolute;
        inset:0;

        background:linear-gradient(
                180deg,
                rgba(255,255,255,.18),
                transparent 45%
        );

        pointer-events:none;
    }

    &:hover{
        transform:translateY(-3px);

        filter:brightness(1.05);

        box-shadow:
                0 18px 45px rgba(45,111,255,.45),
                0 0 25px rgba(45,111,255,.22);
    }

    &:active{
        transform:translateY(-1px);
    }

    @media(max-width:500px){
        width:100%;
    }
`;

export const SecondaryButton = styled.button`
    position: relative;
    overflow: hidden;

    height: 56px;
    padding: 0 34px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    border-radius: 10px;

    border: 1px solid rgba(255,255,255,.08);

    background: rgba(17,23,40,.9);

    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);

    color:#fff;

    font-size:15px;
    font-weight:600;

    cursor:pointer;

    box-shadow:
            inset 0 1px rgba(255,255,255,.05),
            0 8px 25px rgba(0,0,0,.28);

    transition:
            transform .25s ease,
            border-color .25s ease,
            box-shadow .25s ease,
            background .25s ease;

    &::before{
        content:"";
        position:absolute;
        inset:0;

        background:linear-gradient(
                180deg,
                rgba(52,120,255,.08),
                transparent 40%
        );

        opacity:0;
        transition:.25s;
    }

    &:hover{
        transform:translateY(-3px);

        border-color:rgba(52,120,255,.35);

        box-shadow:
                0 18px 40px rgba(0,0,0,.4),
                0 0 20px rgba(52,120,255,.15);

        &::before{
            opacity:1;
        }
    }

    &:active{
        transform:translateY(-1px);
    }

    @media(max-width:500px){
        width:100%;
    }
`;