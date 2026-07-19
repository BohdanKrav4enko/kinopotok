import styled from "styled-components";
import {Link} from "react-router-dom";

export const Container = styled.div`
    max-width: 1450px;
    margin: 0 auto;
    padding-bottom: 80px;
`;

export const Hero = styled.section`
    position: relative;

    width: 100vw;
    margin-left: calc(50% - 50vw);
    
    height: 720px;

    

    overflow: hidden;

    display: flex;
    align-items: flex-end;

    @media (max-width: 992px) {
        height: 620px;
    }

    @media (max-width: 768px) {
        height: 540px;
    }
`;

export const HeroBackground = styled.img<{ $isPoster: boolean }>`
    position: absolute;
    inset: 0;

    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center;

    transition: .3s;

    ${({ $isPoster }) =>
            $isPoster &&
            `
            filter: blur(24px) brightness(.55);
            transform: scale(1.2);
        `}
`;

export const HeroOverlay = styled.div`
    position: absolute;
    inset: 0;

    background:
        linear-gradient(
            to top,
            rgba(8, 10, 18, 1) 0%,
            rgba(8, 10, 18, .2) 45%,
            rgba(8, 10, 18, .55) 100%
        );
`;

export const HeroGradient = styled.div`
    position: absolute;
    inset: 0;

    background:
        linear-gradient(
            90deg,
            rgba(8,10,18,.98) 0%,
            rgba(8,10,18,.95) 22%,
            rgba(8,10,18,.80) 38%,
            rgba(8,10,18,.45) 58%,
            rgba(8,10,18,0) 100%
        );
`;

export const HeroContent = styled.div`
    position: relative;
    z-index: 5;
    height: 90%;

    padding-bottom: 20px;
    padding-left: calc((100vw - 1450px) / 2 + 20px);

    display: flex;
    flex-direction: column;
    gap: 22px;

    @media (max-width: 1500px) {
        padding-left: 32px;
    }
    @media (max-width: 1024px) {
        height: auto;
    }
    @media (max-width:768px){
        width:100%;
        padding:20px;
    }
`;

export const Title = styled.h1`
    color:white;

    font-size:60px;
    font-weight:800;
    line-height:1.05;

    letter-spacing:-.03em;

    @media(max-width:768px){
        font-size:42px;
    }
`;

export const Meta = styled.div`
    display:flex;
    align-items:center;
    gap:12px;

    flex-wrap:wrap;

    color:#d7d9df;

    font-size:14px;
`;

export const Dot = styled.div`
    width:4px;
    height:4px;

    border-radius:50%;

    background:rgba(255,255,255,.35);
`;

export const RatingBadge = styled.div`
    display:flex;
    align-items:center;
    gap:6px;

    padding:4px 8px;

    border-radius:4px;

    background:#191c28;

    color:#FFC83D;

    font-size:13px;
    font-weight:700;
`;

export const HdBadge = styled.div`
    padding:2px 6px;

    border-radius:4px;

    border:1px solid #6C4DFF;

    color:#8D74FF;

    font-size:12px;
    font-weight:600;
`;

export const Genres = styled.div`
    color:#d3d6de;

    font-size:15px;
`;
export const HeroDescription = styled.div`
    max-width: 400px;
    width: 100%;
`
export const Description = styled.p`
    color:#c9ccd6;
    
    font-size:16px;

    line-height:1.9;

    @media(max-width:768px){
        display:none;
    }
`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    margin-top: 10px;

    button {
        position: relative;
        overflow: hidden;

        height: 52px;
        padding: 0 20px;
        gap: 6px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 10px;

        font-size: 15px;
        font-weight: 600;

        cursor: pointer;

        transition:
                transform .25s ease,
                box-shadow .25s ease,
                border-color .25s ease,
                background .25s ease;
    }

    button svg {
        width: 20px;
        height: 20px;
        flex-shrink: 0;
    }


    button:first-child {
        border: 1px solid rgba(34,144,255,.35);

        background: linear-gradient(
                180deg,
                #39b4ff 0%,
                #1188ff 55%,
                #0066ff 100%
        );

        color: #fff;

        box-shadow:
                0 10px 28px rgba(0,110,255,.35),
                inset 0 1px rgba(255,255,255,.22);

        &::before{
            content:"";
            position:absolute;
            inset:0;

            background:linear-gradient(
                    180deg,
                    rgba(255,255,255,.18),
                    transparent 45%
            );
        }

        &:hover{
            transform:translateY(-2px);

            box-shadow:
                    0 18px 42px rgba(0,110,255,.45),
                    0 0 24px rgba(0,110,255,.22);
        }
    }

    button:last-child {
        border: 1px solid rgba(255,255,255,.08);

        background: rgba(17,23,40,.92);

        backdrop-filter: blur(18px);

        color: #fff;

        box-shadow:
                inset 0 1px rgba(255,255,255,.05);

        &:hover{
            transform: translateY(-2px);

            border-color: rgba(34,144,255,.35);

            background: rgba(20,28,48,.95);

            box-shadow:
                    0 12px 28px rgba(0,0,0,.35),
                    0 0 18px rgba(34,144,255,.12);
        }
    }

    > *:nth-child(2) {
        flex-shrink: 0;
    }

    @media (max-width:560px){
        flex-wrap:wrap;

        button:first-child{
            width:100%;
        }

        > *:nth-child(2),
        button:last-child{
            flex:1;
        }
    }
