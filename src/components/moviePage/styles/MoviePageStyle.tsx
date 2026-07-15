import styled from "styled-components";

export const Container = styled.div`
    max-width: 1450px;
    margin: 0 auto;
    padding-bottom: 80px;
`;

export const Hero = styled.section`
    position: relative;

    width: 100vw;
    height: 720px;

    margin-left: calc(50% - 50vw);

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

export const HeroBackground = styled.img`
    position: absolute;
    inset: 0;

    width: 100%;
    height: 100%;

    object-fit: cover;
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
        height: 52px;

        padding: 0 20px;

        display: flex;
        align-items: center;
        justify-content: center;

        border: none;
        border-radius: 10px;

        font-size: 15px;
        font-weight: 600;

        cursor: pointer;

        transition: .25s;

        white-space: nowrap;
    }

    button:first-child {
        background: #6c4dff;
        color: #fff;

        box-shadow: 0 10px 25px rgba(108, 77, 255, .35);

        &:hover {
            background: #7b5dff;
            transform: translateY(-2px);
        }
    }

    button:last-child {
        background: rgba(255,255,255,.08);
        border: 1px solid rgba(255,255,255,.08);
        color: #fff;

        &:hover {
            background: rgba(255,255,255,.12);
        }
    }

    > *:nth-child(2) {
        flex-shrink: 0;
    }

    @media (max-width: 560px) {
        flex-wrap: wrap;

        button:first-child {
            width: 100%;
        }

        > *:nth-child(2),
        button:last-child {
            flex: 1;
        }
    }
`;

export const Stats = styled.section`
    display: flex;

    margin-top: 36px;

    position: relative;
    z-index: 20;

    background: rgba(17, 21, 34, 0.95);

    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 12px;

    overflow: hidden;

    backdrop-filter: blur(18px);

    @media (max-width: 992px) {
        flex-wrap: wrap;
    }

    @media (max-width: 576px) {
        flex-direction: column;
    }
`;

export const StatItem = styled.div`
    flex: 1;

    min-width: 0;

    padding: 28px 30px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;

    &:not(:last-child) {
        border-right: 1px solid rgba(255, 255, 255, 0.06);
    }

    @media (max-width: 992px) {
        flex: 0 0 50%;

        &:nth-child(2n) {
            border-right: none;
        }

        &:nth-child(-n + 2) {
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
    }

    @media (max-width: 576px) {
        flex: 1;

        border-right: none !important;

        &:not(:last-child) {
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
    }

    small {
        color: #7d8597;

        font-size: 12px;
        font-weight: 500;

        text-transform: uppercase;
        letter-spacing: .08em;
    }

    strong {
        color: #ffffff;

        font-size: 28px;
        font-weight: 700;

        line-height: 1.1;
    }

    span {
        color: #a0a8ba;

        font-size: 14px;
        line-height: 1.5;
    }
`;
export const StatDivider = styled.div`
    width: 1px;
    background: rgba(255,255,255,.06);

    @media (max-width:1100px){
        display:none;
    }
`;

export const About = styled.section`
    margin-top: 42px;
`;

export const AboutContent = styled.div`
    display: flex;
    gap: 42px;

    align-items: start;

    @media (max-width: 550px) {
        flex-direction: column;
    }
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
    margin-top: 34px;
    margin-left: 20px;
    display: grid;
    grid-template-columns: repeat(2, minmax(220px, 1fr));

    gap: 18px 40px;

    @media (max-width:800px){
        grid-template-columns:1fr;
    }

    div{
        display:flex;
        flex-direction:column;
        gap:8px;
    }

    b{
        color:#8f98aa;
        font-size:14px;
        font-weight:600;
    }

    span{
        color:white;
        font-size:15px;
        line-height:1.6;
    }
`;
export const WatchCard = styled.div`
    position: sticky;
    top: 100px;

    background: #121624;

    border: 1px solid rgba(255,255,255,.06);

    border-radius: 14px;

    overflow: hidden;
    box-shadow:
        0 15px 40px rgba(0,0,0,.35);

    @media (max-width:992px){
        position: static;
        max-width: 360px;
    }
    @media (max-width: 550px) {
        width: auto;
        max-width: 100%;
        margin: 0 auto;
    }

    img {
        object-fit: cover;
        display: block;
        height: auto;
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

export const ProgressBar = styled.div`
    height:6px;

    margin:0 22px 22px;

    border-radius:999px;

    overflow:hidden;

    background:rgba(255,255,255,.08);

    div{
        width:38%;
        height:100%;

        background:linear-gradient(
            90deg,
            #7B5DFF,
            #A78BFA
        );

        border-radius:999px;
    }
`;

export const TrailerSection = styled.section`
    margin-top:70px;
`;

export const TrailerTitle = styled.h2`
    color:white;

    font-size:32px;
    font-weight:700;

    margin-bottom:24px;
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

export const Divider = styled.div`
    height:1px;

    margin:70px 0;

    background:rgba(255,255,255,.06);
`;

export const Section = styled.section`
    margin-top:70px;
`;

export const SectionHeader = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;

    margin-bottom:24px;

    h2{
        color:white;
        font-size:30px;
        font-weight:700;
    }

    a{
        color:#8b94a7;
        text-decoration:none;

        transition:.2s;

        &:hover{
            color:white;
        }
    }
`;

export const GlassCard = styled.div`
    background:#121624;

    border:1px solid rgba(255,255,255,.06);

    border-radius:14px;

    padding:24px;
`;

export const Badge = styled.div`
    display:inline-flex;
    align-items:center;

    height:30px;

    padding:0 12px;

    border-radius:999px;

    background:rgba(123,93,255,.15);

    color:#a78bfa;

    font-size:13px;
    font-weight:600;
`;

export const EmptyBlock = styled.div`
    height:180px;

    border-radius:14px;

    border:1px dashed rgba(255,255,255,.08);

    display:flex;
    align-items:center;
    justify-content:center;

    color:#727b8c;
`;

export const Spacer = styled.div`
    height:70px;
`;