`;
export const Stats = styled.div`
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    border: 1px solid rgba(255,255,255,.06);
    border-radius: 16px;

    overflow: hidden;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const StatItem = styled.div`
    padding:24px;

    display:flex;
    flex-direction:column;
    gap:8px;


    small{
        color:#8b94a7;

        font-size:13px;

        font-weight:500;
    }


    strong{
        display:flex;

        align-items:center;

        gap:8px;


        color:#fff;

        font-size: clamp(16px, 4vw, 22px);

        font-weight:700;
    }


    svg{
        color:#FFC83D;

        flex-shrink:0;
    }


    &:not(:nth-child(2n)) {
        border-right: 1px solid rgba(255,255,255,.06);
    }

    &:nth-child(-n + 2) {
        border-bottom: 1px solid rgba(255,255,255,.06);
    }

    @media (min-width:769px) {
        border-bottom:none !important;

        &:not(:last-child){
            border-right:1px solid rgba(255,255,255,.06);
        }
    }
`;

export const About = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

export const SectionTitle = styled.h2`
    color: white;

    font-size: 32px;
    font-weight: 700;

    margin-bottom: 18px;
`;
export const DescriptionContainer = styled.div`
    padding: 20px;
`
export const AboutText = styled.p`
    color: #cdd2dc;

    line-height: 1.9;

    font-size: 15px;

    max-width: 720px;
`;

export const InfoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 10px;
    }
    @media (max-width: 480px) {
        gap: 4px;
    }
    > div {
        padding: 20px;

        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;


        border: 1px solid rgba(255,255,255,.05);
        border-radius: 14px;
    }

    b {
        color: rgba(255,255,255,.7);
    }

    span {
        text-align: right;
    }
`;

export const ProgressInfo = styled.div`
    padding:20px 22px 12px;

    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:12px;

    span:first-child{
        color:white;
        font-size:15px;
        font-weight:600;
    }

    span:last-child{
        color:#8b94a7;
        font-size:13px;
        white-space:nowrap;
    }
`;

export const TrailerFrame = styled.iframe`
    margin-top: 20px;
    width:100%;

    aspect-ratio:16 / 9;

    border:none;

    border-radius:18px;

    background:#10131d;

    box-shadow:
        0 20px 60px rgba(0,0,0,.35);
`;

export const BottomSection = styled.div`
        display: grid;
        grid-template-columns: 1fr 280px;
        gap: 32px;
        align-items: start;

    @media (max-width: 550px) {
        grid-template-columns: 1fr;
    }
`;
export const CastSection = styled.div`
    padding: 24px;


    border: 1px solid rgba(255,255,255,.05);
    border-radius: 16px;

    display: flex;
    flex-direction: column;
    gap: 12px;
`;
export const SideTitle = styled.h3`
    margin-bottom: 8px;

    font-size: 18px;
    font-weight: 600;
`;
export const CastItem = styled.div`
    padding: 14px 16px;

    background: rgba(255,255,255,.03);

    border: 1px solid rgba(255,255,255,.05);
    border-radius: 12px;

    transition: .2s;

    &:hover {
        transform: translateX(4px);

        border-color: rgba(255,255,255,.12);
    }
`;
export const WatchCard = styled.div`
    position: sticky;
    top: 100px;

    background: #121624;

    border: 1px solid rgba(255,255,255,.05);
    border-radius: 16px;

    overflow: hidden;

    img {
        width: 100%;
        display: block;
    }

    @media (max-width: 550px) {
        position: static;
        max-width: 320px;
        margin: 0 auto;
    }
`;
export const GenresLinks = styled.div`
    display:flex;

    flex-wrap:wrap;

    justify-content:flex-end;

    gap:6px;
`;
export const InfoItem = styled.div`
    padding:20px;

    display:flex;

    justify-content:space-between;

    align-items:center;

    gap:16px;


    border:1px solid rgba(255,255,255,.05);

    border-radius:14px;
`;
export const GenreLink = styled(Link)`
    color:#fff;

    font-size:14px;

    text-decoration:none;

    transition:.25s;


    &:hover{
        color:#8d74ff;
        text-decoration:underline;
    }
`;